import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const StyleButton = (props) => {

  //const type = props.type;
  //const content = props.content;
  //const onPress = props.onPress;

  const{type, content, onPress} = props;
  //console.warn(type);
  const backgroundColor = type === 'primary' ? '#171A20C' : '#FFFFFFA6';
  const textColor = type === 'primary' ? '#FFFFFFA6': '#171A20CC';

  return(
    <View style = {styles.container}>
      <Pressable
        style = {[styles.button, {backgroundColor: backgroundColor}]}
        onPress = {() => {
            onPress();
        }}
        >
        <Text style = {styles.text, {color: textColor}}>{content}</Text>

      </Pressable>
    </View>
  );
};
//10

export default StyleButton;
