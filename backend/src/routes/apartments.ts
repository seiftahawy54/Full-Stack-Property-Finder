import { Router } from 'express';
import ApartmentController from '../controllers/ApartmentController';

const router = Router();

// Get apartments request

/**
 * @swagger
 * /api/v1/apartments:
 *   get:
 *     summary: Retrieve a list of apartments with pagination and filtering
 *     tags: [Apartments]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of results per page
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Filter by apartment title
 *       - in: query
 *         name: size
 *         schema:
 *           type: integer
 *         description: Filter by apartment size
 *       - in: query
 *         name: price
 *         schema:
 *           type: number
 *         description: Filter by apartment price
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           default: createdAt
 *         description: Field to sort by
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           default: desc
 *         description: Sort order
 *     responses:
 *       200:
 *         description: Apartments retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Apartments retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Apartment'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     page:
 *                       type: integer
 *                       example: 1
 *                     limit:
 *                       type: integer
 *                       example: 10
 *                     total:
 *                       type: integer
 *                       example: 50
 *                     totalPages:
 *                       type: integer
 *                       example: 5
 *                     hasNext:
 *                       type: boolean
 *                       example: true
 *                     hasPrev:
 *                       type: boolean
 *                       example: false
 *       500:
 *         description: Internal server error
 */
router.get('/', ApartmentController.getAllApartments);

// Create apartment request
/**
 * @swagger
 * /api/v1/apartments:
 *   post:
 *     summary: Create a new apartment
 *     description: Add a new apartment to the database
 *     tags: [Apartments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateApartmentInput'
 *     responses:
 *       201:
 *         description: Apartment created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Task created successfully
 *                 data:
 *                   $ref: '#/components/schemas/Apartment'
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
router.post('/', ApartmentController.createApartment);

// Get apartment by id request
/**
 * @swagger
 * /api/v1/apartments/{id}:
 *   get:
 *     summary: Get apartment by ID
 *     description: Retrieve a single apartment by its unique ID
 *     tags: [Apartments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 64efb7a9c8d1a2c4e8c12345
 *         description: The ID of the apartment to retrieve
 *     responses:
 *       200:
 *         description: Apartment retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Apartment retrieved successfully
 *                 data:
 *                   $ref: '#/components/schemas/GetDetailsForSingleApartment'
 *       404:
 *         description: Apartment not found
 *       500:
 *         description: Server error
 */
router.get('/:id', ApartmentController.getApartmentById);

export default router;
