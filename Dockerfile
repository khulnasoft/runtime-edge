# syntax=docker/dockerfile:1.4
FROM rust:1.74.1-bookworm as builder
ARG TARGETPLATFORM
ARG GIT_V_VERSION
RUN apt-get update && apt-get install -y llvm-dev libclang-dev clang cmake
WORKDIR /usr/src/runtime-edge
RUN --mount=type=cache,target=/usr/local/cargo/registry,id=${TARGETPLATFORM} \
    cargo install cargo-strip
COPY . .
RUN --mount=type=cache,target=/usr/local/cargo/registry,id=${TARGETPLATFORM} --mount=type=cache,target=/usr/src/runtime-edge/target,id=${TARGETPLATFORM} \
    GIT_V_TAG=${GIT_V_VERSION} cargo build --release && \
    cargo strip && \
    mv /usr/src/runtime-edge/target/release/runtime-edge /root


FROM debian:bookworm-slim
RUN apt-get update && apt-get install -y libssl-dev && rm -rf /var/lib/apt/lists/*
RUN apt-get remove -y perl && apt-get autoremove -y
COPY --from=builder /root/runtime-edge /usr/local/bin/runtime-edge
ENTRYPOINT ["runtime-edge"]
