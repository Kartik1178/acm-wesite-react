import React from 'react';

const BlogDetails = () => (
  <section className="ep-blog__details section-gap position-relative">
    <div className="container ep-container">
      <div className="row">
        <div className="col-lg-12 col-xl-8 col-12">
          <div className="ep-blog__details-main">
            <div className="ep-blog__details-top">
              <span className="ep-blog__details-category">Technology</span>
              <h2 className="ep-blog__details-title">Empowering Children Through Education</h2>
              <div className="ep-blog__details-cover">
                <div className="ep-blog__details-cover-img">
                  <img src="assets/images/blog/details/blog-details-img-1.jpg" alt="blog-img-1" />
                </div>
                <div className="ep-blog__details-date">21 September 2022</div>
                <ul className="ep-blog__details-meta">
                  <li><i className="fi-rr-comments"></i>Comments (05)</li>
                  <li><i className="fi fi-rr-tags"></i>Web design</li>
                </ul>
              </div>
              <p className="ep-blog__details-text">
                Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra.
              </p>
              <p className="ep-blog__details-text">
                Education is a vital aspect of a child's development...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BlogDetails;
