import { login } from './services'

export default ({ app }, inject) => {
  inject('api', {
    login
  })
}
