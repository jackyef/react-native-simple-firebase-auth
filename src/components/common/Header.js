// import libraries to use in this component
import React from 'react';
import {
  Text,
  View
} from 'react-native';

// create our component
const Header = (props) => {
  const { 
    viewStyle,
    textStyle 
  } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    // backgroundColor: '#283593',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    // paddingTop: 15, // needed on iOS
    // these 3 only works in iOS
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    elevation: 2, // this works in Android
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    // color: '#FAFAFA',
    fontWeight: '600'
  }
};
// make it available to other parts of the app
export { Header };
