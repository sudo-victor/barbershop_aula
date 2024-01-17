import multer, { diskStorage } from "multer"
import { randomUUID } from "crypto"

const config = diskStorage({
  filename(req, file, callback) {
    const extension = file.mimetype.split("/")[1]
    const filename = `${randomUUID()}.${extension}`
    callback(null, filename)
  },
  destination(req, file, callback) {
    callback(null, "www/")
  }
})

export const storageMiddleware = multer({ storage: config })