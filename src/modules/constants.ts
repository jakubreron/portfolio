import { type UserModule } from '~/types'
import '@vue/runtime-core'

const brand = {
  name: '>_jakubreron.me',
}

const socials = {
  linkedIn: 'https://www.linkedin.com/in/jacob-reron/',
  github: 'https://github.com/jakubreron',
}

export const constants = Object.assign(
  { brand },
  { socials },
)

export const install: UserModule = ({ app }) => {
  app.config.globalProperties.$constants = constants
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $constants: typeof constants
  }
}
