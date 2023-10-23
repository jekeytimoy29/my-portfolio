import React, { useRef, useState } from 'react';
import classnames from 'classnames';
import Alert from './Alerts';
import { addMessageApi } from '../datasource/api/messages-api';

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Form,
  FormFeedback,
} from 'reactstrap';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [alert, setAlert] = useState<{
    color: string;
    icon: string;
    message: string;
  } | null>(null);

  const successAlert = {
    color: 'success',
    icon: 'ni ni-like-2',
    message: ' Your message has been sent successfully!',
  };

  const errorAlert = {
    color: 'danger',
    icon: 'ni ni-bell-55',
    message: ' Oops! Something went wrong. Please try again later.',
  };

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const newErrors: Partial<FormData> = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    // Return true if the form is valid, false otherwise
    return !Object.values(newErrors).some((error) => !!error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid');
      const response: any = await addMessageApi(formData);
      if (response === null) setAlert(errorAlert);
      else setAlert(successAlert);
    } else {
      console.log('Form is invalid');
    }
  };

  return (
    <>
      <section className="section section-lg section-shaped" id="contact">
        <Form onSubmit={handleSubmit}>
          {alert && (
            <Alert
              color={alert.color}
              icon={alert.icon}
              message={alert.message}
            />
          )}
          <Container>
            <Row className="justify-content-center">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">
                      Ready to Collaborate? Let&apos;s Make Great Things Happen!
                    </h4>
                    <p className="mt-0">
                      Feel Free to Reach Out via the Form Below:
                    </p>
                    <FormGroup className={classnames('mt-5', {})}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Your Name"
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          invalid={!!errors.name}
                        />
                        <FormFeedback tooltip>{errors.name}</FormFeedback>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({})}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email Address"
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          invalid={!!errors.email}
                        />
                        <FormFeedback tooltip>{errors.email}</FormFeedback>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Type a message..."
                          cols="80"
                          type="textarea"
                          rows="4"
                          name="message"
                          id="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          invalid={!!errors.message}
                        />
                        <FormFeedback tooltip>{errors.message}</FormFeedback>
                      </InputGroup>
                    </FormGroup>
                    <Button
                      block
                      className="btn-round"
                      color="default"
                      size="lg"
                      type="submit"
                    >
                      Send Message
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </Form>
      </section>
    </>
  );
};

export default ContactUs;
