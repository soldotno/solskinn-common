exports = module.exports = function(mongoose, collection) {

    var schema = new mongoose.Schema({
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
