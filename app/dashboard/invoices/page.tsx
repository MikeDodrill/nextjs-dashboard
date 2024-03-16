import connectDB from "@/config/database";
import Workorder from "@/models/Workorder";
import { GetServerSideProps } from "next";

interface Workorder {
    _id: string;
    contact: string;
    description: string;
}

interface WorkorderProps {
    Workorder: Workorder[];

}
