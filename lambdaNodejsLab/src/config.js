// Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights reserved.

module.exports = {
  // STUDENT TODO 1: Set the region (example: 'us-west-2')
  region: 'us-west-2',
  // STUDENT TODO 2: Set the bucket names (created by running 'grunt createBuckets')
  inputBucket: 'march-28-2018-inputbucket',
  outputBucket: 'march-28-2018-outputbucket',
  // STUDENT TODO 3: Set the ARN of the Lambda function (starts with arn:aws:lambda)
  lambdaARN: 'arn:aws:lambda:us-west-2:382220687026:function:LambdaTransformer'
}


/*
aws s3 cp --source-region=us-west-2 s3://us-west-2-aws-training/awsu-ilt/AWS-100-DEV/v2.1/binaries/input/lab-6-lambda/DrugAdverseEvents_September.txt s3://march-28-2018-inputbucket/DrugAdverseEvents_September.txt
*/
