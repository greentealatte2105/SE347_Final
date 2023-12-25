import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className='d-block w-100'
             src='https://bizweb.dktcdn.net/100/431/180/themes/826402/assets/slider_1.jpg?1702545294857'
             alt="First slide"   
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100'
                src='https://bizweb.dktcdn.net/100/431/180/themes/826402/assets/slider_2.jpg?1702545294857'
                alt="First slide"   
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100'
                    src='https://bizweb.dktcdn.net/100/431/180/themes/826402/assets/slider_3.jpg?1702545294857'
                    alt="First slide"   
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;