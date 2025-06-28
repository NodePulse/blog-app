import express from "express"
import { addBlog } from "../controllers/blog.controller.js"
import { upload } from "../middleware/multer.js"
import { auth } from "../middleware/auth.js"

const blogRouter = express.Router()

blogRouter.route("/add").post(upload.single("image"), auth, addBlog)

export default blogRouter