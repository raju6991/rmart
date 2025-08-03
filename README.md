# Rmart - E-commerce Application

A modern e-commerce application built with ASP.NET Core backend and React TypeScript frontend.

## Project Structure

```
rmart/
├── backend/RmartApi/     # ASP.NET Core Web API
├── client/               # React TypeScript with Vite
├── README.md
└── .gitignore
```

## Technology Stack

### Backend
- **ASP.NET Core 9.0** - Web API framework
- **C#** - Programming language
- **Entity Framework Core** - ORM (to be added)
- **SQL Server/PostgreSQL** - Database (to be configured)

### Frontend
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **pnpm** - Package manager

## Getting Started

### Prerequisites
- .NET 9.0 SDK
- Node.js (v18 or higher)
- pnpm package manager

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend/RmartApi
   ```

2. Restore dependencies:
   ```bash
   dotnet restore
   ```

3. Run the API:
   ```bash
   dotnet run
   ```

The API will be available at `https://localhost:5001` or `http://localhost:5000`.

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm run dev
   ```

The React app will be available at `http://localhost:5173`.

## Development

### Backend Development
- The API follows RESTful conventions
- Controllers are located in `backend/RmartApi/Controllers/`
- Models are in `backend/RmartApi/Models/`
- Configuration is in `backend/RmartApi/appsettings.json`

### Frontend Development
- Components are in `client/src/components/`
- Pages are in `client/src/pages/`
- Utilities and services are in `client/src/utils/` and `client/src/services/`
- Styling uses CSS modules or styled-components (to be configured)

## Features (Planned)

- [ ] User authentication and authorization
- [ ] Product catalog and search
- [ ] Shopping cart functionality
- [ ] Order management
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Responsive design

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
