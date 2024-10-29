import { Link, useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
  return (
    <div>
       <h1>Oops!</h1>
       <h2>{error.data}</h2>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
        <Link to={`/`}> Home</Link>
    </div>
  )
}

export default ErrorPage