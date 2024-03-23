const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: true,
  experimentalModifyObstructiveThirdPartyCode: true,
  experimentalSessionSupport:true,
  e2e: {
   baseUrl:"https://demo.nopcommerce.com/",
   chromeWebSecurity: false,
    supportFile: 'support/e2e.js',
    specPattern: "**/*.feature",
   // defaultCommandTimeout: 120000,
    // testIsolation: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 10000,
    experimentalSessionSupport:true,
    setupNodeEvents(on, config) {
      return require('./plugins/index.js')(on, config)
    },
    //experimentalWebKitSupport:true,
  },
  retries:{
    //"runMode":2,
    //"openMode":2
  }
});
