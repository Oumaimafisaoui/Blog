import mongoose from "mongoose";


const connect = async () =>
{
    try{
        await mongoose.connect(process.env.DB_URL);
    }
    catch
    {
        throw new Error("MangoDB connection failed")
    }
};

export default connect;