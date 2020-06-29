import { executeScript } from '../mongoose.connection'
import { Post } from '../post.schema'

executeScript(main)

async function main() {
  const posts = await Post.find({})
  console.log('Dante: main -> posts', posts)
}
