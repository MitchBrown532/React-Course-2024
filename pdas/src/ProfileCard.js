// Using argument destructuring is profressional convention
// Javascript feature - not exclusive to React
// example: passing { title, handle } rather than passing entire props object

function ProfileCard({ title, handle }){
    
    //const title = props.title
    //const handle = props.handle

    //const { title, handle } = props


    return(
        <div>
            <div>The title is {title}</div>
            <div>The handle is {handle}</div>
        </div>
    )
}

export default ProfileCard;