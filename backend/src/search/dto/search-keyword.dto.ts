import { IsString } from 'class-validator';

export class SearchKeywordDto {
  @IsString()
  keyword: string;
}
