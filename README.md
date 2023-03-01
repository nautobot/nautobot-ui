# Nautobot UI

A collection of React components for the Nautobot UI system.

🚧 This UI collection is under very active development but is made public at this time to facilitate validation in [Nautobot](https://github.com/nautobot/nautobot). It should not be considered stable until future notice.

---

## Getting started

This library is based on [Chakra UI](https://chakra-ui.com/) and requires the
following dependencies to be installed in the first place:

```shell
npm i nautobot/nautobot-ui @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

> `nautobot/nautobot-ui` package is coming from a Git repository instead of npm
> registry, so commits, branches and tags can be used for its versioning. You can
> read more about it at:
> [Git URLs as Dependencies](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#git-urls-as-dependencies).

After installing, import `NautobotUIProvider` from `nautobot-ui` package and
with it, wrap the root or other component at the top of application hierarchy:

```tsx
import { NautobotUIProvider } from 'nautobot-ui';

const App = () => <NautobotUIProvider>...</NautobotUIProvider>;
```

If you're building an application with any of the major JavaScript frameworks,
thanks to Nautobot UI being based on Chakra UI, all you need to do to set it up
is follow the instructions at:
[Getting Started](https://chakra-ui.com/getting-started).
**Just remember to use `NautobotUIProvider` instead of `ChakraProvider` or
`ChakraBaseProvider`!**

> `NautobotUIProvider` is built on top of `ChakraBaseProvider` and allows
> extending its theme with `theme` prop. Basically, anything `ChakraBaseProvider`
> can do, `NautobotUIProvider` can do too!

### TypeScript

Nautobot UI supports TypeScript out of the box, which means there are no
additional `@types` packages to install or workarounds to apply. Everything
you import from `nautobot/nautobot-ui` is already correctly typed. However,
to get even better typings of the exclusive Nautobot UI theme, you'll have to
generate them in your project installation. To do this, first install Chakra UI
CLI:

```shell
npm i @chakra-ui/cli --save-dev
```

Next, add the following scripts to `package.json`:

```json
{
  ...
  "scripts": {
    ...
    "gen:theme-typings": "chakra-cli tokens nautobot/nautobot-ui",
    "postinstall": "npm run gen:theme-typings"
  }
}
```

`postinstall` script is a QOL enhancement, which will generate the typings
always after `npm ci` or `npm install` is called. This way your project
contributors don't have to remember to call it everytime they install
dependencies. However, to generate Nautobot UI theme typings on demand, you can
run:

```shell
npm run gen:theme-typings
```

This process is described in more detail at:
[Theme Typings](https://chakra-ui.com/docs/styled-system/advanced-theming#theme-typings).

## Docs

All Nautobot UI components have story previews created with
[Storybook](https://storybook.js.org/). Those stories are the only components'
documentation, so anything you find there, you can also use in your app. To
start the preview app, you'll need to run this npm script first:

```shell
npm run storybook
```

When finished, the Storybook app should automatically open in your browser at
`http://localhost:6006/`.
