module.exports = {
  preset: "jest-preset-angular",
  // setupTestFrameworkScriptFile: "<rootDir>/setupJest.ts",
  setupFilesAfterEnv: ["<rootDir>/setupJest.ts"],
  globalSetup: "jest-preset-angular/global-setup",
  moduleNameMapper: {
    "@shared/components/(.*)": "<rootDir>/src/app/shared/components/$1",
    "@environments/(.*)": "<rootDir>/src/environments/$1",
    "@helpers/(.*)": "<rootDir>/src/app/shared/helpers/$1",
    "@shared/services/(.*)": "<rootDir>/src/app/shared/services/$1",
    "@shared/models/(.*)": "<rootDir>/src/app/shared/models/$1",
    "@shared/directives/(.*)": "<rootDir>/src/app/shared/directives/$1",
    "@core/(.*)": "<rootDir>/src/app/core/$1",
  },
};

// "@shared/components/*": [ "src/app/shared/components/*" ],
// "@environments/*": [ "src/environments/*" ],
// "@helpers/*": [ "src/app/shared/helpers/*" ],
// "@shared/services/*": ["src/app/shared/services/*"],
// "@shared/models/*": ["src/app/shared/models/*"],
// "@shared/directives/*": ["src/app/shared/directives/*"],
// "@core/*": ["src/app/core/*"]
