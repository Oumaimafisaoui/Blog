import mongoose from "mongoose";


const connect = async () =>
{
    try{
        await mongoose.connect(????????);
    }
    catch
    {
        throw new Error("MangoDB connection failed")
    }
};

export default connect;