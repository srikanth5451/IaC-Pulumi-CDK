import * as aws from "@pulumi/aws";

export function createS3Bucket(name: string) {
    return new aws.s3.Bucket(name, {
        acl: "private",
        versioning: { enabled: true }
    });
}
