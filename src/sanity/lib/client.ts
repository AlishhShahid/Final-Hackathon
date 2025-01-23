import { createClient } from "next-sanity";


export const client = createClient({
  projectId: "a5nqv9d2",
  dataset: "production",
  apiVersion:  "2021-08-31",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
