import React, { useContext } from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import { COLORS } from '@src/themes/colors';

import Icon from 'react-native-vector-icons/FontAwesome';
import AuthContext from '@src/contexts/auth';

const DrawerBase = () => {
    const { signOut } = useContext(AuthContext);

    return (
        <DrawerItem
            label="Sair"
            onPress={signOut}
            icon={() => <Icon name="sign-out" size={18} />}
            style={styles.footer}
        />
    );
}

const styles = StyleSheet.create({
    footer: {
        marginBottom: 20,
        backgroundColor:COLORS.background
    }
})

export default DrawerBase;