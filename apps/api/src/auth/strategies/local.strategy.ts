import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    private configService: ConfigService,
  ) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<any> {
    const adminEmail = this.configService.get<string>('ADMIN_EMAIL');

    if (email === adminEmail) {
      const admin = this.authService.validateAdmin(email, password);

      if (!admin) throw new UnauthorizedException();

      return admin;
    }

    const user = this.authService.validateUser(email, password);

    if (!user) throw new UnauthorizedException();

    return user;
  }
}
