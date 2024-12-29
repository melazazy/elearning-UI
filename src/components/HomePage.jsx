import React from 'react';

    function HomePage() {
      return (
        <div>
          <section className="section">
            <h2>Featured Courses</h2>
            <div className="course-card">
              <h3>Course 1</h3>
              <p>Description of course 1.</p>
            </div>
            <div className="course-card">
              <h3>Course 2</h3>
              <p>Description of course 2.</p>
            </div>
          </section>
          <section className="section">
            <h2>Virtual Classrooms</h2>
            <p>Join our interactive virtual classrooms.</p>
          </section>
          <section className="section">
            <h2>Blog</h2>
            <p>Read our latest blog posts.</p>
          </section>
        </div>
      );
    }

    export default HomePage;
