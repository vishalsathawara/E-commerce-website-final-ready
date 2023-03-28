import react from "react"
import Products from "./Products"
import Footer from "./Footer"
const Home = () => {

  const u = "https://repository-images.githubusercontent.com/360453445/dd51141e-1223-4f9b-ba2b-1df312fdb55c"

  const url = "https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=2000&t=st=1672135581~exp=1672136181~hmac=afa32bfd5f6b0fc441b5757076f1b3b5fa948afcf5d6804792a7dfbaa6438c96"

  const urln = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKxr7YSqRS_Ol6u8tnWuYuZenmv9yvq21nQ&usqp=CAU"

  const urlA = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ76UdhycYdnSRJ4R6Au3jgMltRoc2LCsTeng&usqp=CAU"

  return (
    <>
      <div className="hero">

        <div className="card bg-dark text-white">
          <img src={urlA} className="card-img" alt="loading"
            height="550px" />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">NEW ARRIVALS</h5>
              <p className="card-text lead fs-2"> CKECK THE
                LATEST TRENDS</p>

            </div>

          </div>
        </div>
        <Products />
      </div>
      <Footer />
    </>
  )
}

export default Home;