@echo off
REM Deploy script for Eriline Site to Spaceship Server

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
echo [2/5] Building frontend (Eriline)...
call npm install
call npm run build -- --configuration production
if errorlevel 1 (
    echo ERROR: Frontend build failed!
    pause
    exit /b 1
)
echo.

REM Create deploy structure for Spaceship
echo [3/5] Creating deploy structure...
mkdir spaceship_deploy\server 2>nul
mkdir spaceship_deploy\server\uploads 2>nul
mkdir spaceship_deploy\public 2>nul

REM Copy backend files
echo Copying backend files...
xcopy "backend\*" "spaceship_deploy\server" /E /H /C /I /Y >nul
if exist "spaceship_deploy\server\node_modules" rd /s /q "spaceship_deploy\server\node_modules"
if exist "spaceship_deploy\server\package-lock.json" del /q "spaceship_deploy\server\package-lock.json"

REM Copy frontend build
echo Copying frontend build...
set "FRONTEND_DIST=dist\eriline-frontend\browser"
if exist "%FRONTEND_DIST%" (
    echo Found build at %FRONTEND_DIST%, copying...
    xcopy /E /H /C /I /Y "%FRONTEND_DIST%\*" "spaceship_deploy\public\" >nul
) else if exist "dist\eriline-frontend" (
    echo Found fallback build at dist\eriline-frontend, copying...
    xcopy /E /H /C /I /Y "dist\eriline-frontend\*" "spaceship_deploy\public\" >nul
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
echo 3. Navigate to the 'server' folder and run 'npm install'.
echo 4. Run the server using 'node index.js' or PM2.
echo 5. IMPORTANT: Configure your .env file with production credentials.
echo.
pause

