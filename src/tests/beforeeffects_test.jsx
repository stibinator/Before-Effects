$.evalFile("~/Dropbox/Scripts/AEScripts/BeforeEffects/src/testbefore.jsxinc");$.evalFile("~/Dropbox/Scripts/AEScripts/BeforeEffects/src/beforeeffects.jsx");TB.module('beforeeffects.jsx');TB.test('Bootstrap', function () {    TB.hasProperty(BE, "BASE_PATH", "BASE_PATH should be a property of BE");    TB.equal(        BE.BASE_PATH,        new Folder("~/Dropbox/Scripts/AEScripts/BeforeEffects/src/").fsName,        "BE.BASE_PATH should equal the actual BE file base path.");});TB.runTests();