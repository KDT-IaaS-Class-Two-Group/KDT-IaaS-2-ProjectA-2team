import { Controller, Post, Body } from '@nestjs/common';
import { KeywordService } from './keyword.service';
import { Keyword } from './keyword.schema';

@Controller()
export class KeywordController {
  constructor(private readonly keywordService: KeywordService) {}

  @Post()
  async saveKeyword(@Body('keyword') keyword: string): Promise<Keyword> {
    return this.keywordService.saveKeyword(keyword);
  }
}
