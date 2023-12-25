import React, { useRef } from 'react';
import './footer.styles.css';
import emailjs from '@emailjs/browser';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => {
    const form = useRef();
    const serviceId = "service_44botzw";
    const templateId = "template_mz08lnq";
    const publicKey = "uCrsPEyakNRLUAnci";

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((response) => {
            console.log(response.text);
        })
        .catch((error) => {
            console.log(error.text);
        })

        e.target.reset();
    }

    return (
        <section className="footer-container">
            <Container>
                <Row>
                    <h2>If you have any queries feel free to ask here.</h2>
                    <Col onSubmit={handleSubmit} ref={form} className="footer-form">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input type="text" name="user_name" id="name" className="form-input" placeholder='Enter your name'/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" name="user_email" id="email" className="form-input" placeholder="Enter your Email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="query" className="form-label">Query:</label>
                            <textarea className="form-input" name="message" id="query" placeholder='Type your Query'></textarea>
                        </div>

                        <div className="form-group">
                            <input type="submit" value="Submit" className="form-submit" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    
                </Row>
                <p>&copy; 2023 BookWorm. All Rights Reserved.</p>
            </Container>
        </section>
    )
}

export default Footer;