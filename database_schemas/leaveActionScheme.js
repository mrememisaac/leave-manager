import mongoose, { Schema } from 'moongoose';

const LeaveActionScheme = new Schema({
    leave_request_id: {
        type:Number,
        required: "What is the leave request number"
    },
    actors_role: {
        type:String,
        required:"Actors role required"
    },
    actors_response: {
        type:Boolean,
    },
    actors_response_date: {
        type:Date,
        required: "Action date required"
    },
    actors_username: {
        type:Date,
        required: "Actors username required"
    },
    actors_remark: {
        type:String,
    }
});