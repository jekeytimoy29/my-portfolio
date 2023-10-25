import React from 'react';
import { blogs } from '../portfolio';
import { Col, Container, Row } from 'reactstrap';
import BlogsCard from '../components/BlogsCard';

const Blogs = () => {
  return (
    blogs && (
      <section className="section section-lg" id="blogs">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="fa fa-star text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">
                Explore My Latest Blog Posts
              </h4>
            </div>
          </div>
          <Row className="row-grid align-items-center">
            {blogs.map((data, i) => {
              return (
                <Col key={i} lg={6}>
                  <BlogsCard {...data} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    )
  );
};

export default Blogs;
