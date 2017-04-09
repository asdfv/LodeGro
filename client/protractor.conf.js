exports.config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['./src/e2e/*/*.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    onPrepare: function () {
        var globals = require('protractor');
        var browser = globals.browser;
        browser.driver.manage().window().setSize(1600, 800);
    }
};
