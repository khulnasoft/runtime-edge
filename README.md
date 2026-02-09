<h1 align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/2096101/235130063-e561514e-1f66-4ff6-9034-70dbf7ca3260.png">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/2096101/235127419-ac6fe609-d0cd-4339-a593-c48305a83823.png">
    <img alt="Edge Runtime" src="https://user-images.githubusercontent.com/2096101/235127419-ac6fe609-d0cd-4339-a593-c48305a83823.png" width="400">
  </picture>
  <br>
  <sub>⚡️ Edge Runtime - Modern Runtime Infrastructure for the Web Platform ⚡️</sub>
</h1>

<p align="center">
  <a href="https://github.com/khulnasoft/runtime-edge/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/khulnasoft/runtime-edge/ci.yml?branch=main&label=Build&logo=github" alt="Build Status">
  </a>
  <a href="https://www.npmjs.com/package/runtime-edge">
    <img src="https://img.shields.io/npm/v/runtime-edge?color=blue&logo=npm" alt="NPM Version">
  </a>
  <a href="https://github.com/khulnasoft/runtime-edge/blob/main/LICENSE.md">
    <img src="https://img.shields.io/github/license/khulnasoft/runtime-edge?color=green&logo=open-source-initiative" alt="License: MIT">
  </a>
  <a href="https://runtime-edge.khulnasoft.app/">
    <img src="https://img.shields.io/badge/docs-online-blue?logo=readme&logoColor=white" alt="Documentation">
  </a>
  <a href="https://github.com/khulnasoft/runtime-edge/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/khulnasoft/runtime-edge?color=orange&logo=github" alt="Contributors">
  </a>
</p>

---

<p align="center">
  <a href="https://runtime-edge.khulnasoft.app/">Documentation</a> •
  <a href="https://runtime-edge.khulnasoft.app/cli">CLI</a> •
  <a href="https://github.com/khulnasoft/runtime-edge/issues">Issues</a> •
  <a href="https://khulnasoft.com">Website</a>
</p>

---

### 🚀 Overview

**Edge Runtime** is a **high-performance**, **standards-compliant** runtime environment for modern web applications. Built by [KhulnaSoft](https://khulnasoft.com), it provides a complete implementation of Web APIs that run seamlessly across edge networks, serverless platforms, and traditional server environments.

The runtime enables developers to write once and deploy anywhere, with full compatibility for:

- **Web Standards APIs** (Fetch, Streams, Web Crypto, URL, etc.)
- **Edge Computing** (Cloudflare Workers, Vercel Edge Functions, Deno Deploy)
- **Server Environments** (Node.js, Bun, traditional servers)
- **Testing & Development** (Jest, Vitest, local development)

---

### 🧩 Core Features

| Component                 | Description                                                     |
| ------------------------- | --------------------------------------------------------------- |
| ⚙️ **Web Standards API**  | Complete implementation of Fetch, Streams, Web Crypto, and more |
| 🌍 **Edge-Native**        | Optimized for edge computing with minimal cold starts           |
| 🔧 **Modular Primitives** | Composable building blocks for custom runtime environments      |
| 🧠 **VM Context**         | Secure execution environment for untrusted code                 |
| 🍪 **Cookie Management**  | Standards-compliant cookie handling for web applications        |
| 🔍 **Request/Response**   | Full-featured HTTP handling with Web API compatibility          |
| 📝 **String Formatting**  | printf-style formatting utilities for logging and debugging     |
| 🧪 **Testing Tools**      | Jest environment and matchers for comprehensive testing         |

---

### 🧰 Quick Start

```bash
# Install the Edge Runtime CLI globally
npm install -g runtime-edge

# Or add to your project
npm install runtime-edge

# Development
runtime-edge dev                    # Start development server
runtime-edge build                  # Build for production

# Testing
runtime-edge test                   # Run tests in Edge Runtime
```

**Basic Usage:**

```typescript
import { EdgeRuntime } from 'runtime-edge'

// Create runtime instance
const runtime = new EdgeRuntime()

// Execute Edge Functions
const result = await runtime.evaluate(`
  // Web APIs available: fetch, Request, Response, URL, etc.
  const response = await fetch('https://api.example.com/data')
  return await response.json()
`)

console.log(result)
```

**With Custom Server:**

```typescript
import { createServer } from 'runtime-edge'

const server = createServer({
  // Your Edge Runtime configuration
  port: 3000,
  handler: async (request) => {
    return new Response('Hello from Edge Runtime!')
  },
})

server.start()
```

---

### 🌐 Package Ecosystem

| Package                                                                                      | Version  | Description                                            |
| -------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------ |
| [`runtime-edge`](https://npmjs.com/package/runtime-edge)                                     | `v4.0.0` | Main runtime package with CLI and server functionality |
| [`@runtime-edge/primitives`](https://npmjs.com/package/@runtime-edge/primitives)             | `v4.0.0` | Core Web API primitives (Fetch, Streams, Crypto, etc.) |
| [`@runtime-edge/vm`](https://npmjs.com/package/@runtime-edge/vm)                             | `v4.0.0` | Secure VM for code execution in Web Standard contexts  |
| [`@runtime-edge/format`](https://npmjs.com/package/@runtime-edge/format)                     | `v4.0.0` | printf-style string formatting utilities               |
| [`@runtime-edge/cookies`](https://npmjs.com/package/@runtime-edge/cookies)                   | `v4.0.0` | Standards-compliant cookie management                  |
| [`@runtime-edge/user-agent`](https://npmjs.com/package/@runtime-edge/user-agent)             | `v4.0.0` | User agent parsing for Edge Runtime                    |
| [`@runtime-edge/jest-environment`](https://npmjs.com/package/@runtime-edge/jest-environment) | `v4.0.0` | Jest testing environment for Edge Runtime              |
| [`@runtime-edge/jest-expect`](https://npmjs.com/package/@runtime-edge/jest-expect)           | `v4.0.0` | Custom Jest matchers for Edge Runtime testing          |
| [`@runtime-edge/ponyfill`](https://npmjs.com/package/@runtime-edge/ponyfill)                 | `v4.0.0` | Polyfills and compatibility layers                     |
| [`@runtime-edge/types`](https://npmjs.com/package/@runtime-edge/types)                       | `v4.0.0` | TypeScript type definitions                            |

---

### 🏗️ Architecture

Edge Runtime is built as a modular monorepo with the following structure:

```
packages/
├── runtime/           # Main CLI and server runtime
├── primitives/        # Core Web API implementations
├── vm/               # Secure execution environment
├── format/           # String formatting utilities
├── cookies/          # Cookie management
├── user-agent/       # User agent parsing
├── jest-environment/ # Testing infrastructure
├── ponyfill/         # Polyfills and compatibility
└── integration-tests/ # Test utilities
```

Each package is independently versioned and published to npm, allowing for flexible dependency management while maintaining API compatibility.

---

### 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/khulnasoft/runtime-edge/blob/main/CONTRIBUTING.md) for details.

```bash
# Clone the repository
git clone https://github.com/khulnasoft/runtime-edge.git
cd runtime-edge

# Install dependencies
pnpm install

# Run tests
pnpm test

# Build all packages
pnpm build

# Start development
pnpm dev
```

---

### 🧑‍🤝‍🧑 Contributors

Thanks to all our amazing contributors! 💜 <a href="https://github.com/khulnasoft/runtime-edge/graphs/contributors"> <img src="https://contrib.rocks/image?repo=khulnasoft/runtime-edge" /> </a>

---

### 📄 License

**Edge Runtime** © [KhulnaSoft](https://khulnasoft.com) — released under the [MIT License](https://github.com/khulnasoft/runtime-edge/blob/main/LICENSE.md).
Authored and maintained by [KhulnaSoft](https://khulnasoft.com) with help from our [community contributors](https://github.com/khulnasoft/runtime-edge/contributors).

---

<p align="center">
  <a href="https://khulnasoft.com">
    <img src="https://img.shields.io/badge/khulnasoft.com-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="KhulnaSoft Website">
  </a>
  <a href="https://github.com/khulnasoft">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://x.com/khulnasoft">
    <img src="https://img.shields.io/badge/follow-%40khulnasoft-1DA1F2?style=for-the-badge&logo=x&logoColor=white" alt="Twitter">
  </a>
</p>

---

### 🪄 What's New in v4.0.0

✅ **Complete Web Standards Compliance** - Full implementation of Fetch, Streams, Web Crypto, URL APIs  
✅ **Modular Architecture** - Independent packages for flexible usage and dependency management  
✅ **Enhanced Performance** - Optimized for edge computing with minimal cold starts  
✅ **Developer Experience** - CLI tools, comprehensive testing utilities, and detailed documentation  
✅ **TypeScript First** - Full type safety across all packages with strict typing  
✅ **Standards Compliant** - Passes Web Platform Tests (WPT) compatibility suite  
✅ **Production Ready** - Used in production by thousands of developers  
✅ **Buffer/SharedArrayBuffer Fixes** - Resolved compatibility issues across all platforms  
✅ **Turborepo Migration** - Updated to v2.0+ configuration for better build performance  
✅ **License Standardization** - Migrated all packages to MIT license for better compatibility
