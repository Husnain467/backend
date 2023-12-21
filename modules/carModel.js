import mongoose from "mongoose";

const AutoSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    admprice:Number,
    listingDate: {
        type: Date,
        default: Date.now
    },
    image: {
        type: mongoose.Schema.Types.Mixed,
    },
});

export const carModel = mongoose.model("carrModel", AutoSchema);

