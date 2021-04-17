import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAsyncGet, selectUsers } from './fetchSlice'

export const Fetch = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers)

    useEffect(() => {
        dispatch(fetchAsyncGet())
    }, [dispatch])

    return (
        <div>
            {users.map((user, index) => (
                <div key={user.id}>
                    {user.email}
                </div>
            ))}
        </div>
    )
}
