import React, { useRef } from 'react';
import './footer.styles.css';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap'; // Import React Bootstrap components

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
      });

    e.target.reset();
  };

  return (
    <section className="footer-container">
      <Container>
        <Row>
          <Col md={4}>
            <form onSubmit={handleSubmit} ref={form} className="footer-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" name="user_name" id="name" className="form-input" placeholder='Enter your name'/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" name="user_email" id="email" className="form-input" placeholder="Enter your Email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="query" className="form-label">Your Comment:</label>
                        <textarea className="form-input" name="message" id="query" placeholder='Type your Query'></textarea>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Submit" className="form-submit" />
                    </div>
            </form>
          </Col>
          <Col md={4}>
          <h2>Instructions</h2>
            <ul>
              <li><a href="/instructions">How to Buy</a></li>
              <li><a href="/cart">Check Out</a></li>
              <li><a href="/shipping-returns">Shipping & Return Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
            </ul>
          </Col>
          <Col md={4}>
                <h2>Follow us at</h2>
                <ul class="follow_option">	
					<li>
						<a href="https://www.facebook.com/TheBookshelfHanoi" title="Theo dõi Facebook The Bookshelf Hanoi">Facebook<i class="fab fa-facebook-f"></i></a>
					</li>	
					<li>
						<a href="#" title="Theo dõi Behance The Bookshelf Hanoi">Behance<i class="fab fa-behance"></i></a>
					</li>			
					<li>
						<a href="https://www.instagram.com/thebookshelf.hn/" title="Theo dõi instgram The Bookshelf Hanoi">Instagram<i class="fab fa-instagram"></i></a>
					</li>			
				</ul>
          </Col>
        </Row>
        <p className="text-center">&copy; 2023 BookWorm. All Rights Reserved.</p>
      </Container>
    </section>
  );
};

export default Footer;
