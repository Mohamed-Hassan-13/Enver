
import { Button } from 'react-bootstrap';
// bootstrap
import Container from 'react-bootstrap/Container';
import icon from './images/Icon.png'

export default function Home(){
 
    return(
        <Container>
        <div className="row  my-5 " >
            <div data-aos="fade-right" className="col-lg-5 flex-column d-flex align-items-center justify-content-center ">
                <h1 className='w-70 fontsize fw-bolder text-bold'>Bulid Your Awesome Platform</h1>
                <p className='text-secondary'>Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.</p>
                <Button>
                Our Services
                <img className='mx-2' src={icon} alt="" />
                </Button>
            </div>
            <div data-aos="fade-left" className='col-lg-7 d-flex justify-content-center h-100'>
                <img style={{width: '100%',height: '440px'}} className='img-fluid' src={require('./images/Group 162532.png')} alt="" />
            </div>

        </div>
        </Container>
    )
}