import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Keyword, KeywordDocument } from './keyword.schema';

@Injectable()
export class KeywordService {
  constructor(@InjectModel(Keyword.name) private readonly keywordModel: Model<KeywordDocument>) {}

  async saveKeyword(keyword: string): Promise<Keyword> {
    const newKeyword = new this.keywordModel({ keyword });
    return await newKeyword.save();
  }
}