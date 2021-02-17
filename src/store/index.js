import GlobalModule from './global'
import UserModule from './user'

import { readonly } from 'vue'

export default readonly({
  User: UserModule,
  Global: GlobalModule
})
