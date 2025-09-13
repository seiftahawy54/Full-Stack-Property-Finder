import { Router } from 'express';
import apartmentsRoutes from './apartments';
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "../config/swagger";

const router = Router();

// Health check endpoint
/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check
 *     description: Check if the server is running and get uptime details
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Server is healthy
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
 *                   example: Server is running
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                   example: 2025-09-13T14:25:00.000Z
 *                 uptime:
 *                   type: number
 *                   example: 3600.123
 */
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Swagger Docs
router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API routes
router.use('/api/v1/apartments', apartmentsRoutes);

export default router;
