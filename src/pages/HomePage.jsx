import { useState } from "react";
import { Loading } from "../components/Loading.js";
import useGithub from "../hooks/useGithub.js"
import '../App.css';

export const HomePage = () => {
    const { isLoading, products, devices } = useGithub();
    const [currentPage, setCurrentPage] = useState(0);
    const [search, setSearch] = useState('');

    const filteredUsers = () => {
        if (search.length === 0) {
            return products.slice(currentPage, currentPage + 12);
        }

        const filtered = products.filter(product => product.name.includes(search));

        return filtered.slice(currentPage, currentPage + 4);
    };

    const filteredDevices = () => {
        if (search.length === 0) {

            return devices.slice(currentPage, currentPage + 12);
        }

        const filtered2 = devices.filter(device => device.url.includes(search));
        return filtered2.slice(currentPage, currentPage + 4);
    };

    const nextPage = () => {
        if (products.filter(product => product.name.includes(search)).length > currentPage + 4) {
            setCurrentPage(currentPage + 4)
        }
    }

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 4);
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
                <div className="row mt-5 ">
                    {

                            filteredDevices().map(devices => (
                                <div>

                                    <div className="col-sm-3 mt-3">
                                        <div className="card " key={devices.idCatalogo} >
                                            {devices.url}
                                        </div>
                                    </div>

                                </div>

                            ))

                    }
                    {/* {
                        filteredUsers().map(product => (
                            <div className="col-sm-3 mt-3">
                                <div className="card " key={product.name} >
                                    <img className="card-img-top img-fluid" src={product.image} alt={product.name} r />
                                    <div className="card-body">
                                        <div style={{'height': '70px'}}>
                                            <h5 className="card-title">{product.name}</h5>
                                        </div>
                                        <h5 className="card-title" style={{'color': 'red'}} >$ {product.price}</h5>
                                        <a href={product.meta.link} className="btn btn-primary" target="_blank" rel="noreferrer">Ver producto</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    } */}
                </div>
            </div>

            {isLoading && <Loading />}

        </>
    )
}