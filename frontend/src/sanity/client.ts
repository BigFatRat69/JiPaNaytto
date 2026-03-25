import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "meg1d88o",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});