# RealEstate Pro - Frontend Application

A modern real estate web application built with Next.js, TypeScript, and Tailwind CSS. This application allows users to browse properties, search and filter listings, and view detailed property information.

## 🚀 Features

- **Property Listings**: Browse all available properties with pagination
- **Basic Search**: Filter by price, bedrooms, bathrooms, property type, location, and more
- **Property Details**: View detailed information about individual properties including image galleries
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Data**: Fetches property data from the backend API at `http://localhost:3000`

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **UI Components**: Custom components with Tailwind CSS

## 📋 Prerequisites

Before running this application, make sure you have:

1. **Node.js** (v18 or higher)
2. **npm** or **yarn**
3. **Backend API** running on `http://localhost:3000` (see backend setup instructions)

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser**
   
   Navigate to [http://localhost:3001](http://localhost:3001) to view the application.

## 📁 Project Structure

```
frontend-app/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main property listings page
│   ├── layout.tsx         # Root layout component
│   ├── globals.css        # Global styles
│   └── property/
│       └── [id]/
│           └── page.tsx   # Property details page
├── components/            # Reusable UI components
│   ├── PropertyCard.tsx   # Property listing card
│   └── PropertyFilters.tsx # Search and filter component
├── lib/                   # Utility functions
│   └── api.ts            # API service functions
├── types/                 # TypeScript type definitions
│   └── property.ts       # Property-related types
└── public/               # Static assets
    └── placeholder-house.svg # Placeholder image
```

## 🔌 API Integration

The application connects to a backend API running on `http://localhost:3000`. The API endpoints used are:

- `GET /api/v1/properties` - Get all properties with optional filters
- `GET /api/v1/properties/:id` - Get single property details

## 🎨 Features Overview

### Main Listings Page (`/`)
- Display all properties in a responsive grid
- Search bar for text-based searches
- Pagination for large datasets
- Loading states and error handling

### Property Details Page (`/property/[id]`)
- Full property information display
- Image gallery with navigation
- Property specifications (bedrooms, bathrooms, area, etc.)
- Property description and features
- Agent contact information
- Interactive elements (contact buttons, image navigation)

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface
- Fast loading and smooth animations

## 🎯 Usage

1. **Browse Properties**: The main page displays all available properties
2. **Search**: Use the search bar to find properties by title, description, or location
3. **View Details**: Click on any property card to view full details
4. **Navigation**: Use the back button or breadcrumbs to return to the main listing

## 🚨 Error Handling

The application includes comprehensive error handling:
- Network connectivity issues
- API server unavailability
- Invalid property IDs
- Loading states for better UX

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linter

### Environment Variables

No environment variables are required for the frontend. The API base URL is hardcoded to `http://localhost:3000` for simplicity.
