import fs from 'fs'
import path from 'path'

const buildFilePath = (relativeFilePath) =>
  path.join(__dirname.replace('/utils', ''), relativeFilePath)

export const readFile = (relativePath) => {
  const filePath = buildFilePath(relativePath)

  try {
    return fs.readFileSync(filePath, 'utf8')
  } catch (err) {
    throw new Error(`readFile() - file path: ${filePath}\n  ${err}`)
  }
}
