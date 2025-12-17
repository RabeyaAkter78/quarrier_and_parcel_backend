/* eslint-disable prettier/prettier */
export interface IPercel {
  trackingId: string
  senderName: string
  senderEmail: string
  senderPhone: string
  receiverName: string
  receiverEmail: string
  receiverPhone: string
  weight: number
  description: string
  price: number
  status: Status
  assignedTo: string
  isPaymentDone: boolean
}

enum Status {
  PENDING = 'pending',
  IN_TRANSIT = 'inTransit',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
  RETURNED = 'returned',
  LOST = 'lost',
  OUT_FOR_DELIVERY = 'outForDelivery',
  
}
