import React, { useEffect } from 'react';
import { auth } from '../redux/_actions/user_actions';
import { useSelector, useDispatch } from 'react-redux';

export default function (SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    let user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
      // to know current status, send auth request
      dispatch(auth()).then(response => {
        // not logged in Status
        if (!response.payload.isAuth) {
          if (option) {
            props.history.push('/login');
          }
          // logged in Status
        } else {
          // redirects anyone who isnt admin to landing
          if (adminRoute && !response.payload.isAdmin) {
            props.history.push('/');
          }
          // redirects already logged in user to landing
          else {
            if (option === false) {
              props.history.push('/');
            }
          }
        }
      });
    }, []);

    return <SpecificComponent {...props} user={user} />;
  }
  return AuthenticationCheck;
}
