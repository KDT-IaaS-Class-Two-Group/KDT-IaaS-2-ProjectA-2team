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

export type signupDocument = Document & signup;

@Schema()
export class signup {
  @Prop({ required: true })
  signup: string;
}

export const signupSchema = SchemaFactory.createForClass(signup);
