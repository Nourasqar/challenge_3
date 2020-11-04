var mongoose = require("moongoose")
mongoose.connect('mongodb://localhost/fetcher');
const db = mongoose.connection;

let testschema = mongoose.schema({
    name : String,
    email: String,
    password : String,
    address1 : String,
    address2 : String,
    city : String,
    state : String,
    zip_code : Number,
    phone_number : Number,
    credit_card : Number,
    expiry_date : Date,
    CVV : Number,
    billing_zip_code: String,
})
