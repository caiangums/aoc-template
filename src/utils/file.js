import fs from 'fs'
import path from 'path'

const buildFilePath = (relativeFilePath) =>
  path.join(__dirname.replace('/utils', ''), relativeFilePath)

export const readFile = (relativePath) =>
  new Promise((resolve, reject) => {
    const filePath = buildFilePath(relativePath)

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        const { code, path } = err
        reject(`readFile() =>\n  file path: ${path}\n  code: ${code}`)
      }
      resolve(data)
    })
  })
