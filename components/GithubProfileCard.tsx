import React from 'react';
import { Card, Col, Row, Container } from 'reactstrap';
import { GithubUserType } from '../types';
import SocialLinks from './SocialLinks';

const GithubProfileCard = ({ avatar_url }: GithubUserType) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={avatar_url}
                style={{ width: '200px' }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h1 className="text-white">Ready To Talk?</h1>
              <h3 className="text-white">Whether You Have a Project Idea or Just Want to Say Hello, My Inbox Is Always Open for You!</h3>
              <div className="lead text-white mt-3">Timothy Jake Flordelis</div>
              <div className="text-white"><strong>Mobile No.:</strong> +1 641 233 9099</div>
              <div className="text-white"><strong>Email Ad: </strong><a  className="text-white" href="mailto:mothj20@gmail.com">mothj20@gmail.com</a></div>
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                <i className="ni ni-pin-3 text-info mr-2" />
                1000 N 4th St., Fairfield, IA 52557
              </div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
