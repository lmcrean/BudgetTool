# Start the backend server in a new window
Start-Process powershell -ArgumentList "-Command cd ..\Backend; dotnet run"

Write-Host "Starting backend server..."
# Wait for the backend to start
Start-Sleep -Seconds 5

# Run the tests
Write-Host "Running Playwright tests..."
npx playwright test

Write-Host "Test run complete" 