exports = module.exports = function(mongoose, collection) {
    var articleSchema = new mongoose.Schema({
        origin: {
            type: String,
            required: true
        },
        'type': {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        title: {
            type: [{
                content: String,
                classes: String
            }],
            required: true
        },
        ingress: {
            type: [{
                content: String,
                classes: String
            }]
        },
        image: String,
        ranking: {
            type: Number,
            required: true
        },
    });

    var frontSchema = new mongoose.Schema({
        revision: {
            type: Number,
            required: true
        },
        frontId: {
            type: Number,
            required: true
        },
        articles: [articleSchema],
        createdAt: {
            type: Date,
            default: Date.now,
            expires: 604800, // ttl in seconds (one week)
            required: true,
            index: true
        }
    }, {
        versionKey: false
    });

    // force the combination of frontId and revision to be unique
    frontSchema.index({
        revision: 1,
        frontId: 1
    }, {
        unique: true
    });

    // create the model for articles and return it
    return mongoose.model(collection, frontSchema);
};
