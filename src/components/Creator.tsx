import { FC} from "react";
import { Creators } from "@/types/creator.types";
import { v4 as uuidv4 } from "uuid";

interface CreatorProps{
    creators: Creators[];
}


const CreatorComponent: FC<CreatorProps> = ({creators})=>(
    
    <div>
        <ul>
            {creators.map((creator)=>(
                <li key={uuidv4()} >
                <h3>{creator.militaryGrade} </h3>
                <h3>{creator.creatorName} </h3>
                <p>ESTO ES NAME MAMPO: {creator.institutions.name} </p>
                {creator.sponsors?.map((sponsor, index)=>(
                    <ul key={index}>
                        <li>
                            {sponsor.name}
                        </li>
                    </ul>
                ))}

                {creator.courses?.map((course)=>(
                    <ul key={uuidv4()}>
                        <li>{course.title} </li>
                        <li>{course.category} </li>
                    </ul>
                ))}
                </li>
            ))}
        </ul>
    </div>
)

export default CreatorComponent; 
