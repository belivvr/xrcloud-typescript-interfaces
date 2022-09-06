import { DTO } from '../DTO'

export interface HubsPermission extends DTO {
  id?: string
  name: string
  xrcloudProjectAccessKey: string
  pinObjects: boolean
  updateHub: boolean
  updateHubPromotion: boolean
  updateRoles: boolean
  fly: boolean
  tweet: boolean
  kickUsers: boolean
  muteUsers: boolean
  amplifyAudio: boolean
  spawnAndMoveMedia: boolean
  spawnDrawing: boolean
  spawnCamera: boolean
  spawnEmoji: boolean
}
