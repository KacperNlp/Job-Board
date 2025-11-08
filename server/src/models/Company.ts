import { Schema, model } from "mongoose";

export interface Company {
    _id: string;
    name: string;
    email: string;
    image: string;
}

const CompanySchema = new Schema<Company>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const CompanyModel = model<Company>("Company", CompanySchema);

export default CompanyModel;
