import { Controller, Post, Body } from '@nestjs/common';
import { signupService } from './signup.service';
import { signup } from './signup.schema';

@Controller()
export class signupController {
  constructor(private readonly signupService: signupService) {}

  @Post()
  async savesignup(@Body('signup') signup: string): Promise<signup> {
    return this.signupService.savesignup(signup);
  }
}
