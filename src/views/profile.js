import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const styleObj = {
  fontSize : 12
}

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  //const { name, picture, email } = user;

  if (isLoading) {
    return <div>Loading profile...</div>;
  }

  if (isAuthenticated) {
    return (
    
      <div>
        <p>Profile: </p>
        <img src={user.picture} alt={user.name} />
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        {!user.email_verified &&
            <p>Email not verified!</p>
        }
        <div className="row" style={styleObj}>
           {/* <pre className="col-8 text-light bg-dark p-4"> */}
             {JSON.stringify(user, null, 2)}
           {/* </pre> */}
        </div>
      </div>
     );
  }
};



export default Profile;