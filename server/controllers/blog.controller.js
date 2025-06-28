import fs from "fs"
import { imagekit } from "../config/imagekit.js"
import { createBlog } from "../models/blog.model.js"

export const addBlog = async (req, res) => {
    try {
        const { title, subTitle, description, category, isPublished } = JSON.parse(req.body.blog)
        const imageFile = req.file

        if (!title || !description | category || !imageFile) {
            return res.json({
                success: false,
                message: "Missing required fields."
            })
        }

        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/blogs"
        })
        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                { quality: "auto" },
                { format: "webp" },
                { width: "1280" }
            ]
        })

        const image = optimizedImageUrl

        await createBlog({ title, subTitle, description, category, image, isPublished })

        res.json({
            success: true,
            message: "Blog added successfully"
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}