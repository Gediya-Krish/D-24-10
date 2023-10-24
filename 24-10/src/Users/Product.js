import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Product = () => {

  const [product, setProduct] = useState([]);
  const [category,setCategory] = useState([]);

  const allProduct = () => {
    axios.get(`http://localhost:8000/products`)
      .then((res) => {
        setProduct(res.data)
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  const allCategory = () => {
    axios.get(`http://localhost:8000/category`)
    .then((res) => {
      setCategory(res.data)
    }).catch((err) => {
      console.log(err);
      return false;
    })
  }

  const categoryFilter = (category) => {
     if(category === "all"){
        allProduct();
     }else{
        axios.get(`http://localhost:8000/products?category=${category}`).then((res)=>{
          console.log(res.data);
          setProduct(res.data);
          }).catch((err)=>{
              console.log(err);  
              return false; 
          })
      }
  }

  useEffect(() => {
    allProduct();
    allCategory();
  }, [])

  return (
    <>
      <div className="container p-5">
        <h2 className="pb-5 text-center">All Product</h2>
        <div className="row">

          <div className='col-lg-3'>
            <h5>Category Filter</h5>
            <hr/>
            <div className="card" style={{ width: '18rem' }}>

              <ul className="list-group list-group-flush">
                {
                      category.map((val)=>{
                          return (
                              <>
                                <li className="list-group-item">
                                      <button onClick={ () => categoryFilter(val.category_name) } style={{width:'100%'}} type="button" class="btn btn-outline-primary">{val.category_name}</button>
                                  </li>
                                 
                              </>
                          )
                      })
                }
                 <li className="list-group-item">
                        <button onClick={ () => categoryFilter("all")} style={{width:'100%'}}  type="button" class="btn btn-outline-primary">All</button>
                </li>
              </ul>
          
            </div>

          </div>

          <div className='col-lg-9 row'>
            {
              product.map((val) => {
                return (
                  <div className="col-lg-4 pb-3">
                    <div className="card" style={{ width: '18rem', padding: '15px' }}>
                      <img style={{ height: '200px', objectFit: 'contain' }} src={val.image} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Name :- {val.name}</h5>
                        <hr />
                        <h5 className="card-title">Price :- {val.price}</h5>
                      </div>
                      <div className='btn btn-primary'>
                        <Link to={`/product_details/${val.id}`} className='text-white' style={{textDecoration : 'none'}}>
                            <h6 className='p-0 m-0'>VIEW MORE</h6>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>
    </>
  )
}

export default Product