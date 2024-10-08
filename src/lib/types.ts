import { ConnectionProviderProps } from '@/providers/connection-provider'
import {z} from 'zod'

export const EditUserProfileSchema = z.object({
    name:z.string().min(1,'Required'),
    email:z.string().email('Required')
})
export type ConnectionTypes = 'Google Drive' | 'Notion' | 'Slack' | 'Discord'

export type Connection = {
  title: ConnectionTypes
  description: string
  image: string
  connectionKey: keyof ConnectionProviderProps
  accessTokenKey?: string
  alwaysTrue?: boolean
  slackSpecial?: boolean
}
