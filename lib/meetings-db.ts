import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-09-09',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of new Primary president' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: "In Remembrance of Thy Suffering" },
    speakers: [
      { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Youth Choir', topic: '', type: 'musical-number' }
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
    announcements: ['Ward temple night: May 10']
  },
  {
    id: 2,
    date: '2026-09-16',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Squire',
    openingHymn: { number: 1002, title: 'When the Savior Comes Again' },
    openingPrayer: 'Sister Wood',
    wardBusiness: [{ description: 'none' }],
    stakeBusiness: false,
    sacramentHymn: { number: 1007, title: "As Bread is Broken" },
    speakers: [
      { name: 'Sister Johnson', topic: 'Come Unto Christ', type: 'speaker' },
      { name: 'Brother Wilson', topic: 'Come Unto Christ', type: 'speaker' }
    ],
    closingHymn: { number: 1018, title: 'Come.Lord Jesus' },
    closingPrayer: 'Sister Yates',
    announcements: ['Please write the missionaries', 'Youth activity: October 15']
    },
  {
    id: 3,
    date: '2026-09-23',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 1003, title: 'It is Well with My Soul' },
    openingPrayer: 'Brother Adams',
    wardBusiness: [{ description: 'none' }],
    stakeBusiness: true,
    sacramentHymn: { number: 1006, title: "Think a Sacred Song" },
    speakers: [
      { name: 'Brother Habit', topic: 'Service Missionaries', type: 'speaker' },
      { name: 'Ward Choir', topic: '', type: 'musical-number' }
    ],
    closingHymn: { number: 1038, title: 'The Lords My Shepherd' },
    closingPrayer: 'Brother Williams',
    announcements: ['None']
    },
  {
    id: 4,
    date: '2026-09-30',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Banner',
    openingHymn: { number: 1004, title: 'Can You Count the Stars in Heaven' },
    openingPrayer: 'Sister Cowdry',
    wardBusiness: [{ description: 'Sustaining of multiple callings' }],
    stakeBusiness: false,
    sacramentHymn: { number: 143, title: "Help Us Remember" },
    speakers: [
      { name: 'Brother Tyson', topic: 'Ministering', type: 'speaker' },
      { name: 'Sister Taylor', topic: 'Youth Ministering', type: 'speaker' }
    ],
    closingHymn: { number: 1208, title: 'Go Tell it on the Mountain' },
    closingPrayer: 'Sister Drean',
    announcements: ['Ward temple night: June 10', 'Youth baptisms: June 15' ]
  },
  {
    id: 5,
    date: '2026-10-04',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Brother Squire',
    openingHymn: { number: 1003, title: 'It is Well with My Soul' },
    openingPrayer: 'Sister denim',
    wardBusiness: [{ description: 'Sustaining of multiple callings' }],
    stakeBusiness: false,
    sacramentHymn: { number: 1008, title: "Bread of Life, Living Water" },
    speakers: [
      { name: '', topic: '', type: 'none' },
    ],
    closingHymn: { number: 1020, title: 'Softly and Tenderly Jesus is Calling' },
    closingPrayer: 'Sister Paul',
    announcements: ['Ward temple night: June 10', 'Youth baptisms: June 15']
  },
  {
    id: 6,
    date: '2026-09-20',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Squire',
    openingHymn: { number: 1003, title: 'It is Well with My Soul' },
    openingPrayer: 'Sister denim',
    wardBusiness: [{ description: 'Sustaining of multiple callings' }],
    stakeBusiness: false,
    sacramentHymn: { number: 1008, title: "Bread of Life, Living Water" },
    speakers: [
      { name: '', topic: '', type: 'none' },
    ],
    closingHymn: { number: 1020, title: 'Softly and Tenderly Jesus is Calling' },
    closingPrayer: 'Sister Drean',
    announcements: ['Ward temple night: June 10', 'Youth baptisms: June 15']
  }
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter(m => m.date === date);
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find(m => m.id === id) ?? null;
}