import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: Function) {
    console.log('serial', user);

    done(null, { id: user.id });
  }

  deserializeUser(payload: any, done: Function) {
    console.log('deserialize', payload);

    done(null, payload);
  }
}
