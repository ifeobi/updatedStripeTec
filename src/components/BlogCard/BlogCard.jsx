import React from "react";
import "./BlogCard.scss";
import { Link } from "react-router-dom";

const BlogCard = ({ blogs }) => {
  // console.log(blogs);

  return (
    <div className="body">
      <section className="cards">
        {blogs.map((blog) => (
          <article key={blog.id} className="card card--1">
            <div className="card__img"></div>
            <Link to={`/blog/${blog.id}`} className="card_link">
              <div
                className="card__img--hover"
                style={{
                  backgroundImage: `url(${blog.attributes.coverImg.data.attributes.url})`,
                }}
              ></div>
            
            <div className="card__info">
              <span className="card__category"> blog</span>
              <h3 className="card__title">{blog.attributes.blogTitle}</h3>
              <span className="card__by">
                by{" "}
                <span to={`/blog/${blog.id}`} className="card__author" title="author">
                  {blog.attributes.author}
                </span>
              </span>
            </div>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
};

export default BlogCard;
