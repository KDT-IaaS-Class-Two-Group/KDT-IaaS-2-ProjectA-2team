// import { Schema, Document } from 'mongoose';

// export const searchSchema = new Schema({
//   search: String,
// });

// export interface search extends Document {
//   search: string;
// }

// import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// export type SearchDocument = Search & Document;

// @Schema()
// export class Search {
//   @Prop()
//   search: string;
// }

// export const searchSchema = SchemaFactory.createForClass(Search);

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type KeywordDocument = Keyword & Document;

@Schema()
export class Keyword {
  @Prop({ required: true })
  keyword: string;
}

export const KeywordSchema = SchemaFactory.createForClass(Keyword);
