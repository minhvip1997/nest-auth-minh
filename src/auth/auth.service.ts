import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, passwords: string): Promise<any> {
    console.log('vao day');

    const user = await this.usersService.findUserByUserName(username);
    // const user = await this.usersService.findOne(username);
    if (user) {
      const matched = comparePasswords(passwords, user.password);
      if (matched) {
        // const { username, password, ...rest } = user;
        return user;
      } else {
        console.log('password do not match');
      }
    }

    return null;
  }

  async login(user: any) {
    const payload = { name: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
