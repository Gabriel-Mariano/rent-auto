import React, { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { COLORS } from '@src/themes/colors';

import AuthContext from '@src/contexts/auth';
import AuthRoutes from './unauthenticated';
import AppRoutes from './authenticated';

const Routes: React.FC = () =>{
    const { user, isLoading } = useContext(AuthContext);

    if(isLoading){
        return (
            <View 
                style={{ 
                    flex:1, 
                    justifyContent:'flex-end', 
                    alignItems:'center', 
                    paddingVertical:40 
                }}
            >
                <ActivityIndicator size="large" color={COLORS.primary}/> 
            </View>
            
        );
    }
    
    const route = user ? <AppRoutes/> : <AuthRoutes/>
    
    return route;
     
}

export default Routes;