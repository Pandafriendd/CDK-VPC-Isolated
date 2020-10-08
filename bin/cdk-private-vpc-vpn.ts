#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkPrivateVpcVpnStack } from '../lib/cdk-private-vpc-vpn-stack';

const app = new cdk.App();
new CdkPrivateVpcVpnStack(app, 'CdkPrivateVpcVpnStack');
