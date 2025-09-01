# bnb

A full-stack web application for managing a bed-and-breakfast business. This project includes a .NET 9 Web API backend and a React + TypeScript frontend.

## Project Structure

- **Bnb.Api/**: ASP.NET Core Web API backend
- **Bnb.Core/**: Entity Framework DbContext configuration and data migrations
- **Bnb.Entities/**: Entity models and related enums
- **Bnb.App/**: React + TypeScript frontend

## Prerequisites

- [.NET 9 SDK](https://dotnet.microsoft.com/download)
- [Node.js (v18+)](https://nodejs.org/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) (or update connection string for your DB)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/j4mesanthony/bnb.git
   cd bnb
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

### Running the Application

To start the development server with hot module reloading:

```sh
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

### Running Migrations & Starting the API

1. **Navigate to the API project directory:**

   ```sh
   cd Bnb.Core
   ```

2. **Apply database migrations:**

   ```sh
   dotnet ef database update -s ../Bnb.Api
   ```

   > Ensure your connection string is set correctly in `appsettings.Development.json`.

3. **Start the API server:**

   ```sh
   cd Bnb.Api
   dotnet run
   ```

The API will be available at [https://localhost:7021](https://localhost:7021) or the port specified in your launch settings.

### Building for Production

To build the app for production:

```sh
npm run build
```

To preview the production build locally:

```sh
npm run preview
```
