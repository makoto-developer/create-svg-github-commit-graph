import { NextApiHandler } from "next"
import * as ReactDOMServer from 'react-dom/server'
import Test from "../test"

const handler: NextApiHandler = async (req, res) => {
    const color = req.query.color
    const domSvg = ReactDOMServer.renderToString(
        <Test />
    )
    res
        .status(200)
        .setHeader("Content-Type", "image/svg+xml")
        .send(domSvg)
}

export default handler