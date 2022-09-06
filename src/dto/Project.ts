import { DTO } from '../DTO'

export interface Project extends DTO {
  accessKey?: string
  name: string
  logoUrl: string
  logo?: ArrayBuffer
  faviconUrl: string
  favicon?: ArrayBuffer
  productType: string
  createdAt?: Date
  updatedAt?: Date
  uid: string
}
