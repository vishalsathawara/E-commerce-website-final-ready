import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios"
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { addCart } from "../redux/action";
import { useDispatch } from "react-redux";



const Productdetail = () => {

  const { id } = useParams()

  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };


  const url = `https://fakestoreapi.com/products/${id}`
  const getdata = () => {

    setTimeout(() => {

      axios.get(url).then((res) => {
        //console.log(res.data)
        setProduct(res.data)
        setIsLoading(false)
      }).catch((error) => {
        console.log(error)
      })

    }, 3000)

  }

  useEffect(() => {
    getdata()
  }, [])

  const LoadingDataDiv = () => {
    return (

      <>

   <div className="col-md-6 mt-3">

     <Skeleton animation="wave" variant="rounded" height={400} width={400}/>
   </div>
  <div className="col-md-6" style={{lineHeight:2}}>
        <Stack spacing={1}>
       <Skeleton animation="wave" variant="rounded" height={50} width={300}/>
    
         <Skeleton animation="wave" variant="rounded" height={75} />
         <Skeleton animation="wave" variant="rounded" height={25} width={150}/>
         <Skeleton animation="wave" variant="rounded" height={50}/>
     <Skeleton animation="wave" variant="rounded" height={150} />
         <Skeleton animation="wave"  variant="rounded" height={50} width={400}/>
          
        </Stack>
    
  </div>

      </>

    )
  }

  const ProductShow = () => {
    return (
      <>
        <div className="col-md-6">
          <img src={product.image} alt={product.title} height="400px" width="400px" />
        </div>
        <div className="col-md-6">
          <h4 className="mt-3 text-uppercase text-black-50"> {product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bold">
            Rating : {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4 ">
            {product.price}
          </h3>
          <p className="lead">
            {product.description}
          </p>
          <button className="btn btn-outline-dark mx-4" onClick={() => addProduct(product)}>Add to Cart </button>
          <Link to="/cart">
            <button className="btn btn-outline-dark">Go to Cart </button>
          </Link>
               <Link to="/product">
            <button className="btn btn-outline-dark mx-4">Go to Products </button>
          </Link>
        </div>
      </>

    )
  }

  return (
    <>
      <div>
        <div className="container py-5">
          <div className="row py-4">
            {
              isLoading ? <LoadingDataDiv /> : <ProductShow />
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default Productdetail;

