import { Creators } from "./creator.types";



//interface to course
export interface Plan {
    planName: string;
    price: number;
    duration?: string;
    benefits: string[];
}

export interface Course {
    id: string; 
    title: string;
    description: string;
    category: string; 
    image?: string[];
    videos?: string[], 
    plans: Plan[];
    creators: Creators[];
    tags: string[];
    isActive: boolean;
    createdAt: string; 
    updateAt: string;

}