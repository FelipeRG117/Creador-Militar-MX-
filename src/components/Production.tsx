import { FC } from "react";
import { Production } from "@/types/productions.types";
import { v4 as uuidv4 } from "uuid";



interface ProductionProps{
    productions: Production []
}

const ProductionComponent: FC<ProductionProps>=({productions})=>(
    <div>
        <ul>
           {/*  {productions.map((production)=>(
                <li key={uuidv4()} >
                <h3>{production.title}</h3>
                <h3>{production.description}</h3>
                <h3>{production.relatedEntity.type} </h3>
                <h3>{production.views} </h3>
                {production.tags.map((tag)=>(
                    <ul key={uuidv4()} >
                        <li>{tag} </li>
                    </ul>
                ))}
                </li>
            ))} */}
        </ul>
    </div>
)

export default ProductionComponent;