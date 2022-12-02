import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Additem = () => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.btnTextstyle}>Add to List</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Additem;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'green',
    height: 40,
    Width: 40,
    padding: 5,
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  btnTextstyle: {
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: '500',
  },
});
