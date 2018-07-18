if (process.env.NODE_ENV === "production") {
    module.exports = require("./configureStore.dist");
} else {
    module.exports = require("./configureStore.dev");
}
