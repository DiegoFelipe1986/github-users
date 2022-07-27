import { createSearchParams, useParams } from 'react-router-dom';
import { useState } from 'react';
import useGithub from "../hooks/useGithub.js";
import useProducts from '../hooks/useProducts.js';
import { Loading } from "../components/Loading.js";

function ProductPage() {
  const { isLoading, catalog } = useProducts()
  console.log(catalog)
  return (
    <>
      <div style={{ 'background': '#ef3829' }}>
        <div className="container" style={{ 'paddingTop': '60px' }}>

        </div>
      </div>
      <div className="container">

        <div className="mt-5">
          <div className="row">

            {!isLoading &&
              catalog.items.map(item => (
                <div className="col-sm-3 mt-3" key={item.id}>
                  <div>
                    <div className="card ">
                      <img className="card-img-top img-fluid" src={item.imageLink} alt={item.title} />
                      <div className="card-body">
                        <div style={{ 'height': '70px' }}>
                          <h5 className="card-title">{item.title}</h5>
                        </div>
                        <div>
                          <h5 style={{'color':'red'}}>$ {item.price}</h5>
                        </div>
                        <a href={item.link} className="btn btn-primary"  target="_blank" rel="noreferrer">Ver producto</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>


      </div>
      {isLoading && <Loading />}
    </>
  )
}

export default ProductPage