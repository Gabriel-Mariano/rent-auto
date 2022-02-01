import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FONTS } from '@src/themes/fonts';
import { ILegendProps } from './index.d';

const LegendCompenet:React.FC<ILegendProps> = props => {
    const { title, data } = props;

    const renderDescriptions = () => (
        data?.map((values, index)=> 
            <View key={index} style={{ flexDirection:'row', alignItems:'center' }}>
                {
                    !values.color 
                        ? null
                        : <View style={[
                                styles.circle,
                                { backgroundColor: values.color && values.color } 
                            ]} 
                          />
                }
                <Text style={styles.description} key={index}>
                    {values.description}
                </Text>
                
            </View>
        )
    )

    return (
        <View style={styles.container}>
            <View style={styles.wrapperTitle}>
                <Text style={styles.title}>
                    {title || 'Legenda'}
                </Text>
            </View>
            <View style={styles.wrapperDescription}>
                {renderDescriptions()}
            </View>
        </View>
    );
}

export default LegendCompenet;

const styles = StyleSheet.create({
    container:{
        width:'100%',
    },
    wrapperTitle:{
        width:'100%',
        paddingVertical:10,
    },
    title:{
        textAlign:'center',
        fontFamily:FONTS.regular
    },
    wrapperDescription:{
        width:'100%',
        paddingHorizontal:20,
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    description:{
        fontFamily:FONTS.regular,
        fontSize:11,
        marginHorizontal:4,
    },
    circle:{
        width:10, 
        height:10,
        borderRadius:10,
        // borderWidth:1,
        // borderColor:COLORS.dark
    }
})