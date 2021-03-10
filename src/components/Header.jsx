import React from 'react';
import '../css/Header.css';
import img from '../images/business-people.svg';
import head1 from '../headshots/download.jpg';

const Item = () => {
  return (
    <React.Fragment>
      <div className="innerContainerItem">
      <div className="item">
         
        <div className="hoveringScore">402</div>
        <span className="scoreCarrierName">Lion El Johnson</span>
      </div>
      <div className="item">
        
        <div className="hoveringScore">398</div>
        <span className="scoreCarrierName">Aisla Pindoria</span>
      </div>
      <div className="item">
        
        <div className="hoveringScore">300</div>
        <span className="scoreCarrierName">Robot Guliman</span>
      </div>
      <div className="item">
        
        <div className="hoveringScore">300</div>
        <span className="scoreCarrierName">Bobbo Smith</span>
      </div>
      </div>
    </React.Fragment>
  )
}

const Header = () => {
  return (
    <React.Fragment>
      <div className="title">
        <h1>Cube<span>19</span> Leaderboard</h1>
      </div>
      <div className="scoreHeader">
        <h2>All Time Highest Scorers</h2>
        <div className="innerContainer">
          
            {Item()}
          
          <div className="imageContainer">
              <img src={img} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;