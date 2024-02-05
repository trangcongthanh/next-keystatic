import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../keystatic/configs";

export const { POST, GET } = makeRouteHandler({
  config,
});
