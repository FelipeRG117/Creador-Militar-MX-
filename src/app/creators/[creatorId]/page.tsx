


export default async function creatorSinglePage({params}: {params: {creatorId: string}}){
    const {creatorId} = await params;
    console.log("esto es id", creatorId)

    return(
        <div>
            <h1>Esto es page de creator unico {creatorId}</h1>
        </div>
    )
}

