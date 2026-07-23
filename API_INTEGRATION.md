# WhatsApp Gateway API Integration Guide

This guide describes how to integrate your website, CRM, or client application with the WhatsApp Gateway API to send automated messages, OTP verification codes, or notifications.

---

## 1. Authentication Setup

Before your website can invoke the API, you must generate a secure **Client API Key** using the Admin Dashboard.

1. Navigate to the WhatsApp Gateway Dashboard (e.g., `http://localhost:3000`).
2. Log in using your admin credentials.
3. Scroll down to the **Client API Keys** panel.
4. Input a name identifying your website or application (e.g., `E-commerce Web Server`) and click **Generate Key**.
5. Copy the generated key (formatted as `wapp_key_...`). **Keep this key secure and do not expose it in client-side code (browsers).**

---

## 2. API Reference

All requests must use `HTTP POST` and include your Client API Key in the headers.

### Send Message

* **Endpoint:** `/api/send`
* **Method:** `POST`
* **Content-Type:** `application/json`
* **Headers:**
  ```http
  Authorization: Bearer wapp_key_your_copied_api_key_here
  Content-Type: application/json
  ```

### Request Payload (JSON)

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `number` | `string` | **Yes** | The recipient's phone number with country code. |
| `message` | `string` | **No** | The text message content to send. Required if no media is sent. |
| `mediaData` | `string` | **No** | Base64-encoded file data to transmit as media. |
| `mimetype` | `string` | **No** | The mimetype of the file (e.g. `image/png`, `application/pdf`). Required if `mediaData` is sent. |
| `filename` | `string` | **No** | The original file name (e.g. `receipt.pdf`). |
| `caption` | `string` | **No** | An optional text caption to send alongside the media file. |

> [!NOTE]
> **Phone Number Formatting:**
> * Non-digit characters are automatically stripped from the phone number.
> * If a local Sri Lankan format is sent (10 digits starting with `0`, e.g., `0777876795`), it is automatically reformatted to prefix the country code (e.g., `94777876795`).
> * For international numbers, ensure you provide the full country code without leading `+` or `00` (e.g., `14155552671` for US).

#### Example 1: Text Message Request Body
```json
{
  "number": "94777876795",
  "message": "Your verification code is: 4829"
}
```

#### Example 2: Media File Upload Request Body
```json
{
  "number": "94777876795",
  "mediaData": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
  "mimetype": "image/png",
  "filename": "pixel.png",
  "caption": "Check out this image!"
}
```

---

### Fetch Active Chats

Retrieves the list of active WhatsApp chats/conversations.

* **Endpoint:** `/api/chats`
* **Method:** `GET`
* **Headers:**
  ```http
  Authorization: Bearer wapp_key_your_copied_api_key_here
  ```

#### Response (`200 OK`)
```json
[
  {
    "id": "94777876795@c.us",
    "name": "Wife",
    "isGroup": false,
    "unreadCount": 0,
    "timestamp": "2026-06-18T07:11:49.000Z"
  }
]
```

---

### Fetch Conversation Messages

Retrieves the last 50 messages/history for a specific chat.

* **Endpoint:** `/api/chats/:chatId/messages`
* **Method:** `GET`
* **Headers:**
  ```http
  Authorization: Bearer wapp_key_your_copied_api_key_here
  ```

#### Response (`200 OK`)
```json
[
  {
    "id": "true_94777876795@c.us_3EB0C34B823D",
    "body": "Hello there!",
    "fromMe": true,
    "timestamp": 1781823948000,
    "type": "chat",
    "hasMedia": false,
    "filename": null
  },
  {
    "id": "false_94777876795@c.us_3EB0D29381CA",
    "body": "",
    "fromMe": false,
    "timestamp": 1781823955000,
    "type": "image",
    "hasMedia": true,
    "filename": "image_file"
  }
]
```

---

### Download Message Media

Downloads binary media files (images, audio, video, documents) associated with a message. Supports passing the token as a query parameter for direct browser loading.

* **Endpoint:** `/api/messages/:messageId/media`
* **Method:** `GET`
* **Headers (or Query Parameter):**
  ```http
  Authorization: Bearer wapp_key_your_copied_api_key_here
  ```
  *(Alternative: Include query string parameter `?token=wapp_key_your_copied_api_key_here` for direct link loads inside `<img>`, `<video>`, `<audio>` or file links).*

#### Response (`200 OK`)
Returns the raw binary file stream with appropriate headers:
- `Content-Type`: Set dynamically based on the file mimetype (e.g. `image/png`, `audio/ogg`, `video/mp4`, `application/pdf`).
- `Content-Disposition`: Set to `inline; filename="filename"` if filename is available.

---

### Trigger Database Backup

Triggers backup of message history to the MySQL database. Supports backing up all active chats or a single chat.

* **Endpoint:** `/api/backup-chats`
* **Method:** `POST`
* **Headers:**
  ```http
  Authorization: Bearer admin_session_token_here
  Content-Type: application/json
  ```
* **Request Payload (JSON - Optional):**
  ```json
  {
    "chatId": "94777876795@c.us"
  }
  ```
  *(Note: If `chatId` is omitted, the API will back up all active chats).*

#### Response (`200 OK`)
```json
{
  "success": true,
  "message": "Successfully backed up messages for chat 'Wife'."
}
```

---

### Admin Login

Authenticates admin users and returns the admin session token required for admin-level operations (like key generation and triggering backups).

* **Endpoint:** `/api/login`
* **Method:** `POST`
* **Content-Type:** `application/json`
* **Request Payload (JSON):**
  ```json
  {
    "username": "admin",
    "password": "your_password_here"
  }
  ```

#### Response (`200 OK`)
```json
{
  "success": true,
  "token": "admin_session_token_here"
}
```

---

### Terminate / Reset Session

Destroys the active WhatsApp Web Puppeteer browser instance, force-clears all local authentication and browser cache directories (`.wwebjs_auth` and `.wwebjs_cache`), and automatically boots a new client instance to generate a fresh QR code. This is useful for recovering from "couldn't link device" errors or logging out a WhatsApp account.

* **Endpoint:** `/api/logout`
* **Method:** `POST`
* **Headers:**
  ```http
  Authorization: Bearer admin_session_token_or_client_key_here
  ```

#### Response (`200 OK`)
```json
{
  "success": true
}
```

---

### Interactive Swagger API Docs

The gateway server exposes an interactive Swagger API playground for testing all REST endpoints directly from the browser.

* **URL:** `/api-docs`
* **Authentication:** Authorize via the Swagger UI using the session token returned from the `/api/login` endpoint.

---

## 3. Responses

### Success Response (`200 OK`)
```json
{
  "success": true,
  "message": "Message sent successfully."
}
```

### Invalid Request (`400 Bad Request`)
Returned if fields are missing or empty.
```json
{
  "error": "Phone number and message are required"
}
```

### Unauthorized (`403 Forbidden`)
Returned if the token is missing, expired, or revoked.
```json
{
  "error": "Unauthorized access. Please log in."
}
```

### Server / Client Error (`500 Internal Server Error`)
Returned if the gateway is offline, needs authentication, or if Puppeteer encounters a browser issue.
```json
{
  "error": "WhatsApp client is not ready. Please scan the QR code first."
}
```

---

## 4. Code Integration Examples

Here are examples of how to implement the API integration in different programming languages:

### Javascript / Node.js (Fetch API)
```javascript
const gatewayUrl = 'http://localhost:3000/api/send';
const apiKey = 'wapp_key_your_copied_api_key_here';

async function sendWhatsAppOTP(phoneNumber, code) {
    try {
        const response = await fetch(gatewayUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                number: phoneNumber,
                message: `Your OTP is: ${code}. Do not share this code.`
            })
        });
        
        const data = await response.json();
        if (response.ok && data.success) {
            console.log('OTP sent successfully!');
        } else {
            console.error('Failed to send OTP:', data.error);
        }
    } catch (error) {
        console.error('Error connecting to gateway:', error);
    }
}
```

### PHP (cURL)
```php
<?php
function sendWhatsAppMessage($number, $message) {
    $url = 'http://localhost:3000/api/send';
    $apiKey = 'wapp_key_your_copied_api_key_here';

    $payload = json_encode([
        'number' => $number,
        'message' => $message
    ]);

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $apiKey
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode === 200) {
        return json_decode($response, true);
    } else {
        throw new Exception("Gateway error: " . $response);
    }
}
?>
```

### Python (Requests)
```python
import requests

def send_whatsapp_message(number, message):
    url = "http://localhost:3000/api/send"
    api_key = "wapp_key_your_copied_api_key_here"
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    }
    
    payload = {
        "number": number,
        "message": message
    }
    
    try:
        response = requests.post(url, json=payload, headers=headers)
        if response.status_code == 200:
            print("Message sent successfully:", response.json())
        else:
            print(f"Error {response.status_code}:", response.json().get('error'))
    except Exception as e:
        print("Failed to contact gateway:", e)
```

### cURL
```bash
curl -X POST http://localhost:3000/api/send \
  -H "Authorization: Bearer wapp_key_your_copied_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "number": "94777876795",
    "message": "Test message content."
  }'
```
