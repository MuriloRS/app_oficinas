import { supabase } from "./supabaseClient";

/**
 * Gets the public URL for an image stored in Supabase Storage
 * @param path - The path to the image in the storage bucket (e.g., "mechanics/123/image.jpg")
 * @param bucket - The bucket name (default: "mechanic_images")
 * @returns The public URL to access the image
 */
export const getSupabaseImageUrl = (
  path: string,
  bucket: string = "mechanic_images"
): string => {
  if (!path) return "";

  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(path.split("mechanics/")[1]);

  return data.publicUrl;
};
