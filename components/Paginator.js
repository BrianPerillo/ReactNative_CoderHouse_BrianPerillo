import { Animated, ImageBackground, StyleSheet, Text, View, useWindowDimensions } from "react-native";

import React from "react";

const Paginator = ({data, scrollX}) => {
    
    const {width} = useWindowDimensions();
    
    return ( //#47c3c5

            <View style={{
            backgroundColor: '#ffffff', width:'50%', borderColor:'#f0f0f0',
            justifyContent:'center', flexDirection:'row', height: 64, alignItems:'center',
            borderBottomWidth:0
            }}>

                { 
                
                    data.map((item, i) => {

                        const inputRange = [(i-1) * width, i * width, (i+1) * width];

                        const dotWidth = scrollX.interpolate({
                            inputRange,
                            outputRange: [10,25,10],
                            extrapolate: 'clamp',
                        })

                        return <Animated.View style={[styles.dot, {width: dotWidth}]} key={i.toString()} />
                    })

                }

            </View>

     );
}
 
export default Paginator;


const styles = StyleSheet.create({
    
    dot:{
        height: 10,
        borderRadius: 5,
        backgroundColor: '#59e0e3',
        marginHorizontal: 8,
    },

})