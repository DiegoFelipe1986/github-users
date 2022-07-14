import { createSearchParams, useParams } from 'react-router-dom';
import { useState } from 'react';
import useGithub from "../hooks/useGithub.js";
import useProducts from '../hooks/useProducts.js';

function ProductPage() {
  const { catalog } = useProducts()

  return (
    <>

      <div className="container">

        <div className="mt-5">
          <div className="row">

            {
              catalog.items.map(item => (
                <div className="col-sm-3 mt-3">
                  <div>
                    <div className='card'>
                      <img className="card-img-top img-fluid" src={item.imageLink} alt={item.title} />
                      <div className='card-body'>
                        <div>
                          <h5 className="card-title">{item.title}</h5>
                        </div>
                        <a href={item.link} className="btn btn-primary" target="_blank" rel="noreferrer">Ver producto</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>


      </div>
    </>
  )
}

export default ProductPage