# GetApiMessage Component

This component provides a button that, when clicked, makes a request to the backend API and displays the response message.

## Component Features

- Displays a button labeled "Get API Message"
- When clicked, makes a request to the API endpoint `/api/status`
- Shows a loading state while waiting for the API response
- Displays the API message when successful
- Shows an error message if the API request fails

## Testing Approach

The component is tested at multiple levels:

### Unit Tests

Located in `__Tests__/Unit/` directory, these tests verify the component's basic rendering and functionality with mocked API calls.

### Integration Tests (Dev Environment)

Located in `__Tests__/Dev/Dev.spec.ts`, these Playwright tests verify the component's functionality by:

1. Clicking the API message button in the browser
2. Waiting for the API response
3. Verifying that the message is displayed correctly
4. Testing error handling when the API fails

### Production Tests

Located in `__Tests__/Prod/` directory, these tests ensure the component works properly in a production environment.

## Running the Tests

### Playwright Tests

You have two options for running the end-to-end tests:

#### Option 1: Helper Script (Recommended)

Use the provided helper script that handles everything for you:

```powershell
.\start-backend-and-test.ps1
```

This script will:
1. Stop any existing backend processes
2. Start the backend server in a minimized window
3. Run the Playwright tests
4. Ask if you want to keep the backend running after the tests

#### Option 2: Manual Steps

For more control, follow these steps manually:

1. First, start the backend API server:
```powershell
cd ../Backend; dotnet run
```

2. Then, in a new terminal window, run the Playwright tests:
```powershell
npx playwright test
```

The Playwright configuration will:
- Start the frontend dev server automatically
- Run the tests against the already running backend server

### Unit Tests

To run the unit tests only:

```powershell
npm test -- "GetApiMessage"
```

To run specific test files:

```powershell
npm test -- "GetApiMessage/Unit"
``` 