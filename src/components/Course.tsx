import { FC } from "react";
import { Course } from "@/types/courses.types";
import { v4 as uuidv4 } from "uuid";

interface CourseProps{
    courses: Course[]
}

const CourseComponent: FC<CourseProps> =({courses})=>(
    <div>
        <ul>
            {courses.map((course)=>(
                <li key={uuidv4()} >
                    <h3>{course.title} </h3>
                    <p>{course.description} </p>
                    <p>Category: {course.category} </p>
                    {course.plans.map((plan, index)=>(
                        <div key={index}>
                            <h4>Plan: {plan.planName} </h4>
                            <p>Duration: {plan.duration} </p>
                           <ul>
                           {plan.benefits.map((benf)=>(
                              <li key={uuidv4()} >
                                {benf}
                              </li>
                               
                             
                            ))}
                           </ul>
                        </div>
                    ))} 
                    
                    {course.creators.map((creator)=>(
                        <div key={uuidv4()}>
                            <h3>{creator.creatorName}</h3>
                        </div>
                    ))}    
                     {course.tags.map((tag)=>(
                        <ul key={uuidv4()} >
                            <li>
                            {tag}
                            </li>
                        </ul>
                     ))}   
                     
                </li>
            ))}
        </ul>
    </div>
)

export default CourseComponent; 