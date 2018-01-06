module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "env": {
        "browser": true,
        "es6": true,
        "mocha": true,
        "node": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "impliedStrict": true,
            "jsx": true,
            "modules": true
        },
        "ecmaVersion": 7,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "array-bracket-spacing": ["error", "never"],
        "consistent-this": [2, "self"],
        "indent": ["error", 4, { "MemberExpression": 0, "SwitchCase": 1 }],
        "no-console": ["error", { allow: ["warn", "error"] }],
        "no-debugger": 2,
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
        "object-curly-spacing": ["error", "always"],
        "react/jsx-curly-spacing": ["error", "always"],
        "semi": ["error", "always"],
        "space-in-parens": ["error", "never"]
    }
};
