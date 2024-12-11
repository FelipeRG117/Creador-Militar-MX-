import { Creators } from "./creator.types";



//interface to sponsors 
export interface Sponsor{
   readonly id: string;
    name: string;
    imgs: string[];
    website: string;
    description: string;
   readonly sponsoredCreators: Creators[];
    clickCounts?: number;
    isActive: boolean; 
    createdAt: string;
    updateAt: string;
}

