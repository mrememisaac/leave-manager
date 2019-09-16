import mongoose, {Schema} from 'mongoose';

/** Create a database scheme fro holidays */
const HolidayScheme = new Scheme({
    name: { 
        type:String, 
        required: "What is the name of the?"
    },
    date: { 
        type:Date, 
        required: "When is this holiday?"
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