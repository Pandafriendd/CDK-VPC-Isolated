import * as cdk from '@aws-cdk/core';
import * as ec2 from "@aws-cdk/aws-ec2";
import {namespace} from "../bin/utils";
import {SubnetType} from "@aws-cdk/aws-ec2";

export class NetworkStack extends cdk.Stack {
    public readonly vpc: ec2.Vpc;
    public readonly dmzSubnets: ec2.ISubnet[];

    constructor(scope: cdk.Construct, id: string, props: cdk.StackProps) {
        super(scope, id, props);

        const availabilityZones = this.availabilityZones;

        // this.vpc = new ec2.Vpc(this, `${namespace}-vpc`, {
        //     cidr: '10.34.30.0/23',
        //     subnetConfiguration: [],
        //     vpnConnections: {
        //         dynamic: { // Dynamic routing (BGP)
        //             ip: '1.2.3.4'
        //         },
        //         static: { // Static routing
        //             ip: '4.5.6.7',
        //             staticRoutes: [
        //                 '192.168.10.0/24',
        //                 '192.168.20.0/24'
        //             ]
        //         }
        //     }
        // });

        this.vpc = new ec2.Vpc(this, "VPC", {
            cidr: '10.34.30.0/23',
            natGateways: 0,
            subnetConfiguration: [{
                subnetType: SubnetType.PRIVATE,
                name: 'Private1',
                cidrMask: 25
            },{
                subnetType: SubnetType.PRIVATE,
                name: 'Private2',
                cidrMask: 25
            }]
        });

        // const subnetDmzAz1 = new ec2.PrivateSubnet(this, `${namespace}-subnet-dmz-az1`, {
        //     availabilityZone: availabilityZones[0],
        //     cidrBlock: '10.34.30.0/25',
        //     vpcId: this.vpc.vpcId
        // });
        //
        // const subnetDmzAz2 = new ec2.PrivateSubnet(this, `${namespace}-subnet-dmz-az2`, {
        //     availabilityZone: availabilityZones[1],
        //     cidrBlock: '10.34.30.128/25',
        //     vpcId: this.vpc.vpcId
        // });
        //
        // this.vpc.publicSubnets.push(subnetDmzAz1);

        // this.vpc.addVpnConnection(`${namespace}-vpn-connection`, {
        //     asn: 65000,
        //     staticRoutes: ['0.0.0.0/0'],
        //     ip: '64.156.167.204'
        // });

        // const vpnGateway = new ec2.CfnVPNGateway(this, `${namespace}-vpn-gateway`, {
        //     type: "ipsec.1"
        // });
        //
        // const vpcGatewayAttachment = new ec2.CfnVPCGatewayAttachment(this, `${namespace}-vpc-gateway-attachment`, {
        //     vpcId: this.vpc.vpcId,
        //     vpnGatewayId: vpnGateway.ref
        // });
        //
        // const customerGateway = new ec2.CfnCustomerGateway(this, `${namespace}-customer-gateway`, {
        //     bgpAsn: 65000,
        //     ipAddress: '64.156.167.204',
        //     type: 'ipsec.1'
        // });
        //
        // const vpnConnection = new ec2.CfnVPNConnection(this, `${namespace}-vpn-connection`, {
        //     type: 'ipsec.1',
        //     customerGatewayId: customerGateway.ref,
        //     staticRoutesOnly: true,
        //     vpnGatewayId: vpnGateway.ref,
        //     vpnTunnelOptionsSpecifications: [
        //         {
        //             preSharedKey: "12345678",
        //             // tunnelInsideCidr: '169.254.6.0/30'
        //         },
        //         {
        //             preSharedKey: '87654321',
        //             // tunnelInsideCidr: '169.254.7.0/30'
        //         }
        //     ]
        // });
        //
        // const vpnConnectionRoute = new ec2.CfnVPNConnectionRoute(this, `${namespace}-vpn-connection-route`, {
        //     destinationCidrBlock: '0.0.0.0/0',
        //     vpnConnectionId: vpnConnection.ref
        // });

        // const defaultRouteOptions: ec2.AddRouteOptions = {
        //     destinationCidrBlock: '0.0.0.0/0',
        //     routerType: ec2.RouterType.GATEWAY,
        //     routerId: vpnGateway.ref
        // };


        // const defaultRouteDmzAz1 = new ec2.CfnRoute(this, `${namespace}-default-route-dmz-az1`, {
        //     destinationCidrBlock: '0.0.0.0/0',
        //     routeTableId: subnetDmzAz1.routeTable.routeTableId,
        //     gatewayId: vpnGateway.ref
        // });
        //
        // defaultRouteDmzAz1.addDependsOn(vpcGatewayAttachment);

        // subnetDmzAz1.addRoute(`${namespace}-dmz-az1-default-route`, defaultRouteOptions)



        // const defaultRouteDmzAz2 = new ec2.CfnRoute(this, `${namespace}-default-route-dmz-az2`, {
        //     destinationCidrBlock: '0.0.0.0/0',
        //     routeTableId: subnetDmzAz2.routeTable.routeTableId,
        //     gatewayId: vpnGateway.ref
        // });
        //
        // defaultRouteDmzAz2.addDependsOn(vpcGatewayAttachment);

        // subnetDmzAz2.addRoute(`${namespace}-dmz-az2-default-route`, defaultRouteOptions)

        // const subnetBastion = new ec2.PrivateSubnet(this, `${namespace}-subnet-bastion`, {
        //     availabilityZone: availabilityZones[0],
        //     cidrBlock: '10.34.31.128/26',
        //     vpcId: this.vpc.vpcId
        // });
        //
        // const defaultRouteBastion = new ec2.CfnRoute(this, `${namespace}-default-route-bastion`, {
        //     destinationCidrBlock: '0.0.0.0/0',
        //     routeTableId: subnetBastion.routeTable.routeTableId,
        //     gatewayId: vpnGateway.ref
        // });
        //
        // defaultRouteBastion.addDependsOn(vpcGatewayAttachment);

        // subnetBastion.addRoute(`${namespace}-bastion-default-route`, defaultRouteOptions)



        //this.dmzSubnets = [subnetDmzAz1, subnetDmzAz2];
    }
}
