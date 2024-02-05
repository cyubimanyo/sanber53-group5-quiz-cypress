const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": 'https://magento.softwaretestingboard.com/',
    "defaultCommandTimeout": 5000,
    "browser": "chrome",
    "viewportWidth": 1280,
    "viewportHeight": 720
  },
});