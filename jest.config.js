/** @type {import('jest').Config} */
module.exports = {
  
    rootDir: '.',
    verbose: true,
    reporters: [
        "default",
        [
          "./node_modules/jest-html-reporter",
          {
            pageTitle: "Consumer Contract Test Report",
            outputPath: "test-report.html",
            includeFailureMsg: true,
            includeConsoleLog: true,
          }
        ]  
      ]
  }