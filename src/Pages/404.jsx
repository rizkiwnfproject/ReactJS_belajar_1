import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex flex-col justify-center min-h-screen items-center">
            <h1 className='text-5xl font-bold'>Oops!</h1>
            <p className='text-2xl font-semibold my-5'>Sorry, an unexpected error has occured</p>
            <p className='text-xl font-semibold'>{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage