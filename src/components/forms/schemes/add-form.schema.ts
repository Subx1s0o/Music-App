import { z } from "zod";

const validDomains = ["https://music.youtube.com/"];

export const songSchema = z.object({
  title: z.string().min(1, "Title is required."),
  author: z.string().min(1, "Author is required."),
  url: z
    .string()
    .url("Invalid URL format.")
    .refine(
      (value) => validDomains.some((domain) => value.startsWith(domain)),
      {
        message: "URL must start with YouTube Music domain.",
      }
    ),
});

export type SongFormValues = z.infer<typeof songSchema>;
