import AuthContext from '@src/contexts/auth';
import React from 'react';
import { useContext } from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { COLORS } from '@src/themes/colors';
import { FONTS } from '@src/themes/fonts';

import Profile from '@src/assets/images/profile.png';

const ProfileComponent:React.FC = props => {
    const { user } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <View style={styles.wrapperProfile}>
                <Pressable onPress={()=>{}}>
                    <Image 
                        source={Profile} 
                        accessibilityLabel="Perfil" 
                        style={styles.image}
                    />
                </Pressable>
            </View>
            <View>
                <Text style={styles.title}>Olá,</Text>
                <Text style={styles.text}>
                    seja bem-vindo <Text style={styles.username}>{user?.username}</Text>.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',

    },
    wrapperProfile:{
        width:60,
        height:60,
        borderRadius:60,
        marginRight:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.light
        
    },
    image:{
        width:40,
        height:30,
        resizeMode:'contain'
    },
    title:{
        fontFamily:FONTS.bold,
        fontSize:20,
    },
    text:{
        fontFamily:FONTS.regular
    },
    username:{
        fontFamily:FONTS.bold
    }
});

export default ProfileComponent;
