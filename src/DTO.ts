import { Query } from './Query'

export interface DTO {
  constructor: (dto: DTO) => void

  many: (query?: Query) => Promise<DTO[]>
  get: (id: string) => Promise<DTO | null>
  create: () => Promise<DTO>
  update: (dto: DTO) => Promise<void>
  delete: () => Promise<void>
}
