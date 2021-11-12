import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { TouchableOpacity, Text } from 'react-native';
import { IButtonComponentProps } from './index.d';
import { COLORS } from '@src/themes/colors';

const ButtonComponent: React.FC<IButtonComponentProps> = props => {
    const {
        title,
        color,
        backgroundColor,
        inProgress,
        ...buttonProps
    } = props;


    const renderContentTitle = () =>
        inProgress
            ? <ActivityIndicator size="small" color={COLORS.white} />
            : <Text style={[
                styles.text,
                {
                    color: color ? color : COLORS.secondary,
                },
            ]}>
                {title}
            </Text>

    return (
        <TouchableOpacity style={[
            styles.container,
            {
                backgroundColor: backgroundColor ? backgroundColor : COLORS.primary,
            }
        ]}
            onPress={buttonProps.onPress}
        >
            {renderContentTitle()}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 55,

        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,

        elevation: 3,
        marginVertical: 10
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.white
    }
});

export default ButtonComponent;