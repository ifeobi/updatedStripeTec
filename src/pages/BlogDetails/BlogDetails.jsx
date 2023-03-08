import React from "react";
import "./BlogDetails.scss";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ReactMarkdown from "react-markdown";
import Socials from "../../components/Socials/Socials";
import { Helmet } from "react-helmet-async";
import J from "../Home/J.png";

const BlogDetails = () => {
  const { id } = useParams();
  let { loading, data, error } = useFetch(
    `${process.env.React_App_REACT_APP_URL_API}/+${id}?populate=*`
  );

  // console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  return (
    <div>
      <Helmet>
        <link rel="icon" href={J} />
        <title>{data?.attributes?.blogTitle}</title>
        <meta name="description" content={data?.attributes?.blogTitle} />

        {/* Facebook tags */}
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content='article' />
        <meta property="og:title" content={data?.attributes?.blogTitle} />
        <meta property="og:description" content={data?.attributes?.blogTitle} />
        {/* End Facebook tags */}

        {/* Twitter tags */}
        <meta name="twitter:url" content={window.location.href} />
        <meta name="twitter:creator" content={data?.attributes?.author} />
        <meta name="twitter:card" content='article' />
        <meta name="twitter:title" content={data?.attributes?.blogTitle} />
        <meta name="twitter:description" content={data?.attributes?.blogTitle} />
        {/* End Twitter tags */}

      </Helmet>
      <article className="article">
        <section className="post-header">
          <div className="header-content post-container">
            <Link to={"/blog"} className="back-home">
              Back to blog
            </Link>

            <h1 className="header-title">{data?.attributes?.blogTitle}</h1>

            <img
              style={{ objectFit: "cover" }}
              src={`${data.attributes.coverImg.data.attributes.url}`}
              alt=""
              className="header-img"
            />
          </div>
        </section>

        <section className="post-content post-container">
          <p className="post-text">
            <ReactMarkdown>{data.attributes.blogContent}</ReactMarkdown>
          </p>
        </section>

        {/* Share */}
        <footer className="footerf">
          <div className="social-links2">
            <Socials />
          </div>
          <span>Share this article</span>
        </footer>
      </article>
    </div>
  );
};

export default BlogDetails;
