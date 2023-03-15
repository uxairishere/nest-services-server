import * as mongoose from 'mongoose'

export const PackageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    visibility: {
        type: Boolean
    },
    services:{ 
        type: Array 
    }
})

export interface Package extends mongoose.Document {
    id: string,
    name: string,
    desc: string,
    visibility: boolean,
    service: []
}