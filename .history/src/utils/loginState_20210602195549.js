import {getStore} from './deposit'

let token = getStore('token')
let state = false
if(token) {
  return true
}

export default state
