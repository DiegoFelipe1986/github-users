import { useState } from "react";
import { Loading } from "../components/Loading.js";
import useGithub from "../hooks/useGithub.js"
import '../App.css';

export const HomePage = () => {
    const { isLoading, devices } = useGithub();
    const [currentPage, setCurrentPage] = useState(0);
    const [search, setSearch] = useState('');

    const filteredDevices = () => {
        if (search.length === 0) {

            return devices.slice(currentPage, currentPage + 12);
        }

        const filtered2 = devices.filter(device => device.url.includes(search));
        return filtered2.slice(currentPage, currentPage + 12);
    };

    const nextPage = () => {
        if (devices.filter(device => device.titles[0].includes(search)).length > currentPage + 12) {
            setCurrentPage(currentPage + 12)
        }
    }

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 12);
        }
    }

    const onSearchChange = ({ target }) => {
        setCurrentPage(0);
        setSearch(target.value);
    }

    return (
        <>
            <div style={{ 'background': '#ef3829' }}>
                <div className="container" style={{ 'padding-top': '15px' }}>
                    <div className="row">
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="mb-3 form-control"
                                placeholder="Buscar Producto en la tienda"
                                value={search}
                                onChange={onSearchChange}
                            />
                        </div>
                        <div className="col-sm-1">
                            <button
                                className="btn btn-primary"
                                onClick={prevPage}
                            >
                                Last
                            </button>
                        </div>
                        <div className="col-sm-1">
                            <button
                                className="btn btn-primary"
                                onClick={nextPage}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    {

                        filteredDevices().map(devices => (
                            <div className="col-sm-3 mt-3">
                               
                                <div >
                                    <div className="card " key={devices.idCatalogo} >
                                        <img className="card-img-top img-fluid" src={devices.image_links[0]} alt={devices.titles[0]} />
                                        <div className="card-body">
                                            <div style={{'height': '70px'}}>
                                                <h5 className="card-title">{devices.titles[0]}</h5>
                                            </div>
                                            <a href={devices.url} className="btn btn-primary" target="_blank" rel="noreferrer">Ver producto</a>
                                        </div> 
                                    
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {isLoading && <Loading />}

        </>
    )
}