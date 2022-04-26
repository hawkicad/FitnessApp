const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#00b4a3',
                            '@menu-item-active-bg': 'black',                          
                                    },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};