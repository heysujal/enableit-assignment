import { useState, useEffect, useCallback } from "react";
interface User {
    ID: string;
    JobTitle: string;
    EmailAddress: string;
    FirstNameLastName: string;
    Email: string;
    Phone: string;
    Company: string;
  }
  
export const useFetchUsers = (pageNumber:number) => {
    const USERS_API_ENDPOINT = `https://give-me-users-forever.vercel.app/api/users/${pageNumber}/next`;
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null);

    const fetchUsers = useCallback( async () => {
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
    }, [USERS_API_ENDPOINT]);

    useEffect(() => {
        fetchUsers();
    }, [pageNumber, fetchUsers])

    return {users, loading, error}
}

export default useFetchUsers;