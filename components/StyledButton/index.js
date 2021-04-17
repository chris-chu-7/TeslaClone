import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const StyleButton = (props) => {
  return(
    <View style = {styles.container}>
      <Pressable
        style = {styles.button}
        onPress = {() => {
            console.warn('Hey there');
        }}
        >
        <Text style = {styles.text}>Custom Order</Text>

      </Pressable>
    </View>
  );
};
//10

export default StyleButton;
