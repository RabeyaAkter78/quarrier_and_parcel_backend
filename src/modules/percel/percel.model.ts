/* eslint-disable prettier/prettier */
import mongoose, { Schema } from 'mongoose'
import { IPercel } from './percel.interface'

const percelSchema = new Schema<IPercel>(
  {
    trackingId: { type: String, required: true, unique: true },
    senderName: { type: String, required: true },
    senderEmail: { type: String, required: true },
    senderPhone: { type: String, required: true },
    receiverName: { type: String, required: true },
    receiverEmail: { type: String, required: true },
    receiverPhone: { type: String, required: true },
    weight: { type: Number, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    status: {
      type: String,
      enum: [
        'pending',
        'inTransit',
        'delivered',
        'cancelled',
        'returned',
        'lost',
        'outForDelivery',
      ],
    },
    assignedTo: { type: String, required: true },
    isPaymentDone: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
)

const Percel = mongoose.model<IPercel>('Percel', percelSchema)
export default Percel
