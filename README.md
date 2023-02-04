![tests](https://github.com/alexandrupero/alexandrupero.github.io/actions/workflows/main.yaml/badge.svg)

## Open-wc Starter App

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

## Quickstart

To get started, you will need [asdf](https://asdf-vm.com/), or manually install the node version in `.tool-versions`

```sh
asdf install
```

Enable [corepack](https://nodejs.org/dist/latest/docs/api/corepack.html)

```sh
corepack enable
```

Install node packages using [ni](https://github.com/antfu/ni) or yarn

```sh
npm i -g @antfu/ni # install ni
ni --frozen
```

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project
