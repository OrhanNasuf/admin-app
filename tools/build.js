/* eslint-disable no-console */
import webpack from "webpack";
import webpackConfig from "../webpack.config.dist";
import colors from "colors";

process.env.NODE_ENV = "production"; // This assures the Babel dev config (for hot reloading)

console.log("Generating minified bundle for production via Webpack.");

webpack(webpackConfig).run((error, stats) => {
    if (error) {
        console.log(error.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson();
    
    if (jsonStats.hasErrors) {
        return jsonStats.errors.map((error) => {
            console.log(error.red);
        });
    }

    if (jsonStats.hasWarnings) {
        console.log("Webpack generated the following warnings: ".bold.yellow);
        jsonStats.warnings.map((warning) => {
            console.log(warning.yellow);
        });
    }

    console.log("Webpack stats: " + stats);

    // If we get this far, the build succeeded.
    console.log("App has been compiled in production mode and is written to /dist.");

    return 0;
});