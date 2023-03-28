import react from "react"
import Mens from "../Menswear/Mens.jpeg"
import Women from "../Menswear/Women.jpeg"
import { Link } from "react-router-dom";
import ManIcon from '@mui/icons-material/Man';
import Woman2Icon from '@mui/icons-material/Woman2';
import DiamondIcon from '@mui/icons-material/Diamond';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';

const Category = () => {

  const jwel = "https://media.istockphoto.com/id/1403525183/photo/chain-shape-golden-modern-bracelet-and-ring-on-white-podium-with-copy-space.jpg?b=1&s=170667a&w=0&k=20&c=o5rgur_ACNkzarWkrKhW_aGDXbafuHrhfQhPuddAcSk="

  const ele = "https://media.istockphoto.com/id/945527350/photo/home-appliances-group-of-vacuum-cleaner-microwave-iron-coffee-maker-steam-kettle-toaster-meat.jpg?s=612x612&w=0&k=20&c=WCyYJjlClYCK13tiSydJJW2J7y0dt8nr2XU9zeTlvoc="

  return (
    <>
      <div className="text-center my-5 ">
        <h1 className="h1 my-6">Our Collection </h1>
        <hr />
      </div>

      <div className="hero ">
        <div className="card bg-dark text-white">
          <img src={Mens} className="card-img" alt="loading"
            height="630px" />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0"> MENS WEAR</h5>
              <p className="card-text lead fs-2"> CKECK THE
                LATEST TRENDS</p>
              <Link to="/category/men's clothing">
                <button className="btn btn-outline-dark btn-lg "> <ManIcon sx={{ fontSize: 40 }} /> Go to Menswear </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
      <div className="hero my-4">
        <div className="card bg-dark text-white">
          <img src={Women} className="card-img" alt="loading"
            height="630px" />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">Women's clothing</h5>
              <p className="card-text lead fs-2"> CKECK THE
                LATEST TRENDS</p>
              <Link to="/category/women's clothing" >
                <button className="btn btn-outline-dark btn-lg "> <Woman2Icon sx={{ fontSize: 40 }} /> Go to Women's Wear</button>
              </Link>
            </div>

          </div>
        </div>
      </div>

      <div className="hero my-4  ">
        <div className="card bg-dark text-white">
          <img src={jwel} className="card-img" alt="loading"
            height="630px" />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0 text-dark">Jewelery </h5>
              <p className="card-text lead fs-2 text-dark"> CKECK THE
                LATEST TRENDS</p>
              <Link to="/category/jewelery">
                <button className="btn btn-outline-dark btn-lg "> <DiamondIcon sx={{ fontSize: 40 }} />  Go to Jewelery </button>
              </Link>
            </div>

          </div>
        </div>
      </div>

      <div className="hero my-4 mb-5">
        <div className="card bg-dark text-white">
          <img src={ele} className="card-img" alt="loading"
            height="630px" />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0 text-dark">Electronics </h5>
              <p className="card-text lead fs-2 text-dark"> CKECK THE
                LATEST TRENDS</p>
              <Link to="/category/electronics">
                <button className="btn btn-outline-dark btn-lg "> <DevicesOtherIcon sx={{ fontSize: 40 }} /> Go to Electronics </button>
              </Link>
            </div>

          </div>
        </div>
      </div>

      <div className="text-center my-5">
        <Link to="/">
          <button className="btn btn-dark btn-lg ">GO TO HOME </button>
        </Link>
      </div>

    </>
  )
}

export default Category;