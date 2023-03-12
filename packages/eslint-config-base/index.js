module.exports = {
  env: {
    browser: true,
    es2022:  true,
    node:    true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:unicorn/recommended',
    'plugin:tailwindcss/recommended',
    '@unocss',
    'plugin:jsonc/recommended-with-json',
    'plugin:yml/standard',
    'plugin:toml/standard',
    'plugin:markdown/recommended',
  ],
  ignorePatterns: [
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'LICENSE',
    'public',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '!.vscode',
    '!.github',
  ],
  overrides: [
    {
      files: [
        '*.json',
        '*.json5',
        '*.jsonc',
      ],
      parser: 'jsonc-eslint-parser',
    },
    {
      files:  [ 'package.json' ],
      parser: 'jsonc-eslint-parser',
      rules:  {
        'jsonc/sort-keys': [
          'error',
          {
            order: [
              'publisher',
              'name',
              'displayName',
              'type',
              'version',
              'private',
              'packageManager',
              'description',
              'author',
              'license',
              'funding',
              'homepage',
              'repository',
              'bugs',
              'keywords',
              'categories',
              'sideEffects',
              'main',
              'module',
              'files',
              'exports',
              'unpkg',
              'jsdelivr',
              'types',
              'typesVersions',
              'bin',
              'icon',
              'engines',
              'activationEvents',
              'contributes',
              'scripts',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'optionalDependencies',
              'devDependencies',
              'pnpm',
              'overrides',
              'resolutions',
              'husky',
              'simple-git-hooks',
              'lint-staged',
              'eslintConfig',
            ],
            pathPattern: '^$',
          },
          {
            order:       { type: 'asc' },
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
          },
          {
            order: [
              'types',
              'require',
              'import',
            ],
            pathPattern: '^exports.*$',
          },
        ],
      },
    },
    {
      files: [
        '*.yaml',
        '*.yml',
      ],
      parser: 'yaml-eslint-parser',
    },
    {
      files:  [ '*.toml' ],
      parser: 'toml-eslint-parser',
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      globalReturn:  false,
      impliedStrict: true,
      jsx:           false,
    },
    ecmaVersion: 'latest',
    sourceType:  'module',
  },
  plugins: [
    'html',
    'sort-keys-fix',
  ],
  rules: {
    'accessor-pairs': [
      'error',
      {
        enforceForClassMembers: true,
        getWithoutSet:          true,
        setWithoutGet:          true,
      },
    ],
    'array-bracket-newline': [
      'error',
      {
        minItems:  2,
        multiline: true,
      },
    ],
    
    'array-bracket-spacing': [
      'error',
      'always',
      {
        arraysInArrays:  true,
        objectsInArrays: true,
        singleValue:     true,
      },
    ],

    'array-callback-return': 'error',
    
    'array-element-newline': [
      'error',
      'always',
    ],
    
    'arrow-body-style': [
      'error',
      'as-needed',
      { requireReturnForObjectLiteral: false },
    ],
    
    'arrow-parens': [
      'error',
      'as-needed',
      { requireForBlockBody: true },
    ],
    
    'arrow-spacing': [
      'error',
      {
        after:  true,
        before: true,
      },
    ],
    
    'block-scoped-var': 'error',
    
    'block-spacing': [
      'error',
      'always',
    ],
    
    'brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: false },
    ],
    
    camelcase: [
      'error',
      {
        ignoreDestructuring: false,
        ignoreGlobals:       false,
        ignoreImports:       false,
        properties:          'always',
      },
    ],
    
    'capitalized-comments': [
      'error',
      'never',
      {
        ignoreConsecutiveComments: false,
        ignoreInlineComments:      false,
      },
    ],
    
    'class-methods-use-this': [
      'error',
      { enforceForClassFields: false },
    ],
    
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    
    'comma-spacing': [
      'error',
      {
        after:  true,
        before: false,
      },
    ],
    
    'comma-style': [
      'error',
      'last',
    ],
    
    complexity: [
      'error',
      10,
    ],
    
    'computed-property-spacing': [
      'error',
      'never',
      { enforceForClassMembers: true },
    ],
    
    'consistent-return': [
      'error',
      { treatUndefinedAsUnspecified: false },
    ],
    
    'consistent-this': [
      'error',
      'that',
    ],
    
    curly: [
      'error',
      'multi-or-nest',
      'consistent',
    ],
    
    'default-case': 'error',
    
    'default-case-last': 'error',
    
    'default-param-last': 'error',
    
    'dot-location': [
      'error',
      'property',
    ],
    
    'dot-notation': [
      'error',
      { allowKeywords: false },
    ],
    
    'eol-last': [
      'error',
      'always',
    ],
    
    eqeqeq: [
      'error',
      'always',
    ],
    
    'func-call-spacing': [
      'error',
      'never',
    ],
    
    'func-name-matching': [
      'error',
      'always',
      {
        considerPropertyDescriptor:   true,
        includeCommonJSModuleExports: false,
      },
    ],
    
    'func-names': [
      'error',
      'as-needed',
    ],
    
    'func-style': [
      'error',
      'expression',
      { allowArrowFunctions: true },
    ],
    
    'function-call-argument-newline': [
      'error',
      'never',
    ],
    
    'function-paren-newline': [
      'error',
      'multiline-arguments',
    ],
    
    'generator-star-spacing': [
      'error',
      {
        after:  false,
        before: true,
      },
    ],
    
    'grouped-accessor-pairs': [
      'error',
      'getBeforeSet',
    ],
    
    'guard-for-in': 'error',
    
    'id-denylist': 'off',
    
    'id-length': [
      'error',
      {
        max:        64,
        min:        2,
        properties: 'always',
      },
    ],
    
    'id-match': 'off',
    
    'implicit-arrow-linebreak': [
      'error',
      'beside',
    ],
    
    'import/consistent-type-specifier-style': [
      'error',
      'prefer-top-level',
    ],
    'import/dynamic-import-chunkname': [
      'warn',
      {
        importFunctions:        [ 'dynamicImport' ],
        webpackChunknameFormat: '[a-zA-Z0-57-9-/_]+',
      },
    ],
    'import/first':                'error',
    'import/newline-after-import': [
      'error',
      { count: 1 },
    ],
    'import/no-amd':                     'error',
    'import/no-cycle':                   'warn',
    'import/no-empty-named-blocks':      'error',
    'import/no-extraneous-dependencies': [
      'warn',
      {
        bundledDependencies:  false,
        optionalDependencies: false,
        peerDependencies:     false,
      },
    ],
    'import/no-mutable-exports':   'error',
    'import/no-self-import':       'error',
    'import/no-unassigned-import': 'warn',
    'import/order':                [
      'error',
      {
        alphabetize: {
          caseInsensitive: true, order: 'asc', orderImportKind: 'asc',
        },
        warnOnUnassignedImports: true,
      },
    ],
    
    indent: [
      'error',
      2,
    ],
    
    'init-declarations': [
      'error',
      'always',
    ],
    
    'jsx-quotes': [
      'error',
      'prefer-single',
    ],
    
    'key-spacing': [
      'error',
      {
        afterColon:  true,
        align:       'value',
        beforeColon: false,
        mode:        'strict',
      },
    ],
    
    'keyword-spacing': [
      'error',
      {
        after:  true,
        before: true,
      },
    ],
    
    'line-comment-position': [
      'error',
      { position: 'above' },
    ],
    
    'linebreak-style': [
      'error',
      'unix',
    ],
    
    'lines-around-comment': [
      'error',
      {
        afterBlockComment:          false,
        afterLineComment:           false,
        allowArrayEnd:              false,
        allowArrayStart:            true,
        allowBlockEnd:              false,
        allowBlockStart:            true,
        allowClassEnd:              false,
        allowClassStart:            true,
        allowObjectEnd:             false,
        allowObjectStart:           true,
        applyDefaultIgnorePatterns: false,
        beforeBlockComment:         true,
        beforeLineComment:          true,
      },
    ],
    
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: false },
    ],
    
    'logical-assignment-operators': [
      'error',
      'always',
      { enforceForIfStatements: true },
    ],
    
    'max-classes-per-file': [
      'error',
      {
        ignoreExpressions: true,
        max:               3,
      },
    ],
    
    'max-depth': [
      'error',
      3,
    ],
    
    'max-len': [
      'error',
      {
        code:                   128,
        comments:               128,
        ignoreComments:         false,
        ignoreRegExpLiterals:   true,
        ignoreStrings:          true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: false,
        ignoreUrls:             true,
        tabWidth:               2,
      },
    ],
    
    'max-lines': [
      'warn',
      {
        max:            2000,
        skipBlankLines: true,
        skipComments:   true,
      },
    ],
    
    'max-lines-per-function': [
      'warn',
      {
        IIFEs:          true,
        max:            50,
        skipBlankLines: true,
        skipComments:   true,
      },
    ],
    
    'max-nested-callbacks': [
      'warn',
      3,
    ],
    
    'max-params': [
      'warn',
      6,
    ],
    
    'max-statements': [
      'warn',
      50,
      { ignoreTopLevelFunctions: true },
    ],
    
    'max-statements-per-line': [
      'error',
      { max: 1 },
    ],
    
    'multiline-comment-style': [
      'error',
      'starred-block',
    ],
    
    'multiline-ternary': [
      'error',
      'always-multiline',
    ],
    
    'new-cap': [
      'error',
      {
        capIsNew:   true,
        newIsCap:   true,
        properties: true,
      },
    ],
    
    'new-parens': [
      'error',
      'always',
    ],
    
    'newline-per-chained-call': [
      'error',
      { ignoreChainWithDepth: 3 },
    ],
    
    'no-alert': 'error',
    
    'no-array-constructor': 'warn',
    
    'no-await-in-loop': 'warn',
    
    'no-bitwise': 'off',
    
    'no-caller': 'error',
    
    'no-confusing-arrow': [
      'warn',
      {
        allowParens:        true,
        onlyOneSimpleParam: true,
      },
    ],
    
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'error',
        ],
      },
    ],
    
    'no-constant-binary-expression': 'error',
    
    'no-constructor-return': 'error',
    
    'no-continue': 'warn',
    
    'no-div-regex': 'warn',
    
    'no-duplicate-imports': [
      'error',
      { includeExports: true },
    ],
    
    'no-else-return': [
      'error',
      { allowElseIf: true },
    ],
    
    'no-empty-function': [
      'error',
      { allow: [ 'constructors' ] },
    ],
    
    'no-empty-static-block': 'error',
    
    'no-eq-null': 'error',
    
    'no-eval': [
      'error',
      { allowIndirect: true },
    ],
    
    'no-extend-native': 'warn',
    
    'no-extra-bind': 'error',
    
    'no-extra-label': 'error',
    
    'no-extra-parens': [
      'error',
      'all',
      {
        conditionalAssign:                  false,
        enforceForArrowConditionals:        true,
        enforceForFunctionPrototypeMethods: true,
        enforceForNewInMemberExpressions:   true,
        enforceForSequenceExpressions:      false,
        ignoreJSX:                          'multi-line',
        nestedBinaryExpressions:            false,
        returnAssign:                       false,
      },
    ],
    
    'no-floating-decimal': 'error',
    
    'no-implicit-coercion': [
      'error',
      {
        'boolean':                 true,
        disallowTemplateShorthand: false,
        number:                    true,
        string:                    true,
      },
    ],
    
    'no-implicit-globals': [
      'error',
      { lexicalBindings: true },
    ],
    
    'no-implied-eval': 'error',
    
    'no-inline-comments': 'error',
    
    'no-invalid-this': [
      'error',
      { capIsConstructor: false },
    ],
    
    'no-iterator': 'error',
    
    'no-label-var': 'error',
    
    'no-labels': [
      'error',
      {
        allowLoop:   true,
        allowSwitch: true,
      },
    ],
    
    'no-lone-blocks': 'error',
    
    'no-lonely-if': 'error',
    
    'no-loop-func': 'error',
    
    'no-magic-numbers': 'off',
    
    'no-mixed-operators': [
      'error',
      { allowSamePrecedence: true },
    ],
    
    'no-multi-assign': [
      'warn',
      { ignoreNonDeclaration: false },
    ],
    
    'no-multi-spaces': [
      'error',
      { ignoreEOLComments: false },
    ],
    
    'no-multi-str': 'error',
    
    'no-multiple-empty-lines': [
      'error',
      {
        max:    1,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    
    'no-negated-condition': 'error',
    
    'no-nested-ternary': 'error',
    
    'no-new': 'error',
    
    'no-new-func': 'error',
    
    'no-new-native-nonconstructor': 'error',
    
    'no-new-object': 'error',
    
    'no-new-wrappers': 'error',
    
    'no-octal-escape': 'error',
    
    'no-param-reassign': [
      'error',
      { props: true },
    ],
    
    'no-plusplus': [
      'warn',
      { allowForLoopAfterthoughts: true },
    ],
    
    'no-promise-executor-return': 'error',
    
    'no-proto': 'error',
    
    'no-restricted-exports': 'off',
    
    'no-restricted-globals': 'off',
    
    'no-restricted-imports': 'off',
    
    'no-restricted-properties': 'off',
    
    'no-restricted-syntax': 'off',
    
    'no-return-assign': [
      'error',
      'except-parens',
    ],
    
    'no-return-await': 'error',
    
    'no-script-url': 'error',
    
    'no-self-compare': 'error',
    
    'no-sequences': [
      'error',
      { allowInParentheses: false },
    ],
    
    'no-shadow': [
      'error',
      {
        builtinGlobals:         true,
        hoist:                  'all',
        ignoreOnInitialization: true,
      },
    ],
    
    'no-tabs': [
      'error',
      { allowIndentationTabs: false },
    ],
    
    'no-template-curly-in-string': 'error',
    
    'no-ternary': 'off',
    
    'no-throw-literal': 'error',
    
    'no-trailing-spaces': [
      'error',
      {
        ignoreComments: true,
        skipBlankLines: true,
      },
    ],
    
    'no-undef-init': 'warn',
    
    'no-undefined': 'error',
    
    'no-underscore-dangle': [
      'warn',
      {
        allowAfterSuper:           false,
        allowAfterThis:            false,
        allowAfterThisConstructor: false,
        allowFunctionParams:       false,
        enforceInClassFields:      false,
        enforceInMethodNames:      false,
      },
    ],
    
    'no-unmodified-loop-condition': 'error',
    
    'no-unneeded-ternary': [
      'error',
      { defaultAssignment: true },
    ],
    
    'no-unreachable-loop': 'error',
    
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit:    false,
        allowTaggedTemplates: false,
        allowTernary:         false,
        enforceForJSX:        false,
      },
    ],
    
    'no-unused-private-class-members': 'error',
    
    'no-use-before-define': 'error',
    
    'no-useless-call': 'error',
    
    'no-useless-computed-key': 'error',
    
    'no-useless-concat':      'error',
    'no-useless-constructor': 'error',
    'no-useless-rename':      [
      'error',
      {
        ignoreDestructuring: false,
        ignoreExport:        false,
        ignoreImport:        false,
      },
    ],
    'no-useless-return': 'error',
    'no-var':            'error',
    'no-void':           [
      'error',
      { allowAsStatement: false },
    ],
    'no-warning-comments': [
      'error',
      {
        location: 'start',
        terms:    [ 'todo' ],
      },
    ],
    'no-whitespace-before-property':    'error',
    'nonblock-statement-body-position': [
      'error',
      'below',
    ],
    'object-curly-newline': [
      'error',
      {
        minProperties: 3,
        multiline:     true,
      },
    ],
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects:  true,
        objectsInObjects: true,
      },
    ],
    'object-property-newline': 'off',
    'object-shorthand':        [
      'error',
      'always',
      {
        avoidExplicitReturnArrows: true,
        avoidQuotes:               true,
        ignoreConstructors:        true,
      },
    ],
    'one-var': [
      'error',
      'never',
    ],
    'one-var-declaration-per-line': [
      'error',
      'always',
    ],
    'operator-assignment': [
      'error',
      'always',
    ],
    'operator-linebreak': [
      'error',
      'before',
    ],
    'padded-blocks': [
      'error',
      'never',
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next:      [
          'block',
          'block-like',
          'break',
          'cjs-export',
          'class',
          'continue',
          'debugger',
          'default',
          'directive',
          'do',
          'empty',
          'export',
          'for',
          'function',
          'if',
          'iife',
          'multiline-const',
          'multiline-expression',
          'multiline-let',
          'multiline-var',
          'return',
          'switch',
          'throw',
          'try',
          'while',
          'with',
        ],
        prev: '*',
      },
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis:    true,
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring:          'all',
        ignoreReadBeforeAssign: false,
      },
    ],
    'prefer-destructuring':           'off',
    'prefer-exponentiation-operator': 'off',
    'prefer-named-capture-group':     'off',
    'prefer-numeric-literals':        'off',
    'prefer-object-has-own':          'error',
    'prefer-object-spread':           'error',
    'prefer-promise-reject-errors':   [
      'error',
      { allowEmptyReject: false },
    ],
    'prefer-regex-literals': [
      'error',
      { disallowRedundantWrapping: true },
    ],
    'prefer-rest-params': 'error',
    'prefer-spread':      'error',
    'prefer-template':    'error',
    'quote-props':        [
      'error',
      'as-needed',
      {
        keywords:    true,
        numbers:     true,
        unnecessary: true,
      },
    ],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape:           true,
      },
    ],
    radix: [
      'error',
      'as-needed',
    ],
    'require-atomic-updates': 'error',
    'require-await':          'error',
    'require-unicode-regexp': 'error',
    'rest-spread-spacing':    [
      'error',
      'never',
    ],
    semi: [
      'error',
      'never',
      { beforeStatementContinuationChars: 'always' },
    ],
    'semi-spacing': [
      'error',
      {
        after:  false,
        before: false,
      },
    ],
    'semi-style': [
      'error',
      'first',
    ],
    'sort-imports': [
      'error',
      {
        allowSeparatedGroups:  false,
        ignoreCase:            false,
        ignoreDeclarationSort: false,
        ignoreMemberSort:      false,
        memberSyntaxSortOrder: [
          'none',
          'all',
          'multiple',
          'single',
        ],
      },
    ],
    'sort-keys': [
      'warn',
      'asc',
      {
        allowLineSeparatedGroups: false,
        caseSensitive:            true,
        minKeys:                  2,
        natural:                  true,
      },
    ],
    'sort-keys-fix/sort-keys-fix': 'warn',
    'sort-vars':                   [
      'error',
      { ignoreCase: false },
    ],
    'space-before-blocks': [
      'error',
      'always',
    ],
    'space-before-function-paren': [
      'error',
      'always',
    ],
    'space-in-parens': [
      'error',
      'never',
    ],
    'space-infix-ops': [
      'error',
      { int32Hint: false },
    ],
    'space-unary-ops': [
      'error',
      {
        nonwords: true,
        words:    true,
      },
    ],
    'spaced-comment': [
      'error',
      'always',
    ],
    strict: [
      'warn',
      'never',
    ],
    'switch-colon-spacing': [
      'error',
      {
        after:  true,
        before: false,
      },
    ],
    'symbol-description':     'error',
    'template-curly-spacing': [
      'error',
      'always',
    ],
    'template-tag-spacing': [
      'error',
      'always',
    ],

    'unicode-bom': [
      'warn',
      'never',
    ],
    
    'unicorn/filename-case': [
      'warn',
      {
        cases: {
          camelCase:  true,
          pascalCase: true,
        },
      },
    ],
    
    'unicorn/prefer-module': 'warn',
    
    'vars-on-top': 'error',
    
    'wrap-iife': [
      'error',
      'inside',
      { functionPrototypeMethods: true },
    ],

    'wrap-regex':         'error',
    'yield-star-spacing': [
      'error',
      {
        after:  true,
        before: false,
      },
    ],
    yoda: [
      'error',
      'never',
      {
        exceptRange:  true,
        onlyEquality: true,
      },
    ],
  },
}
