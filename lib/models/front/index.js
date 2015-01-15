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
        classes: {
            type: [String],
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
        articleHeader: {
            type: [{
                content: String,
                classes: String
            }]
        },
        relatedArticles: {
            type: [{
                content: String,
                classes: String
            }]
        },
        relatedUrls: [String],
        ranking: {
            type: Number,
            required: true
        },
    });

    var baseSchema = new mongoose.Schema({
        origin: {
            type: String,
            required: true
        },
        'type': {
            type: String,
            required: true
        },
        articleHeader: {
            type: [{
                content: String,
                classes: String
            }]
        },
        containerHeader: String,
        classes: {
            type: [String],
            required: true,
        },
        id: String,
        articles: [articleSchema],
        url: String,
        title: {
            type: [{
                content: String,
                classes: String
            }],
        },
        ingress: {
            type: [{
                content: String,
                classes: String
            }]
        },
        image: String,
        relatedArticles: {
            type: [{
                content: String,
                classes: String
            }]
        },
        relatedUrls: [String],
        ranking: {
            type: Number,
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
        articles: [baseSchema],
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
