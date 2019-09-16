import mongoose, { Schema } from 'mongoose';

/** Create a database scheme for leave request */
const LeaveRequestScheme = new Scheme({
    leave_type_id: {
        type:Number,
        required: "What is the leave type?"
    },
    reason: {
        type:String,
    },
    start_date: {
        type:Date,
        required: "When are you starting the leave?"
    },
    days: {
        type:Number,
        required:"How many days are you spending?"
    },
    created_by: {
        type:String,
        required: "What is your username?"
    },
    date_created: {
        type:Date,
        required: "Date created is required"
    }
});