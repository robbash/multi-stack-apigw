import { StackContext, ApiGatewayV1Api } from "sst/constructs";

export function Api1({ stack }: StackContext) {
  const api = new ApiGatewayV1Api(stack, "api", {
    routes: {
      "GET /v1/todo": "packages/functions/src/lambda.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  return { api };
}
