type Users = {
  id: number;
  name: string;
  imageUrl: string;
  deleted: boolean;
  firstName: string;
  mailAddress: string;
  password: string;
  firstNameKana: string;
  lastName: string;
  lastNameKana: string;
  birthY: string;
  birthM: string;
  birthD: string;
  passwordConfirm: string;
};

type Tour = {
  id: number;
  img1: string;
  img2: string;
  img3: string;
  abroad: string;
  areaCode: string;
  area: string;
  countryCode: string;
  country: string;
  cityCode: string;
  city: string;
  tourName: string;
  price: number;
  description: string;
  meetingPlace: string;
  times: number;
  minPeople: number;
  content1: string;
  content2: string;
  content3: string;
  recommend: boolean;
  tourDate?: string;
  startTime?: number;
  numberOfPeople?: number;
};

export type { Users, Tour };
