import * as aws from "@pulumi/aws";

const vpc = new aws.ec2.Vpc("main-vpc", {
    cidrBlock: "10.0.0.0/16",
    enableDnsHostnames: true,
    tags: { Name: "main-vpc" }
});

# 2021-11-09 - docs: Refactor infrastructure code

# 2021-11-10 - ci: Update deployment pipeline

# 2021-12-29 - ci: Update deployment pipeline

# 2021-12-28 - docs: Cleanup old resources
