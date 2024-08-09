// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { signup, signupDocument } from './schemas/signup.schema';

// @Injectable()
// export class SearchService {
//   constructor(@InjectModel(signup.name) private signupModel: Model<signupDocument>) {}

//   async searchsignup(signup: string): Promise<signup[]> {
//     // 책 제목, 작가, 장르, 해시태그 등에서 키워드와 일치하는 책을 검색
//     return this.signupModel
//       .find({
//         $or: [
//           { title: new RegExp(signup, 'i') }, // 제목에 키워드가 포함되는 경우
//           { author: new RegExp(signup, 'i') }, // 작가에 키워드가 포함되는 경우
//           { genre: new RegExp(signup, 'i') }, // 장르에 키워드가 포함되는 경우
//           { hashtags: new RegExp(signup, 'i') }, // 해시태그에 키워드가 포함되는 경우
//         ],
//       })
//       .exec();
//   }
// }
