import { FC } from "react";
import { Sponsor } from "@/types/sponsors.types";
import { v4 as uuidv4 } from "uuid";

interface SponsorProps{
    sponsors: Sponsor[]
}

const SponsorComponent: FC<SponsorProps> =({sponsors})=>(
    <div>
        <ul>
            {sponsors.map((sponsor)=>(
                <li key={uuidv4()} >
                    <h2>{sponsor.name}</h2>
                    <h2>{sponsor.description} </h2>
                    {/* {sponsor.sponsoredCreators.map((creator)=>(
                        <div key={uuidv4()} >
                            <h3>{creator.name} </h3>
                        </div>
                    ))} */}
                    <h4>{sponsor.clickCounts} </h4>
                </li>
            ))}
        </ul>
    </div>
)


export default SponsorComponent;


