import { rest } from "msw";
import { API_URL } from "@/config/constants";

import { authHandlers } from "./auth";
import { jobsHandlers } from "./jobs";
import { organisationsHandlers } from "./organisations";

export const handlers = [
  ...authHandlers,
  ...jobsHandlers,
  ...organisationsHandlers,
  rest.get(`${API_URL}/healthcheck`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ healthy: true }));
  })
];
