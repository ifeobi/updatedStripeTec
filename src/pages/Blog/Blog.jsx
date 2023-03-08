import React from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import useFetch from "../../hooks/useFetch";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  let { loading, data, error } = useFetch(
    `${process.env.React_App_REACT_APP_URL_API}?populate=*`
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  return (
    <>
      <Helmet>
        <title>NewsFeed</title>
        <meta
          name="description"
          content="Stay up-to-date with the latest digital marketing trends and strategies. Our blog is your go-to resource for insider tips, industry news, and best practices. Discover how to improve your online presence, reach new customers, and grow your business with our expert insights."
        />
      </Helmet>
      <BlogCard blogs={data ? data : ""} />
    </>
  );
};

export default Blog;
