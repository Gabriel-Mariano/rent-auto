import React, { useContext } from 'react';

import AuthContext from '@src/contexts/auth';
import AuthRoutes from './auth_routes';
import AppRoutes from './app_routes';

const Routes: React.FC = () =>{
    const { user } = useContext(AuthContext);
    
    const route = user ? <AppRoutes/> : <AuthRoutes/>
    
    return route;
     
}

export default Routes;