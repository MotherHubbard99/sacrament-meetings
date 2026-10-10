export type MeetingType =
    | 'testimony'
    | 'regular'
    | 'stake'
    | 'general'


export interface SacramentMeeting {
  id: number;
  date: string;
  meetingType: MeetingType;
  presiding: string;
  conducting: string;

  announcements: string[] | string | null;

  openingHymn: string;
  openingPrayer: string;

  wardBusiness: string | null;

  stakeBusiness: boolean;

  sacramentHymn: string;

  speakers: string[] | string | null;

  closingHymn: string;
  closingPrayer: string;
}
