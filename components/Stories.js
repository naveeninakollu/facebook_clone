import StoryCard from "./StoryCard";
const stories=[
    {
        name:"Naveen Sai",
        src:"/nav1.jpeg",
        profile:"/nav2.jpeg",
    },
    {
        name:"Elon Hemanth",
        src:"/nani1.jpeg",
        profile:"/nani2.jpeg",
    },
    {
        name:"Tejaswi",
        src:"/teju1.jpeg",
        profile:"/teju2.jpeg",
    },
    {
        name:"Sumedh",
        src:"/sumedh1.jpeg",
        profile:"/sumedh2.jpeg",
    },
    {
        name:"Priyanka",
        src:"/pri4.jpeg",
        profile:"/pri3.jpeg",
    },
]
function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story)=>(
                <StoryCard key={story.src} 
                name={story.name} 
                src={story.src} 
                profile={story.profile}
                />
            ))}
        </div>
    )
}

export default Stories
