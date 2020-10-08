import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2'
import {SubnetType} from "@aws-cdk/aws-ec2";

export class CdkPrivateVpcVpnStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "test_vpc", {
      cidr: '10.34.30.0/23',
      //natGateways: 0,
      subnetConfiguration:[{
        subnetType: SubnetType.ISOLATED,
        name: "pri1",
        cidrMask: 25
      }, {
        subnetType: SubnetType.ISOLATED,
        name: "pri2",
        cidrMask: 25
      }
    ]
    })
  }
}
