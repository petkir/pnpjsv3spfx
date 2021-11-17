'use strict';

const build = require('@microsoft/sp-build-web');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

var getTasks = build.rig.getTasks;
build.rig.getTasks = function () {
  var result = getTasks.call(build.rig);

  result.set('serve', result.get('serve-deprecated'));

  return result;
};

build.configureWebpack.mergeConfig({
  additionalConfiguration: (generatedConfiguration) => {

    process.env.BABEL_ENV = 'production';
    generatedConfiguration.module.rules.unshift(
      {
        test: /\.js$/,
        include: /node_modules[\\\/]@pnp[\\\/]/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            configFile: false,
            compact: false,
            presets: [
              ["@babel/preset-env",
                {
                  modules: "cjs",
                }],
            ],
            plugins: [
              ["@babel/transform-runtime"]
            ],
            cacheDirectory: true,
            cacheCompression: true,
            sourceMaps: false
          }
        }
      }
    );

    return generatedConfiguration;
  }
});

// disable tslint
build.tslintCmd.enabled = false;

build.initialize(require('gulp'));
