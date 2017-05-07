    var mongoose = require("mongoose"),
        Schema = mongoose.Schema,
        objectId = mongoose.Schema.ObjectId;

    var userSchema = new Schema({
        _id: {
            type: objectId,
            auto: true
        },
        name: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        position: {
            type: String,
            required: true
        },
        industries: {
            type: String,
            required: true
        },
        interests: {
            type: String,
            required: true
        },
        comments: {
            type: String,
            required: false
        }
    }, {
        versionKey: false
    });

    var user = mongoose.model('profile', userSchema);

    module.exports = user;
