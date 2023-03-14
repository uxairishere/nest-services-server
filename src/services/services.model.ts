import * as mongoose from 'mongoose';

export const ServiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    visibility: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

export interface Service extends mongoose.Document {
    id: string,
    name: string,
    desc: string,
    visibility: boolean,
    price: number
}