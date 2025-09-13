# Task Backend API

A robust Node.js TypeScript backend application built with Express.js, MongoDB, and Mongoose.

## 🚀 Features

- **TypeScript** - Type-safe development
- **Express.js** - Fast and minimalist web framework
- **MongoDB & Mongoose** - NoSQL database with elegant object modeling
- **CORS & Helmet** - Security middlewares
- **Morgan** - HTTP request logging
- **Environment Variables** - Configuration management
- **Error Handling** - Centralized error handling
- **RESTful API** - Following REST principles

## 📁 Project Structure

```
src/
├── config/         # Configuration files (database, etc.)
├── controllers/    # Request handlers
├── middleware/     # Custom middleware functions
├── models/         # Mongoose models and schemas
├── routes/         # API route definitions
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
├── app.ts          # Express app configuration
└── server.ts       # Application entry point
```

## 🛠 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` file with your configuration:
   - `PORT` - Server port (default: 3000)
   - `MONGODB_URI` - MongoDB connection string
   - `NODE_ENV` - Environment (development/production)
   - `APP_HOST` - Application host (default: http://localhost:3000)

4. **Start MongoDB**
   Make sure MongoDB is running on your system:
   ```bash
   # Using Docker
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   
   # Or start your local MongoDB service
   sudo systemctl start mongod
   ```

## 🚀 Running the Application

### Development Mode
```bash
yarn dev
# or
npm run dev
```

### Production Mode
```bash
yarn build
yarn start
# or
npm run build
npm start
```

## 📚 Available Scripts

- `yarn dev` - Start development server with hot reload
- `yarn build` - Build the TypeScript code
- `yarn start` - Start production server
- `yarn typecheck` - Run TypeScript type checking
- `yarn clean` - Clean build files and dependencies

## 🔌 API Endpoints

### Health Check
- `GET /health` - Server health status

### Apartmentss API
- `GET /api/v1/apartments` - Get all apartments (with pagination)
- `GET /api/v1/apartments/:id` - Get apartment by ID
- `POST /api/v1/apartments` - Create new apartment

### Query Parameters (GET /api/v1/apartments)
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `status` - Filter by status (pending, in_progress, completed, cancelled)
- `priority` - Filter by priority (low, medium, high, urgent)
- `userId` - Filter by user ID
- `sortBy` - Sort field (default: createdAt)
- `sort` - Sort order (asc, desc, default: desc)

## 📊 Example API Usage

### Create a Apartments
```bash
curl -X POST http://localhost:3000/api/v1/apartments \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Apartment 1",
    "description": "Description of Apartment 1",
    "size": 100,
    "price": 1000,
    "location": "Location of Apartment 1",
    "thumbnailURL": "https://example.com/thumbnail.jpg",
    "imagesURLs": ["https://example.com/image1.jpg", "https://example.com/image2.jpg"]
  }'
```

### Get All Apartments
```bash
curl "http://localhost:3000/api/v1/apartments?page=1&limit=10&status=pending"
```

## 🗄 Database Schema

### Apartments Model
```typescript
{
  title: string,        // required,
  description: string,  // required, brief description of the unit
  price: number,        // required, price of the unit
  size: number,         // required, size of the unit
  thumbnailURL: string, // required, thumbnail of the unit
  imagesURLs: string,   // reuqired, array of image URLs
  createdAt: Date,      // auto-generated
  updatedAt: Date       // auto-generated
}
```

## 🔧 Configuration

### Environment Variables
See `.env.example` for all available configuration options.

### TypeScript Configuration
The project uses strict TypeScript settings with path mapping for clean imports:
- `@/*` - src directory
- `@/controllers/*` - controllers directory
- `@/models/*` - models directory
- etc.

## 🛡 Security Features

- **Helmet** - Sets various HTTP headers
- **CORS** - Configurable cross-origin resource sharing
- **Input Validation** - Mongoose schema validation, and Joi schema validation library
- **Error Handling** - No sensitive data in error responses

## 📝 Development Guidelines

1. **Code Style**: Follow TypeScript best practices
2. **Error Handling**: Use custom error classes
3. **Validation**: Implement proper input validation
4. **Documentation**: Comment complex logic
5. **Types**: Define proper TypeScript interfaces

## 🐛 Debugging

Enable debug mode by setting:
```bash
NODE_ENV=development
```

This will:
- Show detailed error messages
- Include stack traces in API responses
- Use detailed logging format
