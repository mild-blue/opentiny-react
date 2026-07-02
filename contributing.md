# Contributing

## Branching & pull requests

- Create a feature branch off `main`.
- Open a pull request against `main`.
- Each PR must be reviewed and approved by at least one other person, and all CI checks must pass before it can be merged.

## Development

Requires Node.js `>=22.14.0` and Yarn 1.

```sh
yarn install        # install dependencies
yarn lint           # run eslint
yarn build          # build the library (cjs + es2015)
yarn test           # run the browser test suite
yarn storybook      # run Storybook locally for manual testing
```

Please make sure `lint`, `build`, and `test` pass locally before opening a PR (CI runs the same checks).

## Releases

Once enough changes have accumulated on `main`, we cut a new release and publish a new version of the package to npm.
</content>
