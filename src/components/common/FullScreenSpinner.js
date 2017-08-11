import React from 'react';
import { View } from 'react-native';
import { Spinner } from './';

const FullScreenSpinner = () => {
  return (
    <View style={styles.spinnerStyle}>
      <Spinner />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export { FullScreenSpinner };
