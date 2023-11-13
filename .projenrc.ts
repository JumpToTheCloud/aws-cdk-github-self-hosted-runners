import { ReleasableCommits, awscdk } from 'projen';
import { TrailingComma } from 'projen/lib/javascript';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Jump to the Cloud',
  authorAddress: 'antonio.marquez@jumptothecloud.tech',
  cdkVersion: '2.103.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: '@jttc/aws-cdk-github-self-hosted-runners',
  projenrcTs: true,
  constructsVersion: '10.3.0',
  repositoryUrl:
    'git@github.com:JumpToTheCloud/aws-cdk-github-self-hosted-runners.git',
  prettier: true,
  keywords: ['aws', 'cdk', 'codestarconnection'],
  prettierOptions: {
    settings: {
      trailingComma: TrailingComma.ES5,
      singleQuote: true,
      bracketSpacing: true,
      semi: true,
    },
  },
  release: false,
  jestOptions: {
    jestConfig: {
      verbose: true,
    },
  },
  devContainer: true,

  releasableCommits: ReleasableCommits.featuresAndFixes(),

  releaseFailureIssue: true,

  github: true,
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: ['commitizen', 'cz-customizable'],
  packageName:
    '@jttc/aws-cdk-github-self-hosted-runners' /* The "name" in package.json. */,
});

project.addScripts({
  commit: './node_modules/cz-customizable/standalone.js',
});

project.github?.mergify?.addRule({
  name: 'Automate upgrade packages',
  actions: {
    label: {
      add: ['upgraded'],
    },
    ['delete_head_branches']: {},
    queue: {
      method: 'squash',
      name: 'default',
    },
  },
  conditions: [
    'label=upgraded',
    '-label~=(do-not-merge)',
    'status-success=build',
    'status-success=package-js',
  ],
});

project.github?.mergify?.addRule({
  name: 'Automatatic merge with review label',
  actions: {
    ['delete_head_branches']: {},
    queue: {
      method: 'squash',
      name: 'default',
    },
  },
  conditions: [
    'label=reviewed',
    '-label~=(do-not-merge)',
    'status-success=build',
    'status-success=package-js',
  ],
});

project.synth();
