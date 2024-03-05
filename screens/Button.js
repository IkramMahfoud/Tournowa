import React from 'react'
import { PermissionsAndroid } from 'react-native';


function Button() {

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (

    <Button
    onPress={(requestCameraPermission) => {
      console.log('You tapped the button!');
      navigation.navigate('Favorite')
    }}
  title="Press Me"
/>




    // <Button
    // viewDetails={() =>
    //   navigation.navigate('Favorite')
    //   onPress ={requestCameraPermission}
    // } title="request permissions" />


  )
}

export default Button