exports = module.exports = function (mongoose) {
    return {
        Front: require('./front')(mongoose, 'Front')
    };
};
