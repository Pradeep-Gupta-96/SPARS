import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "../App.css"

const Home = () => {
  return (
    <>

      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://cdn.pixabay.com/photo/2018/01/24/17/33/light-bulb-3104355_1280.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2016/01/09/18/28/notepad-1130743_1280.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2016/03/17/23/00/europe-1264062_1280.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="row gy-3">
        <div className="col">
          <div className="card">
            <img src="https://st2.depositphotos.com/4995823/11017/i/450/depositphotos_110178992-stock-photo-drone-with-high-resolution-digital.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Quadcopter Drone</h5>
              <p className="card-text">Quadcopter is an unmanned aerial vehicle ( UAV ) or drone with four rotors, each with a motor and propeller. A quadcopter can be manually controlled or can be autonomous. It's also called quadrotor helicopter or quadrotor. It belongs to a more general class of aerial vehicles called multicopter or multirotor.</p>
              <a to="/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Razer_side-on_view.jpg/1024px-Razer_side-on_view.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Robo for War</h5>
              <p className="card-text">RoboWar is an open-source video game in which the player programs onscreen icon-like robots to battle each other with animation and sound effects. The syntax of the language in which the robots are programmed is a relatively simple stack-based one, based largely on IF,and simply-defined variables.</p>
              <a to="/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://bigsee.eu/wp-content/uploads/2022/03/SIDE.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Smart Helmet</h5>
              <p className="card-text">For accident prevention, smart helmets are responsible for detecting drowsiness, speed and blinking, and providing warning alerts to prevent accidents. In the rescue request, the smart helmets detect a traffic accident and make a rescue request through text or phone calls in the event of an accident.</p>
              <a to="/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home