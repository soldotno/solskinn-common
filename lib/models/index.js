exports = module.exports = function (mongoose) {
    return {
        Entry: require('./entry')(mongoose, 'Entry'),
        Front: require('./front')(mongoose, 'Front')
    };
};
