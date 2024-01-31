#!/usr/bin/env bash

GIT_V_TAG=0.1.1 cargo build && RUST_BACKTRACE=full ./target/debug/runtime-edge "$@" start --main-service ./examples/main --event-worker ./examples/event-manager
#GIT_V_TAG=0.1.1 cargo build && RUST_BACKTRACE=full ./target/debug/runtime-edge "$@" start --main-service ./main.eszip --main-entrypoint file:///Users/lakshanperera/workspace/runtime-edge/examples/main/index.ts --event-worker ./event-manager.eszip --events-entrypoint file:///Users/lakshanperera/workspace/runtime-edge/examples/event-manager/index.ts
