import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useGithub from "../hooks/useGithub.js";

function ProductPage() {
  const { isLoading, devices } = useGithub();
  const [currentPage, setCurrentPage] = useState(0);
  const params = useParams();

  const filteredDevices = () => {

    const filtered = devices.filter(device => device.url.includes(params.id));
    return filtered.slice(currentPage, currentPage + 12);
  };


  return (
    <>
      <div className="container">
        {
          filteredDevices().map(device => (
            <div className="mt-5">
              <div className="row">
                
                {device.image_links.map(image => (
                      <div className='col-sm-3 mt-3'>
                        <div className='card'>
                          <img className="card-img-top img-fluid" src={image} alt={image}  />
                        </div>
                      </div>
                  ))
              
                }
               
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default ProductPage