import axios from 'axios';
import { Property, PropertyFilters, ApiResponse, PaginatedResponse } from '../types/property';

const API_BASE_URL = 'http://localhost:3000/api/v1';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const propertyAPI = {
  // Get all apartments with optional filters and pagination
  getProperties: async (
    filters: PropertyFilters = {},
    page: number = 1,
    limit: number = 12
  ): Promise<PaginatedResponse<Property>> => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...Object.entries(filters).reduce((acc, [key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          acc[key] = value.toString();
        }
        return acc;
      }, {} as Record<string, string>)
    });

    const response = await api.get(`/apartments?${params}`);
    return response.data;
  },

  // Get single property by ID
  getProperty: async (id: string): Promise<ApiResponse<Property>> => {
    const response = await api.get(`/apartments/${id}`);
    return response.data;
  },

  // Search apartments by query
  searchProperties: async (
    query: string,
    page: number = 1,
    limit: number = 12
  ): Promise<PaginatedResponse<Property>> => {
    const params = new URLSearchParams({
      search: query,
      page: page.toString(),
      limit: limit.toString(),
    });

    const response = await api.get(`/apartments/search?${params}`);
    return response.data;
  },

  // Get featured apartments
  getFeaturedProperties: async (limit: number = 6): Promise<ApiResponse<Property[]>> => {
    const response = await api.get(`/apartments/featured?limit=${limit}`);
    return response.data;
  },

  // Get apartments by city
  getPropertiesByCity: async (
    city: string,
    page: number = 1,
    limit: number = 12
  ): Promise<PaginatedResponse<Property>> => {
    const params = new URLSearchParams({
      city,
      page: page.toString(),
      limit: limit.toString(),
    });

    const response = await api.get(`/apartments?${params}`);
    return response.data;
  },

  // Get property statistics (for homepage)
  getPropertyStats: async (): Promise<ApiResponse<{
    totalProperties: number;
    forSale: number;
    forRent: number;
    sold: number;
    averagePrice: number;
  }>> => {
    const response = await api.get('/apartments/stats');
    return response.data;
  },
};

export default propertyAPI;
