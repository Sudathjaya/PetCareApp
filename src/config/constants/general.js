export const CAMERA_POSITIONS = {
  BACK: 'back',
  FRONT: 'front',
};

export const MEDIA_TYPES = {
  PHOTO: 'photo',
  VIDEO: 'video',
  MIXED: 'mixed',
};

export const PERMISSIONS = {
  DENIED: 'denied',
  NOT_DETERMINED: 'not-determined',
};

export const STORAGE_KEYS = {
  TOKEN: 'accessToken',
  CURRENT_USER: 'currentUser',
}

export const YEARS = [
  { year: 2009, des: 'Class of 2009' },
  { year: 2010, des: 'Class of 2010' },
  { year: 2011, des: 'Class of 2011' },
  { year: 2012, des: 'Class of 2012' },
  { year: 2013, des: 'Class of 2013' },
  { year: 2014, des: 'Class of 2014' },
  { year: 2015, des: 'Class of 2015' },
  { year: 2016, des: 'Class of 2016' },
  { year: 2017, des: 'Class of 2017' },
  { year: 2018, des: 'Class of 2018' },
  { year: 2019, des: 'Class of 2019' },
  { year: 2020, des: 'Class of 2020' },
  { year: 2021, des: 'Class of 2021' },
  { year: 2022, des: 'Class of 2022' },
  { year: 2023, des: 'Class of 2023' },
  { year: 2024, des: 'Class of 2024' }
]

export const TERM_CONDITIONS = [
  {
    id: 1,
    title: "회원가입약관 *",
    des: `
  제 1 장 : 총칙\n
  제 2 장 : 서비스 이용계약\n
  제 3 장 : 계약당사자의 의무\n
  제 4 장 : 서비스 이용\n
  제 5 장 : 계약해지 및 이용제한\n
  제 6 장 : 기타\n`,
    value: false
  },
  {
    id: 2,
    title: "개인정보 처리∙수집∙이용 및 마케팅 약관 *",
    des: `
      개인정보 처리방침은 RANSSUL (이하 "단체"라 한다)에서 가입절차를 거친 이용자들만 이용 가능한 폐쇄형 서비스를 제공함에 있어, 개인정보를 어떻게 수집·이용·보관·파기하는지에 대한 정보를 담은 방침을 의미합니다. 개인정보 처리방침은 개인정보보호법 등 국내 개인정보 보호 법령을 모두 준수하고 있습니다. 본 개인정보 처리방침에서 정하지 않은 용어의 정의는 서비스 이용약관을 따릅니다.\n
      `,
    value: false
  }
]
export const ALL_AGREED = 'I agree to all of the terms and conditions below.'

export const RATINGS = [
  {name: "All", value: "All"},
  {name: ">4", value: "4"},
  {name: ">3", value: '3'},
  {name: ">2", value: "2"},
  {name: ">1", value: "1"},
];


export const POST_TAG_OPTIONS = [
  { label: '태그 선택', value: '', local: false },
  { label: '블라블라', value: 'BLAH', local: false },
  { label: '주식·투자', value: 'STOCK', local: false },
  { label: '썸·연애', value: 'DATING', local: false },
  { label: '여행·먹방', value: 'TRAVEL', local: false },
  { label: '헬스·다이어트', value: 'FITNESS', local: false },
  { label: '회사·취직', value: 'WORK', local: false },
  { label: '책', value: 'BOOK', local: false },
  { label: '익명게시판', value: 'ANONYMOUS', local: false },
  { label: '수업 같이 들을분', value: 'CLASS', local: false },
  { label: '튜터', value: 'TUTOR', local: false },
  { label: '장보러 가실분', value: 'RIDESHARE', local: false },
];