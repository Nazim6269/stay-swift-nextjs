import mongoose, { Schema } from 'mongoose';
import { ObjectId } from 'mongodb';

const ratingSchma = new Schema({
  hotelId: {
    required: true,
    type: ObjectId,
  },
  userId: {
    required: true,
    type: ObjectId,
  },
  rating: {
    required: true,
    type: Number,
  },
});

export const ratingsModel =
  mongoose.models.ratings ?? mongoose.model('ratings', ratingSchma);
