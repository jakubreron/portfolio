import { type UserModule } from '~/types'

const brandPrefix = '>_'
const brand = {
  brandPrefix,
  brandName: `${brandPrefix}jakubreron.me`,
}

const socials = {
  linkedIn: 'https://www.linkedin.com/in/jacob-reron/',
  github: 'https://github.com/jakubreron',
}

export const $constants = Object.assign(
  brand,
  socials,
)

export const install: UserModule = ({ app }) => {
  // TODO: check if it's still necessary to do it this way
  app.config.globalProperties.$constants = $constants
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    // TODO: check if it's still necessary to do it this way
    $constants: typeof $constants
  }
}
