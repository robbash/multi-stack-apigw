import { SSTConfig } from "sst";
import { Api1 } from "./stacks/1stStack.js";
import { Api2 } from "./stacks/2ndStack.js";

export default {
  config(_input) {
    return {
      name: "multi-stack-apigw",
      region: "ap-southeast-2",
    };
  },
  stacks(app) {
    app.stack(Api1);
    app.stack(Api2);
  }
} satisfies SSTConfig;
