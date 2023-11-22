import {
  InstanceClass,
  InstanceSize,
  InstanceType,
  LaunchTemplate,
  MachineImage,
} from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

/**
 * @export
 * @class
 */
export class EC2LaunchTemplate extends Construct {
  /**
   * @param {Construct} scope
   * @param {string} id
   */
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new LaunchTemplate(this, 'EC2LaunchTemplate', {
      launchTemplateName: 'github-self-hosted-runner-ec2-template',
      instanceType: InstanceType.of(
        InstanceClass.STANDARD3,
        InstanceSize.MICRO
      ),
      machineImage: MachineImage.latestAmazonLinux2(),
    });
  }
}
