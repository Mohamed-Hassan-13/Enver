import { Container } from "react-bootstrap";
import icon from '../images/Logo Icon 1.svg'

export default function End(){
    return(
        <Container>
            <div className="row align-items-center py-5 gap-3 gap-md-0">
            <div className='col-md-4 text-white' href="#">
            <img style={{marginRight:'10px'}} src={icon} alt="" />
            Enver
        </div>
        <div className="col-md-4  d-flex gap-4 fs-12 text-secondary">
            <p className="my-0">Support</p>
            <p className="my-0">Privacy Policy</p>
            <p className="my-0">Terms and Conditions</p>
        </div>
        <div className="col-md-4  fs-12 text-secondary">
        © 2024 Enver,|Mohamed Hassan| All Rights Reserved
        </div>
        </div>
        </Container>
    )
}