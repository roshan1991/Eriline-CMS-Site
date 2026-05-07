@echo off
setlocal enabledelayedexpansion

set RELEASE_DIR=release_spaceship
set ZIP_NAME=eriline_release.zip

echo ======================================================
echo  SPACESHIP RELEASE GENERATOR - Eriline CMS
echo ======================================================
echo.

REM Clean up
echo [1/5] Cleaning previous release files...
if exist "%RELEASE_DIR%" rd /s /q "%RELEASE_DIR%"
if exist "%ZIP_NAME%" del /q "%ZIP_NAME%"
echo.

REM Build frontend
echo [2/5] Building Angular Frontend (eriline-frontend)...
call npm install
call npm run build
if errorlevel 1 (
    echo.
    echo ERROR: Frontend build failed!
    pause
    exit /b 1
)
echo.

REM Create release structure
echo [3/5] Creating release structure...
mkdir "%RELEASE_DIR%" 2>nul
mkdir "%RELEASE_DIR%\public" 2>nul
mkdir "%RELEASE_DIR%\server" 2>nul
echo.

REM Copy frontend build
echo [4/5] Copying Frontend files...
set "FRONTEND_DIST=dist\eriline-frontend\browser"
if exist "%FRONTEND_DIST%" (
    echo Found build at %FRONTEND_DIST%, copying...
    xcopy "%FRONTEND_DIST%\*" "%RELEASE_DIR%\public" /E /H /C /I /Y >nul
) else if exist "dist\eriline-frontend" (
    echo Found fallback build at dist\eriline-frontend, copying...
    xcopy "dist\eriline-frontend\*" "%RELEASE_DIR%\public" /E /H /C /I /Y >nul
) else (
    echo WARNING: Frontend build not found!
)
echo.

REM Copy backend files
echo [5/5] Copying Backend files...
xcopy "backend\*" "%RELEASE_DIR%\server" /E /H /C /I /Y >nul
if exist "%RELEASE_DIR%\server\node_modules" rd /s /q "%RELEASE_DIR%\server\node_modules"
if exist "%RELEASE_DIR%\server\package-lock.json" del /q "%RELEASE_DIR%\server\package-lock.json"
echo.

REM Zip the release
echo [Bonus] Zipping the release for Spaceship deployment...
powershell -command "Compress-Archive -Path %RELEASE_DIR%\* -DestinationPath %ZIP_NAME% -Force"
if errorlevel 1 (
    echo.
    echo ERROR: Zipping failed!
) else (
    echo.
    echo Created %ZIP_NAME% successfully!
)
echo.

echo ======================================================
echo  SPACESHIP RELEASE GENERATED SUCCESSFULLY!
echo ======================================================
echo  Folder: %cd%\%RELEASE_DIR%
echo  Archive: %cd%\%ZIP_NAME%
echo.
echo  Deployment Instructions:
echo  1. Upload %ZIP_NAME% to your 'www' or target folder on Spaceship.
echo  2. Extract the zip file in the file manager.
echo  3. Navigate to the 'server' folder
echo  4. Run: npm install --production
echo  5. Run: node index.js
echo.
echo  NOTE: Ensure your .env file is correctly configured on the server.
echo ======================================================
pause

