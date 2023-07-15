import { worker } from "./browser";
import { server } from "./server";
import { IS_SERVER } from "../../config/constants";
import { API_URL } from "../../config/constants";
import { seedDb } from "./seed-db";
const initialiseMocks = () => {
  if (IS_SERVER) {
    server.listen();
  } else {
    worker.start();
  }
  seedDb();
};
initialiseMocks();
