# OpenTiny React component

## About

This package is a thin wrapper around [OpenTiny](https://github.com/mild-blue/opentiny) — the MIT-licensed,
community-maintained fork of TinyMCE — to make it easier to use in a React application. It is published on npm as
[`opentiny-react`](https://www.npmjs.com/package/opentiny-react) and works as a drop-in replacement for
`tinymce-react`.

* For editor documentation, see the [OpenTiny documentation](https://opentiny.mild.blue/).
* For integration options, see [OpenTiny integrations](https://opentiny.mild.blue/opentiny/latest/integrations/).

> **A note on naming:** you will still find `tinymce` in identifiers, file names, and APIs across this package and
> OpenTiny itself (e.g. the `tinymce.min.js` bundle, `tinymceScriptSrc`, `TinyMCE` types). That is expected: OpenTiny
> forked TinyMCE, and renaming every internal occurrence is a large, gradual effort that is not worth breaking
> consumers over. The project, the npm packages, and the documentation are OpenTiny; some internal names simply lag
> behind.

## Versioning and releasing

Releases are driven by GitHub releases: creating a release in this repository triggers the `npm-publish.yml`
workflow, which builds the package, sets the package version from the latest git tag, and publishes
`opentiny-react` to the public npm registry. The `version` field committed in `package.json` is **not** meaningful —
it is overwritten at publish time from the release tag.

This package pins an exact [`opentiny`](https://github.com/mild-blue/opentiny) version in its dependencies.
**After every `opentiny` release, update that pin here and create a new `opentiny-react` release** so that
downstream applications can pick up both packages together.

### Issues

Have you found an issue with `opentiny-react`, or do you have a feature request? Open an
[issue](https://github.com/mild-blue/opentiny-react/issues) or submit a
[pull request](https://github.com/mild-blue/opentiny-react/pulls).
*Note: for issues concerning the editor itself, please use the [OpenTiny repository](https://github.com/mild-blue/opentiny).*
