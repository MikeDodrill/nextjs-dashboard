import connectDB from "@/config/database"
import Workorder from "@/models/Workorder"


export const GET = async (request) => {

    try {
        await connectDB();

      const workorders = await Workorder.find({})

       return new Response(JSON.stringify(workorders), {status: 200}); 
     
        

    }     catch (error) {
        console.log(error);
        return new Response("Something Went Terribly Wrong Asshat", {status: 500})
    }
}