import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from './schemas/book.schema';

@Injectable()
export class SearchService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async searchBooks(keyword: string): Promise<Book[]> {
    // 책 제목, 작가, 장르, 해시태그 등에서 키워드와 일치하는 책을 검색
    return this.bookModel
      .find({
        $or: [
          { title: new RegExp(keyword, 'i') }, // 제목에 키워드가 포함되는 경우
          { author: new RegExp(keyword, 'i') }, // 작가에 키워드가 포함되는 경우
          { genre: new RegExp(keyword, 'i') }, // 장르에 키워드가 포함되는 경우
          { hashtags: new RegExp(keyword, 'i') }, // 해시태그에 키워드가 포함되는 경우
        ],
      })
      .exec();
  }
}
