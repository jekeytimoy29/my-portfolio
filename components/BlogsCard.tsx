import React from 'react';
import { BlogsType } from '../types/sections';
import { Card, CardBody, Fade } from 'reactstrap';

const BlogsCard = ({ title, snippet, link }: BlogsType) => {
  return (
    <Fade bottom duration={2000}>
      <Card className="card-lift--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h5 className="text-info">{title}</h5>
              <p className="description mt-3">
                {snippet}
                <a
                  className="btn-link"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default BlogsCard;
