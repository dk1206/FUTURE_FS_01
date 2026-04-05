@echo off
cd /d "c:\Users\Karthik\OneDrive\Desktop\portfolio"

REM Initialize git repository
echo [1/5] Initializing git repository...
"C:\Program Files\Git\bin\git.exe" init

REM Configure git
echo [2/5] Configuring git...
"C:\Program Files\Git\bin\git.exe" config user.name "dk1206"
"C:\Program Files\Git\bin\git.exe" config user.email "default@example.com"

REM Add remote first
echo [3/5] Adding remote repository...
"C:\Program Files\Git\bin\git.exe" remote add origin https://github.com/dk1206/FUTURE_FS_01.git

REM Add files (respecting .gitignore)
echo [4/5] Adding files...
"C:\Program Files\Git\bin\git.exe" add .

REM Create initial commit
echo [5/5] Creating initial commit...
"C:\Program Files\Git\bin\git.exe" commit -m "Initial commit: Portfolio project"

REM Rename main branch
"C:\Program Files\Git\bin\git.exe" branch -M main

echo.
echo ========================================
echo Git repository initialized successfully!
echo ========================================
echo.
echo NEXT STEPS:
echo 1. Push to GitHub by running:
echo    cd c:\Users\Karthik\OneDrive\Desktop\portfolio
echo    "C:\Program Files\Git\bin\git.exe" push -u origin main
echo.
echo 2. You may be prompted to authenticate with GitHub
echo    Use your GitHub personal access token or SSH key
echo ========================================
pause
