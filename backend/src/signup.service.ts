import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { signup, signupDocument } from './signup.schema';

@Injectable()
export class signupService {
  constructor(
    @InjectModel(signup.name)
    private readonly signupModel: Model<signupDocument>,
  ) {}

  async savesignup(signup: string): Promise<signup> {
    const newsignup = new this.signupModel({ signup });
    return await newsignup.save();
  }
}
