# Network Test with .NET and C#

The goal of this project is to establish a network test with 4 buttons that:

1. Confirm 'Api is working!' message.
2. Confirm Azure Health Check is working with 'Connected to Azure and Database' message.
3. Confirm User Lifeycle is functioning with the following messages:
 - 'Signed up as RandomUser_23023'
 - 'Logged in as RandomUser_23023'
 - 'Logged out as RandomUser_23023'
 - 'Logged in as RandomUser_23023'
 - 'Deleted user RandomUser_23023'

## Project Structure

This project is organized into two main directories:

- **Backend**: Contains the ASP.NET Core API
- **Frontend**: Contains the React/Vite frontend application

## Tech Stack - Backend
- .NET 9.0 (9.0.0-preview.1.24081.5)
   - Microsoft.AspNetCore.SpaProxy Version="9.0.0-preview.1.24081.5"
   - Microsoft.AspNetCore.SpaServices.Extensions Version="9.0.0-preview.1.24081.5"
- C#
- ASP.NET Core
- Azure
- ASP.NET Core Identity
- Entity Framework Core
- SQL Server/Azure SQL Database
- Azure Key Vault (for secrets management)
- Azure App Service (for hosting)

## Tech Stack - Frontend
- Vite
- React
- TypeScript

## Testing
- Playwright for API and end-to-end testing

## Running the Application

### Backend
```
cd Backend
dotnet run
```

### Frontend
```
cd Frontend
npm run dev
```

### Running Tests
```
cd Backend
npx playwright test
```

## Frontend website
https://budget-tool-frontend-dububsc9aeezgjf0.uksouth-01.azurewebsites.net/