import express from "express"
import { adminLogin } from "../controllers/admin.controller.js"

const adminRouter = express.Router()

adminRouter.route("/login").post(adminLogin)

export default adminRouter