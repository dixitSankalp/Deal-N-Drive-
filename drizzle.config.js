/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_hezrOnW79mUB@ep-wild-paper-a5sba1vg-pooler.us-east-2.aws.neon.tech/Deal_N_Drive?sslmode=require",
  },
};
