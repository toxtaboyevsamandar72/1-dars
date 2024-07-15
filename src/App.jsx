import logo from "./assets/img/Logo.png";
import ico from "./assets/img/Ico.png";
import icong from "./assets/img/Icon-g.png";
import arrow from "./assets/img/arrow-dow.png";
import icon from "./assets/img/Iconp.png";
import arow from "./assets/img/arrow-down.png";
import arowicon from "./assets/img/arrow-down-icon.png";
import cartpng from "./assets/img/Cart.png";
import icono from "./assets/img/Icono.png";
import group from "./assets/img/Group 592 1.png";
import play from './assets/img/Play button.png'
import image27 from './assets/img/image 27.png'
import image28 from './assets/img/image 28.png'
import image29 from './assets/img/image 29.png'
import image30 from './assets/img/image 30.png'
import image31 from './assets/img/image 31.png'

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="logo">
            <img className="logo-img" src={logo} alt="" />
          </div>
          <div className="Cari">
            <img className="ico" src={ico} alt="" />
            <input
              type="text"
              placeholder="Cari apapun disini..."
              className="input  w-full"
            />
          </div>
          <div className="indonesa">
            <img className="icong" src={icong} alt="" />
            <h3 className="baha"> Bahasa Indonesia</h3>
            <img className="arrow" src={arrow} alt="" />
          </div>
          <div className="Lokasi">
            <div className="icon">
              <img src={icon} alt="" />
            </div>
            <div className="text">
              <h4>Lokasi</h4>
              <div className="sar">
                <h3>Indonesia, Yogyakarta</h3>
                <img className="arow" src={arow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hrr">
        <hr className="rh" />
      </div>
      <div className="header-container">
        <div className="header-text">
          <div className="link">
            <h4>Gunung</h4>
            <img className="arowicon" src={arowicon} alt="" />
          </div>
          <div className="link">
            <h4>Pantai</h4>
            <img className="arowicon" src={arowicon} alt="" />
          </div>
          <div className="link">
            <h4>Kuliner</h4>
            <img className="arowicon" src={arowicon} alt="" />
          </div>
          <div className="link">
            <h4>Outbond</h4>
            <img className="arowicon" src={arowicon} alt="" />
          </div>
          <div className="link">
            <h4>Sejarah</h4>
            <img className="arowicon" src={arowicon} alt="" />
          </div>
          <div className="link">
            <h4>Edukasi</h4>
            <img className="arowicon" src={arowicon} alt="" />
          </div>
          <div className="link">
            <h4>Romantis</h4>
            <img className="arowicon" src={arowicon} alt="" />
          </div>
          <div className="link">
            <h4>Alam</h4>
            <img className="arowicon" src={arowicon} alt="" />
          </div>
        </div>
        <div className="header-images">
          <img className="sdf" src={cartpng} alt="" />
          <div className="icono">
            <img className="cartpng" src={icono} alt="" />
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="navbar-text">
          <div className="samal">
            <h3 className="the">✈ • Explore the wonderful indonesia!</h3>
          </div>
          <h2>Liburan & nikmati <span className="baru">tempat baru</span> di indonesia ️🏝</h2>
          <p>Destinize membuat kamu selalu update terkait tempat liburan baru di Indonesia dengan mengikuti perkembangan para influencer di sosial media ✨</p>
          <div className="navbar-button">
            <button className="button">Mulai sekarang →</button>
            <div className="play-video">
              <img className="play" src={play} alt="" />
              <h4>Putar Demo</h4>
            </div>
          </div>
        </div>
        <div className="navbar-img">
          <img src={group} alt="" />
        </div>
      </div>
      <div className="images">
        <img src={image27} alt="" />
        <img src={image28} alt="" />
        <div className="img-image">
        <img className="image29" src={image29} alt="" />
        </div>
        <img src={image30} alt="" />
        <img src={image31} alt="" />
      </div>
    </>
  );
}

export default App;
