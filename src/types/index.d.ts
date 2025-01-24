export * from './user'
export * from './session'
import type { $OrderBy, $SessionStatus } from '@/modules/core/enum'

export type Pagination = {
  page?: number
}

export type Search = {
  q?: string
}

export type OrderBy = {
  orderBy?: $OrderBy
}

export interface MobileHeaderProps {
  openMobileMenu?: boolean
  setOpenMobileMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export type SessionStatus = keyof typeof $SessionStatus
