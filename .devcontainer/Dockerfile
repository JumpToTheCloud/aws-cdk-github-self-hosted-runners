ARG VARIANT="20-bullseye"

FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# This section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends bash-completion \
    && apt-get install -y gnupg software-properties-common \
    && apt-get install python3-pip -y

RUN pip install mkdocs \
    pip install mkdocs-material \
    pip install mike 

RUN npm install -g aws-cdk
RUN npm i -g aws-cdk-local
RUN pip install awscli-local