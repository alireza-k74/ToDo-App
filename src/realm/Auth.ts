import {Realm} from '@realm/react';
export class Auth extends Realm.Object<Auth> {
  description!: string;
  title!: string;
  releaseyear!: number;
  userId!: string;
  constructor(
    realm: Realm,
    description: string,
    title: string,
    releaseyear: number,
    userId?: string,
  ) {
    super(realm, {
      description,
      title,
      releaseyear,
      userId: userId || '_SYNC_DISABLED_',
    });
  }
}
