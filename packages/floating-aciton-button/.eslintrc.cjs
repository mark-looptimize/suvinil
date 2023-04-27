module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:lit/recommended"
    ],
    "overrides": [
        {
            "files": ["./src/**/*.ts"],
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "ignorePatterns": [
        "dist/**/*.js",
        "lib/**/*.js",
        "**/*.cjs"
    ],
    "rules": {
    }
}
