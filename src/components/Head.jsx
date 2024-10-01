export default function Head(props) {

    const {data} = props

    return(
        <div className="imageContainer">
                {data.media_type === "image" ?(
                <img src={data.hdurl} 
                alt={data.title || 'bg-img'}
                className="bgImage" />) : (
                <iframe title={data.title}
                src={data.url}
                gesture="media"
                allow="encypted-media"
                allowFullScreen
                className="bgVideo" />

                )
                }
        </div>
   
        
    
    
    )
}