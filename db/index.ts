import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'


import migrations from './migrations'
import { AppSchema } from './schema'
import Farmer from '../model/Farmer'

const adapter = new SQLiteAdapter({
  dbName: 'amps-db',
  schema:AppSchema,
  migrations,
  jsi: true,
  onSetUpError: error => {}
})

export const db = new Database({
  adapter,
  modelClasses: [
    Farmer
  ],
})