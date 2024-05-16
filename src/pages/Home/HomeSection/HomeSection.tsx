import background from './../../../assets/BG-1.png'
import './HomeSection.css'
import ExploreButton from '../../../components/ExploreButton/Explore.js'


function HomeSection() {
  return (<>
    <div className="home-main-div container-fluid align-items-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="row h-100">
        <div className="col-sm-7 d-flex flex-column min-vh-100 justify-content-center">
          <div className="welcome-text">
            <div className='welcome-to'>Welcome to</div>
            <div className='Urg' >Urgam</div>
            <div className='Urg'>& Tapovan</div>
          </div>
        </div>
        <div className="col-sm-5 d-flex flex-column min-vh-100 justify-content-center align-items-center">
          <div className='explore-button'>
            
            <ExploreButton/>

          </div>
        </div>
      </div>
    </div>

    <div>

    </div>
    </>
  );
}

export default HomeSection;
