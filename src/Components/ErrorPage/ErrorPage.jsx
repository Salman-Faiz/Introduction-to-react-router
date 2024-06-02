import { useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error =useRouteError();
    const navigate =useNavigate();
    const handleGoBack=()=>{
        navigate('/');
    }
    return (
        <div className="text-center
    ">
            <h4 className="text-3xl pt-10">Ooopsss</h4>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default ErrorPage;