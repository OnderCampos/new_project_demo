import type { Session } from "@new_project_demo/auth";
import type { Database } from "@new_project_demo/db";

export type Context = {
  session: Session | null;
  db: Database;
};
