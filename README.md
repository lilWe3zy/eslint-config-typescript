# Personal `eslint-config`
This is my personal flat config for eslint for use in typescript projects.

This config is based on the [AirBnB](https://github.com/airbnb/javascript) style guide, tweaked slightly for personal use case. You can click on any rule to view its corresponding eslint page.

There is still testing to be done mind you.

## Plugins
- security
- eslint - recommended
- import (Compat issue, WIP)
- tslint

## Rule changes
Below is a list of the rules either changed, or omitted, with a reason for the change:
### Deprecations and redundancies
- [`no-const-assign`](https://eslint.org/docs/latest/rules/no-const-assign): Typescript checker enforces this by default.
- [`no-new-object`](https://eslint.org/docs/latest/rules/no-new-object) - This rule is deprecated since ESLint v8.50.0, and they suggest using the new [`no-object-constructor`](https://eslint.org/docs/latest/rules/no-object-constructor) rule instead.
- [`prefer-destructuring`](https://eslint.org/docs/latest/rules/prefer-destructuring) - Changed the array options to `false`, as that does seem to bring up some indexing issues.
- [`no-useless-escape`](https://eslint.org/docs/latest/rules/no-useless-escape) - This rule is present in the extension of `eslint:recommended`.
- [`wrap-iife`](https://eslint.org/docs/latest/rules/wrap-iife) - This rule is deprecated since ESLint V8.53.0, and is not a concern when ES6 modules are involved.
- [`no-dupe-class-members`](https://eslint.org/docs/latest/rules/no-dupe-class-members) - This rule is present in the extension of `eslint:recommended`.
- [`no-undef`](https://eslint.org/docs/latest/rules/no-undef) - This rule is present in the extension of `eslint:recommended`.
- [`no-unused-vars`](https://eslint.org/docs/latest/rules/no-unused-vars) - This rule is present in the extension of `eslint:recommended`.
- [`no-case-declarations`](https://eslint.org/docs/latest/rules/no-case-declarations) - This rule is present in the extension of `eslint:recommended`.
- [`camelcase`](https://eslint.org/docs/latest/rules/camelcase) - I opted to ignore this check, as I use my own style conventions when writing, and will have that uploaded somewhere.

### Out of scope rules
The following rules are best handled by formatters like `prettier`, to avoid clashing with external libraries, and to allow some encapsulation.
- [`no-confusing-arrow`](https://eslint.org/docs/latest/rules/no-confusing-arrow)
- [`arrow-body-style`](https://eslint.org/docs/latest/rules/arrow-body-style)
- [`function-paren-newline`](https://eslint.org/docs/latest/rules/function-paren-newline)
- [`space-before-blocks`](https://eslint.org/docs/latest/rules/space-before-blocks)
- [`space-before-function-paren`](https://eslint.org/docs/latest/rules/space-before-function-paren)
- [`arrow-parens`](https://eslint.org/docs/latest/rules/arrow-parens)
- [`template-curly-spacing`](https://eslint.org/docs/latest/rules/template-curly-spacing)
- [`quotes`](https://eslint.org/docs/latest/rules/quotes)
- [`quote-props`](https://eslint.org/docs/latest/rules/quote-props)
- [`implicit-arrow-linebreak`](https://eslint.org/docs/latest/rules/implicit-arrow-linebreak)
- [`no-nested-ternary`](https://eslint.org/docs/latest/rules/no-nested-ternary)
- [`no-mixed-operators`](https://eslint.org/docs/latest/rules/no-mixed-operators)
- [`nonblock-statement-body-position`](https://eslint.org/docs/latest/rules/nonblock-statement-body-position)
- [`brace-style`](https://eslint.org/docs/latest/rules/brace-style)
- [`spaced-comment`](https://eslint.org/docs/latest/rules/spaced-comment)
- Everything in the [Whitespace](https://github.com/airbnb/javascript?tab=readme-ov-file#whitespace) section.

## Compatability
Requires ES2018 support minimum