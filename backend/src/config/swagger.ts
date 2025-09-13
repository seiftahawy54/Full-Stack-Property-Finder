import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "My API",
            version: "1.0.0",
            description: "API documentation with Swagger",
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
        components: {
            schemas: {
                Apartment: {
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            example: "64efb7a9c8d1a2c4e8c12345",
                        },
                        title: {
                            type: "string",
                            example: "Luxury Apartment in Cairo",
                        },
                        size: {
                            type: "integer",
                            example: 120,
                        },
                        price: {
                            type: "number",
                            example: 150000,
                        },
                        location: {
                            type: "string",
                            example: "6th of October City, Egypt",
                        },
                        thumbnailURL: {
                            type: "string",
                            example: "https://example.com/thumbnail.jpg",
                        },
                        createdAt: {
                            type: "string",
                            format: "date-time",
                            example: "2025-09-13T12:34:56.000Z",
                        },
                        updatedAt: {
                            type: "string",
                            format: "date-time",
                            example: "2025-09-13T12:34:56.000Z",
                        },
                    },
                },
                CreateApartmentInput: {
                    type: "object",
                    required: ["title", "size", "price", "location", "description"],
                    properties: {
                        title: {type: "string", example: "Luxury Apartment in Cairo"},
                        size: {type: "integer", example: 120},
                        price: {type: "number", example: 150000},
                        location: {type: "string", example: "6th of October City, Egypt"},
                        description: {type: "string", example: "A beautiful apartment with great view"},
                        thumbnailURL: {type: "string", example: "https://example.com/thumbnail.jpg"},
                        imagesURLs: {
                            type: "array",
                            items: {type: "string"},
                            example: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"]
                        },
                    },
                },
                GetDetailsForSingleApartment: {
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            example: "64efb7a9c8d1a2c4e8c12345",
                        },
                        title: {
                            type: "string",
                            example: "Luxury Apartment in Cairo",
                        },
                        size: {
                            type: "integer",
                            example: 120,
                        },
                        price: {
                            type: "number",
                            example: 150000,
                        },
                        location: {
                            type: "string",
                            example: "6th of October City, Egypt",
                        },
                        thumbnailURL: {
                            type: "string",
                            example: "https://example.com/thumbnail.jpg",
                        },
                        imagesURLs: {
                            type: "array",
                            items: {type: "string"},
                            example: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"]
                        },
                        createdAt: {
                            type: "string",
                            format: "date-time",
                            example: "2025-09-13T12:34:56.000Z",
                        },
                        updatedAt: {
                            type: "string",
                            format: "date-time",
                            example: "2025-09-13T12:34:56.000Z",
                        },
                    }
                }
            },
        },
    },
    apis: ["./src/routes/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
