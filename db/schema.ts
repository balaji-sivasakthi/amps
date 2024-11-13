import { appSchema, tableSchema } from '@nozbe/watermelondb';

export const AppSchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'farmers',
      columns: [
        { name: 'id', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'account_id', type: 'string' },
        { name: 'address_id', type: 'string' },
        { name: 'mobile', type: 'string' },
        { name: 'updated_at', type: 'string' },
        { name: 'create_at', type: 'string' },
      ],
    }),
  ],
});
