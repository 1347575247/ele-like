import {getStore} from './deposit'

let token = getStore('token')

if(token) {
  return true
}
return false
