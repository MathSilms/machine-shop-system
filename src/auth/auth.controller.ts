import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Controller, UseGuards, Request, Post } from '@nestjs/common';

@Controller()
export class AuthController {

  constructor(
    private authService: AuthService,
  ) { }

 // @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    //console.log(req.body)
    return this.authService.login(req.body);
  }
}
