exports = module.exports = function(mongoose, collection) {

    var schema = new mongoose.Schema({
        current: {
            type: Boolean,
            default: false,
            required: true
        },
        revision: {
            type: Number,
            required: true
        },
        frontId: {
            type: Number,
            required: true
        },
        entries: [mongoose.Schema.Types.Mixed],
        createdAt: {
            type: Date,
            default: Date.now,
            expires: 604800, // ttl in seconds (one week)
            required: true
        }
    });

    schema.set('toObject', {
        transform: function(doc, ret, options) {
            delete ret._id;
            delete ret.__v;
        }
    });

    schema.set('toJSON', {
        transform: function(doc, ret, options) {
            delete ret._id;
            delete ret.__v;
        }
    });

    // create the model for articles and return it
    return mongoose.model(collection, schema);
};
