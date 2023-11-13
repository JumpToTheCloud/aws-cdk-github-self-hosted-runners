import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Antonio Márquez Pérez',
  authorAddress: 'antonio.marquez@jumptothecloud.tech',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'aws-cdk-github-self-hosted-runners',
  projenrcTs: true,
  repositoryUrl: 'git@github.com:JumpToTheCloud/aws-cdk-github-self-hosted-runners.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();