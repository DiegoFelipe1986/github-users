import { useState } from "react";
import { Loading } from "../components/Loading.js";
import useGithub from "../hooks/useGithub.js"

export const HomePage = () => {
    const { isLoading, products } = useGithub();
    const [currentPage, setCurrentPage] = useState(0);
    const [search, setSearch] = useState('');

    const filteredUsers = () => {
        if (search.length === 0) {
            return products.slice(currentPage, currentPage + 5);
        }

        const filtered = products.filter(user => user.login.includes(search));

        return filtered.slice(currentPage, currentPage + 5);
    };

    const nextPage = () => {
        if (products.filter(user => user.login.includes(search)).length  > currentPage +  5) {
            setCurrentPage(currentPage +5)
        }
    }

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 5);
        }
    }

    const onSearchChange = ({target}) => {
        setCurrentPage(0);
        setSearch(target.value);
    }

    return (
        <div className='mt-5'>
            <h1>Concept Test</h1>
            <hr />
            <input
                type="text"
                className="mb-3 form-control"
                placeholder="Search user"
                value={search}
                onChange={ onSearchChange }
            />
            <button
                className="btn btn-primary"
                onClick={prevPage}
            >
                Last
            </button>
            &nbsp;
            <button
                className="btn btn-primary"
                onClick={nextPage}
            >
                Next
            </button>
            <table className='table table-striped'>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Login</th>
                        <th scope="col">Type</th>
                        <th scope="col">Profile</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredUsers().map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        width="120px"
                                    />
                                </td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td><a href={product.meta.link} target="_blank">{product.meta.ref}</a></td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td>

                        </td>
                    </tr>
                </tbody>
            </table>
            {isLoading && <Loading />}
        </div>
    )
}