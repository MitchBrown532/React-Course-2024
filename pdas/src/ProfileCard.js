// Using argument destructuring is profressional convention
// Javascript feature - not exclusive to React
// example: passing { title, handle } rather than passing entire props object

function ProfileCard({ title, handle, image }){

    return(
        <div className = "card" >

            <div className = "card-iamge" >
                <figure>
                    <img src={image} alt="pda logo" />
                </figure>
            </div>

            <div className = "card-content">
                <div className = "media-content">
                    <p className = "title is-4">{title}</p>
                    <p className = "subtitle is-6">{handle}</p>
                </div>
            </div>
            
        </div>
    )
}

export default ProfileCard;