import { DTO } from '../DTO'

export interface HubsRoom extends DTO {
  id?: string
  name: string
  sceneId: string
  roomSize: number
  createdAt?: Date
  updatedAt?: Date
}
