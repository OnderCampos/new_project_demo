import { createAuth } from "@new_project_demo/auth";
import { createDb } from "@new_project_demo/db";

import { ENV } from "./env.server";

export const db = createDb(ENV);
export const auth = createAuth(ENV, db);
