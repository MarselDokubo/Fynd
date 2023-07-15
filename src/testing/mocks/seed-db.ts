import { db } from "./db";
import testData from "../TestData";

export const seedDb = () => {
  const userCount = db.user.count();

  if (userCount > 0) return; // if there are records in db then use those
  testData.users.forEach(user => db.user.create(user));
  testData.organisations.forEach(org => db.organization.create(org));
};
