export interface Property {
  _id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  imagesURLs: string[];
  size: number;
  createdAt: string;
  updatedAt: string;
}

export interface PropertyFilters {
  search?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}
