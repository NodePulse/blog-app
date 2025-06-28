import { nanoid } from "nanoid"
import { pool } from "../config/db.js"

export const createBlogTable = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS blogs (
                id VARCHAR(24) PRIMARY KEY,
                title TEXT NOT NULL,
                subTitle TEXT,
                description TEXT NOT NULL,
                category TEXT NOT NULL,
                image TEXT NOT NULL,
                isPublished BOOLEAN DEFAULT FALSE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `)
    } catch (error) {
        console.log(error)
    }
}

export const createBlog = async ({ title, subTitle, description, category, image, isPublished = false }) => {
    const id = nanoid(24)
    const result = pool.query(`
        INSERT INTO blogs (id, title, subTitle, description, category, image, isPublished)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
    `, [id, title, subTitle, description, category, image, isPublished])
    return (await result).rows[0]
}