import {NextResponse} from "next/server"
import connect from "../../utils/db"
import postSchema from "../../models/postSchema"

export const GET  = async (resquest) =>
{
    try{
            await connect();
            const posts = await postSchema.find()
            return new NextResponse(posts, {status:200})
    }
    catch{
        return new NextResponse("Database Error", {status:500})
    }
}