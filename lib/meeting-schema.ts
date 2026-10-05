import { z } from "zod";

const optionalString = z
  .string()
  .transform((val) => (val === "" ? undefined : val))
  .optional();

export const MeetingFormSchema = z.object({
  date: z.string().min(1, "Date is required"),
  meetingType: z.string().min(1, "Meeting type is required"),
  presiding: optionalString,
  conducting: optionalString,
  announcements: optionalString,
  openingHymn: optionalString,
  openingPrayer: optionalString,
  wardBusiness: optionalString,
  stakeBusiness: optionalString,
  sacramentHymn: optionalString,
  speakers: optionalString,
  closingHymn: optionalString,
  closingPrayer: optionalString,
});
