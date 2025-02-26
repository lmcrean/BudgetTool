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

To run the Playwright e2e tests, first start the backend server:

```powershell
cd ../Backend; Start-Process dotnet -ArgumentList "run" -WindowStyle Minimized; cd ../Frontend
```

Then run the Playwright tests:

```powershell
npx playwright test
```

This will:
1. Use the running backend server
2. Start the frontend dev server automatically
3. Execute the Playwright tests against both servers

### Unit Tests

To run the unit tests only:

```powershell
npm test -- "GetApiMessage"
```

To run specific test files:

```powershell
npm test -- "GetApiMessage/Unit"
``` 