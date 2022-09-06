<h1 align="center">@xrcloud/interfaces</h1>

<div align="center">
  <img src="https://avatars.githubusercontent.com/u/40684200?s=200&v=4" alt="Belivvr Logo" />
</div>

<br>

<div align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
</div>

<br>

---

## Description

XRCloud TypeScript interfaces  

## Install

```console
$ npm install --save-dev @xrcloud/interfaces
$ yarn add --dev @xrcloud/interfaces
$ pnpm add --dev @xrcloud/interfaces
$ bun add --dev @xrcloud/interfaces
```

## Usage

```ts
import type {
  HubsAsset,
  HubsPermission,
  HubsRoom,
  HubsScene,
  Project,
} from '@xrcloud/interfaces/dto'

// ...

class HubsAvatar implements HubsAsset {
  constructor(avatar: HubsAvatar) {
    // ...
  }
}

// ...
```
