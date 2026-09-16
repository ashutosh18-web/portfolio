@echo off
title Ashutosh Chaudhari - 3D Portfolio
echo ===================================================
echo   Ashutosh Chaudhari - 3D Cyberpunk Portfolio
echo ===================================================
echo Starting local web server on port 5173...
start "" "http://localhost:5173"
python -m http.server 5173
pause
