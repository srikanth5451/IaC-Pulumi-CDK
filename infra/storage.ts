import * as aws from "@pulumi/aws";

export function createS3Bucket(name: string) {
    return new aws.s3.Bucket(name, {
        acl: "private",
        versioning: { enabled: true }
    });
}

# 2021-12-06 - feat: Implement S3 storage module

# 2021-08-09 - refactor: Cleanup old resources
