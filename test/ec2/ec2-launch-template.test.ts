import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { EC2LaunchTemplate } from '../../src';

let app: App;
let stack: Stack;

describe('Github Runner EC2 Launch Tempate', () => {
  beforeEach(() => {
    app = new App();
    stack = new Stack(app, 'TestStack');
  });

  it('launch Template validation test', () => {
    new EC2LaunchTemplate(stack, 'GithubRunnerEC2LaunchTemplate');

    const template = Template.fromStack(stack);

    expect(template.toJSON()).toMatchSnapshot();
  });

  it('should have One Launch Template', () => {
    new EC2LaunchTemplate(stack, 'GithubRunnerEC2LaunchTemplate');

    const template = Template.fromStack(stack);

    template.resourceCountIs('AWS::EC2::LaunchTemplate', 1);
  });
});
