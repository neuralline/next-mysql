// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql'
import db from '../../lib/db'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const posts = await db.query('SELECT * FROM posts')
      await db.end()
      res.statusCode = 200
      res.json(posts)
    } catch (err) {
      console.log('next api error: ', err)
    }
  } else if (req.method === 'POST') {
    let body: { title: string; content: string } = req.body

    const result = await db.query<mysql.OkPacket>(
      'INSERT INTO posts (title, content) VALUES (?,?)',
      [body.title, body.content]
    )
    await db.end()
    res.statusCode = 200
    res.json({ id: result.insertId, title: body.title, content: body.content })
  }
}
