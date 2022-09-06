import { DTO } from '../DTO'

export interface HubsAsset extends DTO {
  id?: string
  name: string
  asset?: ArrayBuffer
  assetUrl: string
  thumbnail?: ArrayBuffer
  thumbnailUrl: string
  active: boolean
  createdAt?: Date
  updatedAt?: Date
}
