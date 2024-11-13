import { Model } from '@nozbe/watermelondb';
import { field, text, date } from '@nozbe/watermelondb/decorators';

export default class Farmer extends Model {
  static table = 'farmers';

  @text('name') name!: string;
  @field('account_id') account_id!: string;
  @field('address_id') address_id!: string;
  @text('mobile') mobile!: string;
  @date('created_at') created_at!: Date;
  @date('updated_at') updated_at!: Date;
}
