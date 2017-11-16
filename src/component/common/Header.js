import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
    const { viewStyle, textStyle } = styles;

      return (
      <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
      </View>
    );
};

const styles = {

    viewStyle: {
        backgroundColor: 'red',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textStyle: {
       fontSize: 20,
       color: 'white'
    }
};

export { Header };
