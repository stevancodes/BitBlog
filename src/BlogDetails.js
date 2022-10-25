import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";
import PulseLoader from "react-spinners/PulseLoader";
import { CSS_FOR_LOADER } from "./constants";

const BlogDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch("https://62b1c2f4196a9e98703cb1fe.mockapi.io/blogs/" + id);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const deleteBlog = () => {
    setIsLoadingDelete(true);
    fetch(`https://62b1c2f4196a9e98703cb1fe.mockapi.io/blogs/${blog.id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
      setIsLoadingDelete(false);
    });
  };

  return (
    <div className="blog-details">
      {isPending && <GridLoader cssOverride={CSS_FOR_LOADER} color="#3577f1" />}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <div className="inside-wrap">
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
          </div>
          <button onClick={deleteBlog} className="blog-delete">
            {isLoadingDelete ? <PulseLoader color="#3577f1" size={9} /> : "Delete blog"}
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
