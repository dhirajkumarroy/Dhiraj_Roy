import {
  createSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";

export const alt =
  "Dhiraj Roy — Full Stack & Android App Developer portfolio";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function TwitterImage() {
  return createSocialImage();
}
