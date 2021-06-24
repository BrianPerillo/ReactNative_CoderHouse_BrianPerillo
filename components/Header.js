import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const Header = ({title}) => {

    return (

        <View style={styles.header}>
            <Text style={{color:'#969A97'}}> {title} </Text>
        </View>

    );

}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        marginTop:50,
        alignItems:'center',
    }
  });

export default Header;