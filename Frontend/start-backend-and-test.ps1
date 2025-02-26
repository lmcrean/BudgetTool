# Stop any existing Backend process
Write-Host "Stopping any existing Backend processes..."
Get-Process -Name Backend -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Seconds 2

# Start the backend server in a new window
Write-Host "Starting Backend server..."
$backendProcess = Start-Process powershell -ArgumentList "-Command cd ..\Backend; dotnet run" -PassThru -WindowStyle Minimized

# Wait for the backend to start
Write-Host "Waiting for the backend to start..."
Start-Sleep -Seconds 10

# Run the Playwright tests
Write-Host "Running Playwright tests..."
npx playwright test

# Store the test result
$testResult = $LASTEXITCODE

# Ask the user if they want to keep the backend running
$keepRunning = Read-Host "Tests completed. Do you want to keep the backend running? (y/n)"
if ($keepRunning -ne "y") {
    Write-Host "Stopping backend server..."
    Stop-Process -Id $backendProcess.Id -Force -ErrorAction SilentlyContinue
    Write-Host "Backend server stopped."
}

Write-Host "Test run complete with exit code: $testResult"
exit $testResult 