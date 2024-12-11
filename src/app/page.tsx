
import { FC } from "react";
import CreatorComponent from "@/components/Creator";
import ProductionComponent from "@/components/Production";
import CourseComponent from "@/components/Course";
import SponsorComponent from "@/components/Sponsor";
import { Creators } from "@/types/creator.types";
import { Production } from "@/types/productions.types";
import { Course } from "@/types/courses.types";
import { Sponsor } from "@/types/sponsors.types";


interface HomeProps{
  creators: Creators[], 
  productions: Production[],
  courses: Course[],
  sponsors: Sponsor[]
}


const Home: FC<HomeProps> = async ()=> {

  const creators = await fetch("http://localhost:8080/api/creators").then((res)=> res.json()).catch((err)=> []);
const productions = await fetch("http://localhost:8080/api/production").then((res)=>res.json()).catch((err)=> []);
const courses = await fetch("http://localhost:8080/api/courses").then((res)=>res.json()).catch((err)=> []);
const sponsors = await fetch("http://localhost:8080/api/sponsor").then((res)=>res.json()).catch((err)=> [])



  return (
   <div className="bg-gray-100 h-screen flex items-center justify-center">

      <h1 className="text-3xl font-bold text-blue-600">Este es el maldito comienzo de creador Militar MX</h1>
      <div className="mb-8">
        <CreatorComponent creators={creators}/>
      </div>
      <div className="mb-8">
        <ProductionComponent productions={productions}/>
      </div>
      <div className="mb-8">
        <CourseComponent courses={courses}/>
      </div>
      <div className="mb-8">
        <SponsorComponent sponsors={sponsors}/>
      </div>
   </div> 
  );
}

export default Home;
