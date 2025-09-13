import {Request} from 'express';

// API Response types
export interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    data?: T;
    error?: string;
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

export interface PaginationQuery {
    page?: string;
    limit?: string;
    sort?: string;
    sortBy?: string;
}

// Database types
export interface BaseDocument {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IApartment extends BaseDocument {
    title: string;
    size: number;
    price: number;
    location: string;
    description: string;
    thumbnailURL: string;
    imagesURLs: string[];
}

export interface CreateApartmentInput {
    title: string;
    size: number;
    price: number;
    location: string;
    description: string;
    thumbnailURL: string;
    imagesURLs: string[];
}

// Error types
export class AppError extends Error {
    public statusCode: number;
    public isOperational: boolean;

    constructor(message: string, statusCode: number = 500) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

export class ValidationError extends AppError {
    constructor(message: string) {
        super(message, 400);
    }
}

export class NotFoundError extends AppError {
    constructor(resource: string = 'Resource') {
        super(`${resource} not found`, 404);
    }
}

export class UnauthorizedError extends AppError {
    constructor(message: string = 'Unauthorized') {
        super(message, 401);
    }
}

export class ForbiddenError extends AppError {
    constructor(message: string = 'Forbidden') {
        super(message, 403);
    }
}
