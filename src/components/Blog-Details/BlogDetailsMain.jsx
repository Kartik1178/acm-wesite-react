import React from 'react';
import { Breadcrumbs } from '../BreadCrumbsMain';
import BlogDetails from './BlogOverall';
import BlogQuote from './BlogQuote';
import BlogWidget from './BlogWidget';
import BlogNavigation from './BlogNavigation';

const BlogDetailsMain = () => (
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>
      <Breadcrumbs title="Blog Details" activePath="/blog-details" />

        <BlogDetails />
        <BlogWidget title="Creating a Foundation for Success">
          Education is a vital aspect of a child's development...
        </BlogWidget>
        <BlogQuote />
        <BlogWidget title="Little Einsteins Learning School">
          Education is a vital aspect of a child's development...
        </BlogWidget>
        <BlogNavigation />
      </main>
    </div>
  </div>
);

export default BlogDetailsMain;
