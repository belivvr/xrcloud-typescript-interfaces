import { DTO } from '../DTO'

export interface HubsScene extends DTO {
  id?: string
  name: string
  thumbnailUrl: string
  roomSize: number
  autoScale: boolean
  createdAt?: Date
  updatedAt?: Date
}
