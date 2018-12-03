module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true
  },
  settings: {
    ecmascript: 6,
    jsx: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectSpread: true,
      experimentalDecorators: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react"],
  extends: "airbnb",
  rules: {
    "react/jsx-filename-extension": 0,
    "react/destructuring-assignment": 0,
    "no-console": 0
  }
};
