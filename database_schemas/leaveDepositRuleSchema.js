import mongoose, { Schema } from 'mongoose';

const LeaveDepositRuleSchema = new Scheme({
    leave_type_id: {
        type:Number,
        required: "What's leave type?"
    },
    name: {
        type:String,
        required: 'What is the rule name'
    },
    discriminator: {
        type:String,
        required: 'What is the discriminator'
    },
    days_to_deposit: {
        type:Number,
        required: "How many days should be deposited?"
    },
    deposit_day: {
        type:Number,
        required: "How many days after employment should this deposit occur?"
    },
    organization_id: {
        type:Number,
        required: "The organization that this rule applies to"
    }
});