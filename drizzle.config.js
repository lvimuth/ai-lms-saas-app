import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:dCZTx5S9nmLD@ep-icy-glade-a5fpd83c.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
});
