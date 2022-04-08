import { useState } from "react";
import { Loading } from "../components/Loading.js";
import useGithub from "../hooks/useGithub.js"

export const HomePage = () => {
    const { isLoading, users } = useGithub();
    const [currentPage, setCurrentPage] = useState(0);
    const [search, setSearch] = useState('');

    const filteredUsers = () => {
        if (search.length === 0) {
            return users.slice(currentPage, currentPage + 5);
        }

        const filtered = users.filter(user => user.login.includes(search));

        return filtered.slice(currentPage, currentPage + 5);
    };

    const nextPage = () => {
        if (users.filter(user => user.login.includes(search)).length  > currentPage +  5) {
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
            <h1>Github Users List</h1>
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
                        filteredUsers().map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>
                                    <img
                                        src={user.avatar_url}
                                        alt={user.login}
                                        width="120px"
                                    />
                                </td>
                                <td>{user.login}</td>
                                <td>{user.type}</td>
                                <td>{user.html_url}</td>
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