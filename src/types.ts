import { type ViteSSGContext } from 'vite-ssg'
import type { TranslateResult } from 'vue-i18n'
import type { RouteRecordName } from 'vue-router'

export type UserModule = (ctx: ViteSSGContext) => void

export interface RouterLink {
  name: RouteRecordName
  text: TranslateResult
}
