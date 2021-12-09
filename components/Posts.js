import {useCollection} from "react-firebase-hooks/firestore"
import Post from "./Post"
import {db} from "../firebase"
function Posts({posts}) {
    const [realtimePosts]=useCollection(
        db.collection("posts").orderBy("timestamp", "desc"))
    
    return (
        <div>
            {
          
            realtimePosts?.docs.map((post) =>(
                    <Post
                    Key ={post.id}
                    name={post.data().name}
                    message={post.data().message}
                    email={post.data().email}
                    timestamp={post.data().timestamp}
                    image={post.data().Proimage}
                    postImage={post.data().postImage}
                    />
                ))
              
 }
        </div>
    );
}

export default Posts
