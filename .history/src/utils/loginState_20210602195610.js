import {getStore} from './deposit'

let token = getStore('token')
let state = false
if(token) {
  state = true
}

export default state
