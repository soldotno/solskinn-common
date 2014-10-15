exports = module.exports = function (mongoose) {
    return {
        Article: require('./article')(mongoose, 'Article'),
        Front: require('./front')(mongoose, 'Front')
    };
};
