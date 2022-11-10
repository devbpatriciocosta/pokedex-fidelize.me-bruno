import connect from 'next-connect'

import mongooseMiddlware from './mongoose'

export default function createHandler() {
  return connect().use(mongooseMiddlware)
}
