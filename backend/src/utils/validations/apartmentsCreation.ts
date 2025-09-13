import joi from 'joi';

export const apartmentsCreationSchema = joi.object({
    title: joi.string().required(),
    size: joi.number().required(),
    price: joi.number().required(),
    location: joi.string().required(),
    description: joi.string().required(),
    thumbnailURL: joi.string().required(),
    imagesURLs: joi.array().items(joi.string()).required(),
});
