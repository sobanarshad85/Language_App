import {PermissionsAndroid} from 'react-native';

export async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.requestMultiple(
      [ PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      ]).then( (result) => {
            console.log('result', result);
      })
  } catch (err) {
     console.warn(err);
  }
}
