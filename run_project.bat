@echo off
title Eriline Full-Stack Launcher
color 0A
echo ==========================================
echo       ERI-LINE PROJECT LAUNCHER
echo ==========================================
echo.

echo [1/2] Starting Backend Server (MySQL & Node)...
start "Eriline Backend" cmd /k "cd backend && node index.js"

echo [2/2] Starting Frontend Dev Server (Angular)...
echo Note: This window will stay open to show frontend logs.
npm start

pause
