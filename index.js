module.exports = {
    "extends": "eslint:recommended",
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
            "jsx": true
        },
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "consistent-this": [2, "self"],
        "no-console": 1,
        "no-debugger": 1,
        "no-multiple-empty-lines": 1,
        "react/jsx-boolean-value": 1,
        "react/jsx-no-undef": 1,
        "react/jsx-sort-props": 1,
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/jsx-wrap-multilines": 1,
        "react/no-did-mount-set-state": 1,
        "react/no-did-update-set-state": 1,
        "react/no-multi-comp": 1,
        "react/no-unknown-property": 1,
        "react/prop-types": 1,
        "react/react-in-jsx-scope": 1,
        "react/self-closing-comp": 1,
        "react/sort-prop-types": 0,
        "semi": ["error", "always"]
    }
};
