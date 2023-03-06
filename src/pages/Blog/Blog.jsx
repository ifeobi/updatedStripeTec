import React from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import useFetch from "../../hooks/useFetch";

const Blog = () => {
  let { loading, data, error } = useFetch(
    `${process.env.React_App_REACT_APP_URL_API}?populate=*`
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  

  return (
    <>
      <BlogCard blogs={data ? data : ""} />
    </>
  );
};

export default Blog;
