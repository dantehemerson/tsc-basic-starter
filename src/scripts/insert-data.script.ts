import { readFileSync } from 'fs'
import path from 'path'
import { executeScript } from '../mongoose.connection'
import { Post } from '../post.schema'

executeScript(main)

const allDataFilePath = path.join(path.dirname(__filename), './data/all.json')
console.log('Dante: allDataFilePath', allDataFilePath)

async function main() {
  const file = await readFileSync(allDataFilePath)
  const data = JSON.parse(file.toString())

  await Post.insertMany(data)

  console.log('All data inserted successfully')
}
