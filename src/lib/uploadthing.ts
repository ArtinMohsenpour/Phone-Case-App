import { OurFileRouter } from "@/app/api/auth/[kindeAuth]/uploadthing/core";
import { generateReactHelpers } from "@uploadthing/react";

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();
