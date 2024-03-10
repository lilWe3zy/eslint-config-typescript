import security from "eslint-plugin-security"
import js from "@eslint/js"
import ts from 'typescript-eslint';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
    {
        files: ["src/**/*.ts"],
        ignores: ["dist/**", "node_modules/**", "bin/**", "build/**"],
        plugins: {
            security,
            js,
            ts,
        },
        rules: {
            // REFERENCES
            "prefer-const": ["error", {"destructuring": "any"}],
            "no-var": "error",
            // OBJECTS
            "no-object-constructor": "error",
            "object-shorthand": ["error", "properties"],
            "no-prototype-builtins": "error",
            "prefer-object-spread": "error",
            // ARRAYS
            "no-array-constructor": "error",
            "array-callback-return": ["error", {
                "checkForEach": true
            }],
            // DESTRUCTURING
            "prefer-destructuring": ["error", {
                "array": false,
                "object": true
            }],
            // STRINGS
            "prefer-template": "error",
            "no-eval": "error",
            // FUNCTIONS
            "func-style": ["error", "declaration", {
                "allowArrowFunctions": true
            }],
            "func-names": ["error", "always"],
            "no-loop-func": "error",
            "prefer-rest-params": "error",
            "default-param-last": "error",
            "no-new-func": "error",
            "no-param-reassign": "error",
            "prefer-spread": "error",
            // ARROW FUNCTIONS
            "prefer-arrow-callback": ["error", {
                "allowNamedFunctions": true,
                "allowUnboundThis": false
            }],
            // CLASSES
            "no-useless-constructor": "error",
            "class-methods-use-this": "error",
            // MODULES - TO BE INVESTIGATED :: PLUGIN
            // ITERATORS AND GENERATORS
            "no-iterator": "error",
            // PROPERTIES
            "dot-notation": "error",
            "prefer-exponentiation-operator": "error",
            // VARIABLES
            "one-var": "error",
            "no-multi-assign": "error",
            "no-plusplus": "error",
            // HOISTING
            // not necessary, but to <ES6+ compiles might be safer to have
            "no-use-before-define": "error",
            // COMPARISON OPERATORS AND EQUALITY
            "eqeqeq": "error",
            "no-unneeded-ternary": "error",
            "no-else-return": "error",
            // TYPE CASTING / COERCION
            "no-new-wrappers": "error",
            "radix": "error",
            // NAMING CONVENTIONS
            "id-length": ["warn", {
                "min": 4,
                "max": 25,
                "exceptions": [], // add to your leisure
                "exceptionPatterns": []
            }],
            // MISC
            "no-restricted-globals": ["error", "isNaN", "isFinite"],
            // ESLINT:RECOMMENDED
            ...js.configs.recommended.rules,
            // SECURITY
            ...security.configs.recommended.rules,
            // TYPESCRIPT
            ...ts.configs.recommended
        }
    }
];
