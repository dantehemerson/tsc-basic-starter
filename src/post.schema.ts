import mongoose, { Schema } from 'mongoose'

const Image = new Schema({
  src: String,
  alt: String
})

const Comments = new Schema({
  message: String,
  images: [Image]
})

const PostSchema = new Schema({
  name: String,
  firstLevelImagePath: String,
  images: [Image],
  comments: [Comments],
  secondLevelImage: Image
})

export const Post = mongoose.model('Post', PostSchema)
