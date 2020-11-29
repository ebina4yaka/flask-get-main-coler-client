import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'isomorphic-unfetch'
import { ApiResponse } from '../../libs/models'

const URL = process.env.API_URL

export default (req: NextApiRequest, res: NextApiResponse): void => {
  if (req.body) {
    fetch(`${URL}/api/upload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    })
      .then((response) => response.json())
      .then((jsonResponse: ApiResponse) => {
        res.status(200).json(jsonResponse)
      })
  }
}
