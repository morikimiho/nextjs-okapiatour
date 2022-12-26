import { type } from "os";

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
  areaId: number;
  countryCode: string;
  country: string;
  cityCode: string;
  city: string;
  prefecture: string;
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
  total: number;
  winterplan:boolean;
};

type Cart = {
  tours: Array<Tour>;
  userId: number;
  id: number;
};

type Comment = {
  id: number;
  tourid: number;
  name: string;
  text: string;
  date: string;
};

type Order = {
  id: number;
  rsNumber: string;
  tours: Array<Tour>;
  userId: number;
};

type Info = {
  id: number;
  date: string;
  topic: string;
  content:string;
  src:string;
  bold: boolean;
}
type Abroad = "abroad" | "domestic" | "";
type Prefecture = "osk" | "";
type Area = "eu" | "asi" | "northame" | "oce" | "southame" | "af" | "";
type Country =
  | "fr"
  | "ita"
  | "ko"
  | "indo"
  | "ame"
  | "sp"
  | "taiwa"
  | "aus"
  | "phi"
  | "bra"
  | "egy"
  | "";
type City = "mila" | "vene" | "pari" | "bal" | "san" | "mar" | "";

type Contact={
  question:string;
  description:string;
  answer:string
}

export type {
  Users,
  Tour,
  Cart,
  Abroad,
  Prefecture,
  Area,
  Country,
  City,
  Comment,
  Order,
  Info,
  Contact
};
