import useFetch from "../customize/fetch";
import './Blog.scss';
import { Link } from "react-router-dom";

const Blog = () => {

    const { data: dataBlogs, isLoading, isError }
        = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);

    let newData = [];
    if (dataBlogs && dataBlogs.length > 0) {
        newData = dataBlogs.slice(0, 9)

    }

    return (
        <div className="blogs-container" >
            {isLoading === false && newData && dataBlogs.length > 0 && newData.map(item => {
                return (
                    <div className="single-blogs" key={item.id}>
                        <div className="title">Title: {item.title}</div>
                        <div className="content">Body: {item.body}</div>
                        <button>
                            <Link to={`/blog/${item.id}`}>View Detail</Link>
                        </button>

                    </div>
                )
            })}
            {isLoading === true &&
                <div>Loading data...</div>}
        </div>
    )
}
export default Blog;