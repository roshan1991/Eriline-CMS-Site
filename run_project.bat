@echo off
title Eriline Full-Stack Launcher
color 0A
echo ==========================================
echo       ERI-LINE PROJECT LAUNCHER
echo ==========================================
echo.

echo Checking ports 4200 and 5000...
powershell -ExecutionPolicy Bypass -File "%~dp0kill_ports.ps1"
echo.

REM Check frontend node_modules
if not exist "node_modules" (
    echo [0/2] Installing frontend dependencies for Angular...
    call npm install
)

REM Check backend node_modules
if not exist "backend\node_modules" (
    echo [0/2] Installing backend dependencies for Node.js...
    cd backend
    call npm install
    cd ..
)

echo [1/2] Starting Backend Server for MySQL and Node...
start "Eriline Backend" cmd /k "cd backend && node index.js"

echo [2/2] Starting Frontend Dev Server for Angular...
echo Note: This window will stay open to show frontend logs.
npm start

pause
