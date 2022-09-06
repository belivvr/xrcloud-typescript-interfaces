import { Order } from './types'

export interface Query {
  where?: {
    [key: string]: any
  }
  orderBy?: {
    createdAt?: Order
    updatedAt?: Order
  }
  size?: number
  cursor?: string
}
