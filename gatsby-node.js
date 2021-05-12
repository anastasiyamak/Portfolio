const path = require('path');

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
    });
    if (stage === 'build-html') {
        actions.setWebpackConfig({
            externals: getConfig().externals.concat(function(
                context,
                request,
                callback
            ) {
                const regex = /^@?firebase(\/(.+))?/;
                if (regex.test(request)) {
                    return callback(null, 'umd ' + request);
                }
                callback();
            }),
        });
    }
};