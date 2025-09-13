# 🏠 Real Estate Platform - Full Stack Application

A comprehensive real estate platform built with modern web technologies, featuring property listings, advanced search capabilities, and detailed property information. This full-stack application consists of a TypeScript Node.js backend API and a Next.js frontend application.

## 🚀 Project Overview

This project demonstrates a complete real estate web application with:
- **Backend API**: RESTful API built with Node.js, TypeScript, Express.js, and MongoDB
- **Frontend App**: Modern React application built with Next.js 15, TypeScript, and Tailwind CSS
- **Database**: MongoDB with Mongoose ODM
- **Documentation**: Swagger/OpenAPI documentation
- **Real-time Features**: Property search, filtering, and detailed views

## 📁 Repository Structure

```
task/
├── backend/                    # Node.js TypeScript Backend API
│   ├── src/                   # Source code
│   │   ├── app.ts            # Express app configuration
│   │   ├── server.ts         # Application entry point
│   │   ├── config/           # Configuration files
│   │   │   ├── database.ts   # MongoDB connection setup
│   │   │   └── swagger.ts    # API documentation config
│   │   ├── controllers/      # Request handlers
│   │   │   └── ApartmentController.ts
│   │   ├── models/           # Database models
│   │   │   └── Apartment.ts  # Apartment/Property schema
│   │   ├── routes/           # API route definitions
│   │   │   ├── apartments.ts # Property endpoints
│   │   │   └── index.ts      # Route aggregator
│   │   ├── middleware/       # Custom middleware
│   │   │   └── errorHandler.ts
│   │   ├── types/            # TypeScript definitions
│   │   │   └── common.ts
│   │   └── utils/            # Utility functions
│   │       └── validations/
│   ├── dist/                 # Compiled JavaScript
│   ├── logs/                 # Application logs
│   ├── package.json         # Dependencies and scripts
│   ├── tsconfig.json        # TypeScript configuration
│   ├── docker-compose.yml   # MongoDB Docker setup
│   └── README.md            # Backend documentation
│
├── frontend-app/            # Next.js React Frontend
│   ├── app/                 # Next.js App Router
│   │   ├── page.tsx        # Main property listings page
│   │   ├── layout.tsx      # Root layout component
│   │   ├── globals.css     # Global styles
│   │   └── property/       # Dynamic property pages
│   │       └── [id]/       # Individual property details
│   │           └── page.tsx
│   ├── components/          # React components
│   │   ├── PropertyCard.tsx      # Property listing card
│   │   └── PropertyFilters.tsx   # Search and filter UI
│   ├── lib/                # Utility functions
│   │   └── api.ts         # API service layer
│   ├── types/              # TypeScript definitions
│   │   └── property.ts    # Property-related types
│   ├── public/             # Static assets
│   │   └── placeholder-house.svg
│   ├── package.json       # Dependencies and scripts
│   ├── tsconfig.json      # TypeScript configuration
│   ├── next.config.ts     # Next.js configuration
│   ├── postcss.config.mjs # PostCSS configuration
│   └── README.md          # Frontend documentation
│
└── README.md               # This file - Project overview
```

## 🛠 Tech Stack

### Backend
- **Runtime**: Node.js 18+
- **Language**: TypeScript
- **Framework**: Express.js 5.x
- **Database**: MongoDB with Mongoose ODM
- **Documentation**: Swagger/OpenAPI 3.0
- **Security**: Helmet, CORS, Morgan logging
- **Development**: Nodemon, ts-node

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Image Optimization**: Next.js Image component
- **State Management**: React Hooks (useState, useEffect)

### Development Tools
- **Package Manager**: npm/yarn
- **Code Quality**: TypeScript strict mode
- **Build Tools**: Next.js build system, TypeScript compiler
- **Environment**: Docker support for MongoDB

## 🚀 Quick Start

### Prerequisites
Before running this application, ensure you have:
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or Docker)
- **Git**

### 1. Clone the Repository
```bash
git clone <repository-url>
cd task
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install
# or
yarn install

# Start MongoDB (using Docker)
docker-compose up -d

# Start development server
npm run dev
# or
yarn dev

# Backend will run on http://localhost:3000
```

**Backend Environment Variables** (create `.env` file):
```env
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/realestate
CORS_ORIGIN=http://localhost:3001
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory (in new terminal)
cd frontend-app

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev

# Frontend will run on http://localhost:3001
```

| important note, you will need to add some data through the API using Swagger docs in http://localhost:3000/api-docs

### 4. Running the application through Docker

```bash

docker compose up -d

# Frontend will run on http://localhost:3001
```

### 5. Access the Application
- **Frontend**: http://localhost:3001
- **Backend API**: http://localhost:3000
- **API Documentation**: http://localhost:3000/api-docs (when implemented)

## 🔧 Development

### Backend Development
```bash
cd backend

# Development with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run typecheck
```

### Frontend Development
```bash
cd frontend-app

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npx tsc --noEmit
```

## 📊 API Endpoints

### Properties/Apartments API
- `GET /api/v1/apartments` - Get all properties with filtering
- `GET /api/v1/apartments/:id` - Get single property details
- `POST /api/v1/apartments` - Create new property (admin)

### Query Parameters
- `page` - Page number for pagination
- `limit` - Items per page
- `search` - Text search across title and description
- `propertyType` - Filter by property type
- `bedrooms`, `bathrooms` - Filter by room counts
- `city` - Filter by city/location

## 🎨 Features

### Frontend Features
- 📱 **Responsive Design** - Works on all device sizes
- 🔍 **Advanced Search** - Multi-criteria property filtering
- 🏠 **Property Listings** - Grid view with pagination
- 📄 **Property Details** - Comprehensive property information
- 🖼️ **Image Gallery** - Multiple property photos with navigation
- ⚡ **Fast Loading** - Optimized performance with Next.js
- 🎯 **Type Safety** - Full TypeScript implementation

### Backend Features
- 🚀 **RESTful API** - Clean and consistent API design
- 🔒 **Security** - Helmet, CORS, and input validation
- 📝 **Logging** - Morgan HTTP request logging
- 🗄️ **Database** - MongoDB with Mongoose ODM
- 📚 **Documentation** - Swagger/OpenAPI integration
- 🔧 **Error Handling** - Centralized error management
- ⚡ **Performance** - Efficient database queries and indexing

## 📚 Documentation

### API Documentation
Once the backend is running, API documentation is available at:
- **Swagger UI**: http://localhost:3000/api-docs (when implemented)
- **OpenAPI Spec**: http://localhost:3000/api-docs.json (when implemented)

### Individual Documentation
- [Backend Documentation](./backend/README.md)
- [Frontend Documentation](./frontend-app/README.md)

## 🔧 Configuration

### Backend Configuration
The backend uses environment variables for configuration. See `backend/.env.example` for all available options.

### Frontend Configuration
The frontend is configured through `next.config.ts` and connects to the backend API at `http://localhost:3000`.

## 🚀 Deployment

### Backend Deployment
1. Build the application: `npm run build`
2. Set production environment variables
3. Ensure MongoDB is accessible
4. Start with: `npm start`

### Frontend Deployment
1. Build the application: `npm run build`
2. Configure backend API URL if different
3. Deploy static files or run: `npm start`

### Docker Support
The backend includes a `docker-compose.yml` file for MongoDB setup:
```bash
cd backend
docker-compose up -d
```

## 🧪 Testing

Currently, testing infrastructure is set up but tests need to be implemented:
- **Backend**: Jest + Supertest (to be implemented)
- **Frontend**: Jest + React Testing Library (to be implemented)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use consistent code formatting
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 🎯 Project Status

This project is a **demonstration/portfolio project** showcasing modern full-stack web development practices. It includes:

- ✅ Complete backend API with TypeScript
- ✅ Modern React frontend with Next.js 15
- ✅ MongoDB database integration
- ✅ Responsive design with Tailwind CSS
- ✅ Type-safe development environment
- ✅ Production-ready code structure
