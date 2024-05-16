
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import backgroundImg from './../../assets/bottom_banner_1.png';
import './Footer.css'; // Importing CSS file for styling

export default function App() {
  return (
    <div className="container-fluid p-0">
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted w-100 m-0 footer-div' 
        style={{ backgroundImage: `url(${backgroundImg})`}}>
        <section>
          <MDBContainer className='text-white text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              {/* First column */}
              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Managed By</h6>
                <p>Atharva</p>
              </MDBCol>
              {/* Second column */}
              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                <p>Handloom</p>
                <p>Crafts</p>
                <p>Hand Spinning</p>
                <p>Natural Dyeing</p>
                <p>Hand Knitting</p>
              </MDBCol>
              <MDBCol md="2" lg="4" xl="4" className='mx-auto mb-md-0 mb-4'></MDBCol>
              {/* Third column */}
              <MDBCol md="4" lg="4" xl="4" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Follow Us</h6>
                <div className='social-icons'>
                  <MDBIcon fab icon="facebook" className="social-icon" />
                  <MDBIcon fab icon="twitter" className="social-icon" />
                  <MDBIcon fab icon="instagram" className="social-icon" />
                  <MDBIcon fab icon="linkedin" className="social-icon" />
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4 text-muted' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2024 Copyright:
          <a className='text-reset fw-bold' href='/'>
            Urgam and Tapovan
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}
