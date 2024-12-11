import { Institutions } from "./institutions.types";
import { Sponsor } from "./sponsors.types";
import { Merch } from "./merch.types";
import { Course } from "./courses.types";


//interface de campos para creators
export interface Creators {
   readonly id:  string;
    email: string;
  readonly password: string;
    creatorName: string;
    name?: string;
    images: string[];
    militaryGrade: string;
    institutions: Institutions
    sponsors?: Sponsor[];
    merch?: Merch[];
    courses?: Course[] 
} 
