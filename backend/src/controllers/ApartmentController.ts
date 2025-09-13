import {Request, Response, NextFunction} from 'express';
import {Apartment, ApartmentDocument} from '../models/Apartment';
import {
    ApiResponse, CreateApartmentInput, IApartment,
    PaginatedResponse,
    PaginationQuery, ValidationError
} from '../types/common';
import {apartmentsCreationSchema} from "../utils/validations/apartmentsCreation";

export class ApartmentController {
    /**
     * Get all Apartments with pagination and filtering
     */
    public async getAllApartments(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const {
                page = '1',
                limit = '10',
                title,
                size,
                price,
                sortBy = 'createdAt',
                sort = 'desc',
                search = ''
            } = req.query as PaginationQuery & {
                title?: string;
                size?: number;
                price?: number;
                search?: string;
            };

            const pageNum = parseInt(page, 10);
            const limitNum = parseInt(limit, 10);
            const skip = (pageNum - 1) * limitNum;

            // Build filter object
            const filter: any = {};
            if (title) filter.title = title;
            if (size) filter.size = size;
            if (price) filter.price = price;
            if (search) filter.title = {$regex: search, $options: 'i'};

            // Build sort object
            const sortOrder = sort === 'desc' ? -1 : 1;
            const sortObj: any = {[sortBy]: sortOrder};

            // Get Apartments and total count
            const [Apartments, total] = await Promise.all([
                Apartment.find(filter)
                    .sort(sortObj)
                    .skip(skip)
                    .limit(limitNum)
                    .lean(),
                Apartment.countDocuments(filter)
            ]);

            const totalPages = Math.ceil(total / limitNum);

            const response: PaginatedResponse<ApartmentDocument> = {
                success: true,
                message: 'Apartments retrieved successfully',
                data: Apartments as ApartmentDocument[],
                pagination: {
                    page: pageNum,
                    limit: limitNum,
                    total,
                    totalPages,
                    hasNext: pageNum < totalPages,
                    hasPrev: pageNum > 1
                }
            };

            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }
    /**
     * Create a new apartment
     */
    public async createApartment(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const apartmentData: CreateApartmentInput = req.body;

            const {error} = apartmentsCreationSchema.validate(apartmentData);
            if (error) {
                res.status(400).json({
                    success: false,
                    data: error,
                    message: "Invalid apartment data"
                });
                return;
            }

            const newApartment = new Apartment({
                ...apartmentData,
            });

            const savedApartment = await newApartment.save();

            const response: ApiResponse<ApartmentDocument> = {
                success: true,
                message: 'Task created successfully',
                data: savedApartment
            };

            res.status(201).json(response);
        } catch (error) {
            next(error);
        }
    }
    /**
     * Get a single apartment by ID
     */
    public async getApartmentById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const apartmentId: string = req.params.id;

            const apartment: ApartmentDocument | null = await Apartment.findById(apartmentId);

            if (!apartment) {
                res.status(404).json({
                    success: false,
                    message: 'Apartment not found',
                    data: null,
                })

                return;
            }

            const response: ApiResponse<ApartmentDocument> = {
                success: true,
                message: 'Apartment retrieved successfully',
                data: apartment
            }

            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }
}

export default new ApartmentController();
