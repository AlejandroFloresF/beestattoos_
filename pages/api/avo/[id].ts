import { NextApiRequest, NextApiResponse } from "next"
import DB from "../../../database/db"


const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
    const db = new DB()

    const id = request.query.id


    const allEntries = await db.getAll()
    const length = allEntries.length
    response.statusCode = 200 // ok
    response.setHeader("Content-type" , "application/json")
    response.end(JSON.stringify({data: id}))

}

export default allAvos