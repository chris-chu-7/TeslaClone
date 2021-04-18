import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';


const CarItem = (props) => {
  const{name, tagline, tagLineCTA, image} = props;
  return (
    <View style = {styles.carContainer}>
      <ImageBackground source={image}
      style = {styles.image}
      />

      <View style = {styles.titles}>
        <Text style = {styles.title}> {name} </Text>
        <Text style = {styles.subtitle}>
        {tagline}
        {' '}
        <Text> style = {styles.subtitleCTA}>
          {tagLineCTA}
          </Text>
        </Text>
      </View>

      <View style = {styles.buttonsContainer}>
          <StyledButton
          type = "primary"
          content = {"CUSTOM ORDER"}
          onPress = {() => {
            console.warn("Custom Order was pressed")
          }}

         />

         <StyledButton
           type = "secondary"
           content = {"EXISTING INVENTORY"}
           onPress = {() => {
             console.warn("Existing Inventory was pressed")
           }}

        />
      </View>


    </View>



  );
};

export default CarItem;
