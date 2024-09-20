import { useState, useEffect } from "react";

export const useFetchUsers = (pageNumber:number) => {
    const USERS_API_ENDPOINT = `https://give-me-users-forever.vercel.app/api/users/${pageNumber}/next`;
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState();
    const fetchUsers = async () => {
        setLoading(true)
        try {
            const response = await fetch(USERS_API_ENDPOINT)
            const data = await response.json();
            setUsers(data?.users)
        } catch (error) {
            console.error(error)
            setError('Failed to fetch Users')
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchUsers();
    }, [pageNumber])

    return {users, loading, error}
}

export default useFetchUsers;