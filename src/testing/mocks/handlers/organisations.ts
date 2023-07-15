import { rest } from "msw";
import { API_URL } from "@/config/constants";
import { db } from "../db";

const getOrganisationHandler = rest.get(
  `${API_URL}/organisation/:organisationId`,
  (req, res, ctx) => {
    const organisationId = req.params.organisationId as string;

    const organisation = db.organization.findFirst({
      where: {
        id: {
          equals: organisationId
        }
      }
    });

    if (!organisation) {
      return res(ctx.status(404), ctx.json({ mssg: "Not Foud" }));
    }
    return res(ctx.delay(300), ctx.status(200), ctx.json(organisation));
  }
);

export const organisationsHandlers = [getOrganisationHandler];
