module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/babel",
        "prettier/react",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
};