module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["./setupTests.ts"],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/constants.ts",
    "!**/reducers/index.ts"
  ],
  moduleNameMapper: { "\\.(css|less)$": "identity-obj-proxy" },
  globals: {
    APP_ENV: {
      apiUrl: "http://example.com"
    }
  }
};
