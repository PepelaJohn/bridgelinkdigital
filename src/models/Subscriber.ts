import mongoose, { Schema, Document, Types } from 'mongoose';

export interface ISubscriber extends Document {
_id:Types.ObjectId,
  email: string;
  unsubscribeToken: string;
    subscribedAt: Date;
    createdAt: Date;
    updatedAt: Date
}

const SubscriberSchema = new Schema<ISubscriber>({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    index:true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      'Please provide a valid email address',
    ],
  },
  unsubscribeToken: {
    type: String,
    required: [true, 'Unsubscribe token is required'],
      unique: true,
    index:true
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
}, {
    timestamps:true
});




export default mongoose.models.Subscriber ||
  mongoose.model<ISubscriber>('Subscriber', SubscriberSchema);
