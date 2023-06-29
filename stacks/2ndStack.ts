import { RestApi } from "aws-cdk-lib/aws-apigateway";
import { StackContext, ApiGatewayV1Api, use } from "sst/constructs";
import { Api1 } from "./1stStack.js";

export function Api2({ stack }: StackContext) {
  const { api } = use(Api1);

  const restApi = RestApi.fromRestApiAttributes(stack, "api", {
    restApiId: api.cdk.restApi.restApiId,
    rootResourceId: api.cdk.restApi.restApiRootResourceId,
  });
  const v1 = restApi.root.resourceForPath("/v1");

  new ApiGatewayV1Api(stack, "second-api", {
    cdk: {
      restApi,
      importedPaths: { "/v1": v1.resourceId },
    },
    routes: {
      "GET /v1/todo-list": "packages/functions/src/todo.handler",
    },
  });
}
