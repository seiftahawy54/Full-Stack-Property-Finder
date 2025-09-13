import mongoose, { Document, Schema } from 'mongoose';
import { IApartment } from '../types/common';

// Extend the IApartment interface with Mongoose Document
export interface ApartmentDocument extends IApartment, Document {
  _id: string;
}

// Apartment schema definition
const ApartmentSchema = new Schema<ApartmentDocument>(
  {
      // Apartments fields
      title: {
          type: String,
          required: true,
      },
      size: {
          type: Number, // in square meters
          required: true,
      },
      price: {
          type: Number,
          required: true,
      },
      location: {
          type: String,
          required: true,
      },
      description: {
          type: String,
          required: true,
      },
      thumbnailURL: {
          type: String,
          required: true,
      },
      imagesURLs: {
          type: [String],
          required: true,
      }
  },
  {
    timestamps: true,
  }
);

export const Apartment = mongoose.model<ApartmentDocument>('Apartment', ApartmentSchema);

export default Apartment;
