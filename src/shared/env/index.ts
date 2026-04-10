import z from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string(),
  PAYLOAD_SECRET: z.string(),
});

const env = envSchema.parse(process.env);

export default env;
