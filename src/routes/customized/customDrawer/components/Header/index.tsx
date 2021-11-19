import React, { useContext } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { COLORS } from '@src/themes/colors';
import { FONTS } from '@src/themes/fonts';

import ImageProfile from '@src/assets/images/profile.png'
import AuthContext from '@src/contexts/auth';

const DrawerHeader = () => {
    const { user } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.containerImage}>
                    <Image
                        source={ImageProfile}
                        accessibilityLabel="Foto do perfil"
                        style={styles.image}
                    />
                </View>
            </View>
            <View>
                <Text style={styles.nickname}>{user?.username}</Text>
                <Text style={styles.email}>E-mail: {user?.email}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

        height: 80,
        paddingHorizontal: 5,
        marginBottom: -40,

        borderBottomWidth: 1,
        borderBottomColor: COLORS.light
    },
    containerImage: {
        width: 60,
        height: 60,
        borderRadius: 60,
        marginRight: 10,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: COLORS.background,
    },
    image: {
        width: 40,
        height: 30,
        resizeMode: 'contain',
    },
    nickname: {
        fontFamily: FONTS.bold,
        fontSize: 18,
        alignSelf: 'center'
    },
    email: {
        fontFamily: FONTS.regular,
        fontSize: 10,
        alignSelf: 'center'
    }
})

export default DrawerHeader;