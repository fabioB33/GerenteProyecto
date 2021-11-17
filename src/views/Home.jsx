import {useState} from 'react'
import {useAuth0} from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

//https://swiperjs.com/react
const Home = () => {
    const [auth, setAuth] = useState(true);
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const { getAccessTokenSilently,isAuthenticated } = useAuth0();

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(
        `${serverUrl}/api/private`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      //const responseData = await response.json();
      console.log(response)
      
    } catch (error) {
      alert(error.message);
    }
  };

    if (auth){
        if(isAuthenticated){
            callSecureApi();
        }
        setAuth(false);
    }


 
    
    return (
        <div>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <div className="">
                        <i className="fab fa-meetup fa-10x text-primary" />
                        <h1 className="display-4 font-weight-normal text-primary"><b>MeetApp</b></h1>
                    </div>
                    
                    <p className="lead font-weight-normal">MeetApp te permite reservar tu espacio en bares y restaurantes preferidos para compartir con las personas que prefieras </p>
                    <Link className="btn btn-outline-primary" to="/mis-reservas">Comenzar a usar MeetApp</Link>
                </div>
            </div>
        </div>

    )
}

export default Home;
