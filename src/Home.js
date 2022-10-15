import BlogList from './BlogList';
import useFetch from './useFetch';
import DotLoader from "react-spinners/DotLoader";
import { CSS_FOR_LOADER } from './constants';

const Home = () => {

  const { data: blogs, setData, isPending, error } = useFetch('https://62b1c2f4196a9e98703cb1fe.mockapi.io/blogs');


  return (
    <>
      {isPending ? <DotLoader cssOverride={CSS_FOR_LOADER} color="#3577f1" /> : 
      <div className="home">
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" setData={setData} />}
    </div>}
    </>
  );
}

export default Home;    