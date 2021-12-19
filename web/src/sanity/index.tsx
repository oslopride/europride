import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import projectId from "../utils/projectId";

export const previewMode = process.env.SANITY_PREVIEW === "true";
if (previewMode) {
  console.warn("YOU ARE IN PREVIEW MODE");
}

export function isEmptyResult(result: object | null): boolean {
  if (result === null) return true;
  return Object.keys(result).length === 0;
}

export const PROJECT_ID = projectId;
export const DATASET = process.env.SANITY_STUDIO_API_DATASET || "production";

const configuredSanityClient = sanityClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: "2021-08-31",
  useCdn: !previewMode,
  withCredentials: previewMode,
});

const builder = imageUrlBuilder(configuredSanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export default configuredSanityClient;
