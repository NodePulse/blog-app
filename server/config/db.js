import { Pool } from "pg"

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
        require: true
    }
})

export async function connectDB() {
    try {
        await pool.connect()
        console.log("Connected to database")
    } catch (error) {
        console.log("Error connecting to database")
    }
}