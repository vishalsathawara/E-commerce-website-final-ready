import react, { useState, useEffect } from "react"
import axios from "axios"

import Skeleton from '@mui/material/Skeleton';
import {
  useParams, Link
} from "react-router-dom";

const CategoryProduct = () => {

  const param = useParams()


  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const url = `https://fakestoreapi.com/products/category/${param.id}`


  const fetchdata = () => {

    setTimeout(() => {

      axios.get(url).then((res) => {
        //  console.log(res.data)
        setIsLoading(false)
        setData(res.data)
      }).catch((error) => {
        console.log(error)
      })


    }, 1000)


  }

  useEffect(() => {

    fetchdata()


  }, [])

  const LoadingDiv = () => {
    return (
      <>
        <div className="col-md-4 mb-4">
          <Skeleton animation="wave" variant="rounded" height={430} />
        </div>
        <div className="col-md-4 mb-4">
          <Skeleton animation="wave" variant="rounded" height={430} />
        </div>
        <div className="col-md-4 mb-4">
          <Skeleton animation="wave" variant="rounded" height={430} />
        </div>
        <div className="col-md-4 mb-4">
          <Skeleton animation="wave" variant="rounded" height={430} />
        </div>
        <div className="col-md-4 mb-4">
          <Skeleton animation="wave" variant="rounded" height={430} />
        </div>
        <div className="col-md-4 mb-4">
          <Skeleton animation="wave" variant="rounded" height={430} />
        </div>
      </>
    )
  }



  const AllProducts = () => {
    return (
      <>

        {data.map((item) => {
          return (


            <div className="col-md-4 mb-4" key={item.id} >

              <div className="card h-100 text-center p-4" key={item.id}>
                <img src={item.image} className="card-img-top" alt={item.title} height="250px" />
                <div className="card-body">
                  <h5 className="card-title mb-0">{item.title.substring(0, 12)}...</h5>
                  <p className="card-text lead fw-bold">
                    $  {item.price}
                  </p>
                  <Link to={`/product/${item.id}`}>
                    <button className="btn btn-outline-dark">Buy Now </button>
                  </Link>
                </div>
              </div>

            </div>


          )
        })}




      </>
    )
  }





  return (
    <>

      <div>

        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12 mb-5">
              <h1 className="display-6 fw-bolder text-center">  {param.id.toUpperCase()}</h1>
              <hr />
            </div>

          </div>

          <div className="row justify-content-center">
            {isLoading ? <LoadingDiv /> : <AllProducts />}
          </div>
        </div>

        <div className="text-center my-5 mx-3">
          <Link to="/">
            <button className="btn btn-dark btn-lg ">GO TO HOME </button>
          </Link>
        </div>
        <div className="text-center my-5 mx-3">
          <Link to="/category">
            <button className="btn btn-dark btn-lg ">GO TO CATEGORIES </button>
          </Link>
        </div>

      </div>
    </>
  )
}

export default CategoryProduct;
