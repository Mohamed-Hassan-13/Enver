

import { Container } from "react-bootstrap";
import img from './images/image 4.png'

export default function Services(){
    return(
        <Container>
        <div className="row my-1">
            <div className="col-lg-6"><h1 className="fontsize">Why Enver is The Best Choice ?</h1></div>
            <div className="col-lg-6 text-secondary fs-5">Watch this one minute video so you understand why you should use our services!</div>
            
        </div>
            <img className="img-fluid" data-aos="flip-left" src={img} alt="" />
        </Container>
    )
}