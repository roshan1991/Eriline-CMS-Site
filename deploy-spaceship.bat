@echo off
REM Deploy script for Studio M3 to Spaceship Server

setlocal enabledelayedexpansion

echo ========================================
echo Spaceship Server Deployment Script
echo ========================================
echo.

REM Clean up
echo [1/5] Cleaning previous deployment...
if exist "spaceship_deploy" (
    rmdir /s /q spaceship_deploy
)
if exist "spaceship_deploy.zip" (
    del /q "spaceship_deploy.zip"
)
echo.

REM Build frontend
echo [2/5] Building frontend (studio-m3)...
cd studio-m3
call npm install
call npm run build
if errorlevel 1 (
    echo ERROR: Frontend build failed!
    cd ..
    pause
    exit /b 1
)
cd ..
echo.

REM Create deploy structure for Spaceship
echo [3/5] Creating deploy structure...
mkdir spaceship_deploy\uploads 2>nul

REM Copy backend files
echo Copying backend files...
copy /Y "cms\package.json" "spaceship_deploy\" >nul
copy /Y "cms\server.js" "spaceship_deploy\" >nul
copy /Y "cms\server-ssl.js" "spaceship_deploy\" >nul
copy /Y "cms\reset-db.js" "spaceship_deploy\" >nul

REM Create config template
@REM echo Creating environment config template...
@REM (
@REM     echo # --- DATABASE ---
@REM     echo DB_HOST=localhost
@REM     echo DB_USER=root
@REM     echo DB_PASSWORD=your_password
@REM     echo DB_NAME=studiom3
@REM     echo PORT=3000
@REM     echo.
@REM     echo # --- EMAIL (GMAIL) ---
@REM     echo EMAIL_USER=your_email@gmail.com
@REM     echo EMAIL_PASS=your_app_password
@REM     echo.
@REM     echo # --- AUTHENTICATION (JWT) ---
@REM     echo JWT_SECRET=studiom3_prod_secret_!random!
@REM     echo JWT_EXPIRY=24h
@REM     echo.
@REM     echo # --- WHATSAPP BUSINESS API (FALLBACK) ---

@REM     echo WHATSAPP_ACCESS_TOKEN=
@REM     echo WHATSAPP_PHONE_NUMBER_ID=
@REM     echo WHATSAPP_VERIFY_TOKEN=studiom3_webhook_verify
@REM     echo.
@REM     echo # --- INSTAGRAM ---
@REM     echo INSTAGRAM_ACCESS_TOKEN=
@REM ) > spaceship_deploy\.env

REM Copy uploads if exists
if exist "cms\uploads" (
    echo Copying uploads...
    xcopy /E /I /Y "cms\uploads" "spaceship_deploy\uploads\" >nul
)

REM Copy frontend build
echo Copying frontend build...
REM Angular 17+ build path is usually dist/studio-m3/browser
set "FRONTEND_DIST=studio-m3\dist"
if exist "%FRONTEND_DIST%" (
    echo Found build at %FRONTEND_DIST%, copying...
    mkdir "spaceship_deploy\dist\studio-m3\browser" 2>nul
    xcopy /E /I /Y "%FRONTEND_DIST%" "spaceship_deploy\dist" >nul
) else if exist "studio-m3\dist" (
    echo Found fallback build at studio-m3\dist, copying...
    xcopy /E /I /Y "studio-m3\dist" "spaceship_deploy\dist\" >nul
) else (
    echo WARNING: Frontend build not found!
)

echo.

REM Zip the deployment
echo [4/5] Zipping deploy files...
powershell -command "Compress-Archive -Path spaceship_deploy\* -DestinationPath spaceship_deploy.zip -Force"
if errorlevel 1 (
    echo ERROR: Zipping failed!
    pause
    exit /b 1
)
echo Created spaceship_deploy.zip
echo.

echo.
echo ========================================
echo Deployment Preparation Complete!
echo ========================================
echo.
echo 1. Your application has been packaged into 'spaceship_deploy.zip'
echo 2. Upload and extract it to your 'www' or target folder on Spaceship.
echo 3. Recommended scripts:
echo    - Run 'npm run reset-db' IF you need to initialize a fresh database.
echo    - Use 'npm start' for standard HTTP (Port 3000)
echo    - Use 'npm run start-ssl' if you have certificated configured in server-ssl.js
echo.
echo 4. IMPORTANT: Configure your .env file with production credentials.
echo.
pause

