import React from 'react'
import { useRouteError } from "react-router-dom";

function NotFound() {

  const error = useRouteError();
  console.error(error);

  return (
    <div className='flex flex-col justify-center h-screen items-center'>
      <h1 className='text-red-700 font-bold text-4xl mb-3'>Oops!</h1>
      <p >Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default NotFound