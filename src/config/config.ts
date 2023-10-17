import { ENV } from '@constants/index'

const env = ENV[(process.env.NODE_ENV || '').toLowerCase()] || ENV.DEVELOPMENT
const config = {
  env,
  port: 3000,
  host: '0.0.0.0'
}

export default config
