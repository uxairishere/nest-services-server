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
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Service' 
    },


    quantity: {
        type: [mongoose.Schema.Types.ObjectId],
    }
})

export interface Package extends mongoose.Document {
    id: string,
    name: string,
    desc: string,
    visibility: boolean,
    service: [mongoose.Schema.Types.ObjectId]
}