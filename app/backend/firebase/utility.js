import firebase from 'firebase';
import firestore from 'firebase/firestore';
import { _storeData } from '../../backend/AsyncFuncs';
import GlobalConst from '../../config/GlobalConst';
import RNFetchBlob from 'react-native-fetch-blob';
import {Platform} from 'react-native';


let currentUserId = '';

export async function connectFirebase(){
 // Initialize Firebase
 var config = {
     apiKey: "AIzaSyDM_CKcUOPM3VG7cGLWAyN6OnpoLBrInX4",
     authDomain: "languageapp-4c9f6.firebaseapp.com",
     databaseURL: "https://languageapp-4c9f6.firebaseio.com",
     projectId: "languageapp-4c9f6",
     storageBucket: "languageapp-4c9f6.appspot.com",
     messagingSenderId: "1042323987702",
     appId: "1:1042323987702:web:70c0228a71a5ab3a"
  };
 if (!firebase.apps.length) {
   firebase.initializeApp(config);
 }
}

export async function getAllOfCollection(collection){
  let data = [];
  let querySnapshot = await firebase.firestore().collection(collection).get();
  querySnapshot.forEach(function(doc) {
    if (doc.exists) {
      //console.log(doc.data());
      data.push(doc.data());
    } else {
      console.log('No document found!');
    }
  });
  return data;
}

export async function getData(collection, doc, objectKey){
  // check if data exists on the given path
  if(objectKey === undefined){
    return firebase.firestore().collection(collection).doc(doc).get().then(function(doc) {
      if (doc.exists) {
        return doc.data();
      } else{
        return false;
      }
    })
  }
  else{
    return firebase.firestore().collection(collection).doc(doc).get().then(function(doc) {
      if (doc.exists && (doc.data()[objectKey] != undefined) ) {
        return ( doc.data()[objectKey] );
      } else{
        return false;
      }
    })
  }
}

export async function getDocByObjectKey(collection, key, value){
  return firebase.firestore().collection(collection)
    .where(key, '==', value).get().then(function(querySnapshot) {
      return querySnapshot.docs[0];
    });
}

export async function getDocWithinRange(collection, doc, strSearch){
  let strlength = strSearch.length;
  let strFrontCode = strSearch.slice(0, strlength-1);
  let strEndCode = strSearch.slice(strlength-1, strSearch.length);

  let startcode = strSearch;
  let endcode= strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1);

  return firebase.firestore().collection(collection)
    .where(doc, '>=', startcode)
    .where(doc, '<', endcode).get().then(function(querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.data());
      });
    });
}

export async function dataExist(collection, doc){
  // check if data exists on the given path
  return firebase.firestore().collection(collection).doc(doc).get().then(function(doc) {
    if (doc.exists) {
      return doc.data();
    } else{
      return false;
    }
  })
}

export async function updateData(collection, doc, jsonObject){
  firebase.firestore().collection(collection).doc(doc).update(jsonObject)
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.log("Error writing document: ", error);
  });
}

export async function saveDataWithoutDocId(collection, jsonObject){
  let upload = await firebase.firestore().collection(collection).doc().set(jsonObject);
  return upload;
}

export async function saveData(collection, doc, jsonObject){
  firebase.firestore().collection(collection).doc(doc).set(jsonObject, { merge: true })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
}

export async function addToArray(collection, doc, array, value){
  firebase.firestore().collection(collection).doc(doc).update({
    [array]: firebase.firestore.FieldValue.arrayUnion(value)
  });
}


export async function uploadImage(imgUri, mime = 'image/jpeg', imagePath, name, databaseCollection, docRef) {
  //blob
  const Blob = RNFetchBlob.polyfill.Blob;
  const fs = RNFetchBlob.fs;
  window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
  window.Blob = Blob;

  const uploadUri = Platform.OS === 'ios' ? imgUri.replace('file://', '') : imgUri;
  const imageRef = firebase.storage().ref(imagePath);

  let readingFile = await fs.readFile(uploadUri, 'base64');
  let blob = await Blob.build(readingFile, { type: `${mime};BASE64` });

  let uploadTask = imageRef.put(blob, { contentType: mime, name: name });

  let progress = 0;
  //Listen for state changes, errors, and completion of the upload.
  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    function(snapshot) {
      // console.log('Bytes transferred ' + snapshot.bytesTransferred);
      // console.log('Total bytes ' + snapshot.totalBytes);
      // var progress = ( (snapshot.bytesTransferred / snapshot.totalBytes) * 100 );
      if(progress < 30)
        progress += 10;
      else if(progress >= 30)
        progress += 5;
      else if(progress >= 85)
        progress += 1;
      else if(progress >= 95)
        progress += 0.1;

      _storeData(GlobalConst.STORAGE_KEYS.imageUploadProgress, progress.toString());
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED:
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING:
          console.log('Upload is running');
          break;
      }
    },
    function(error) {
      console.log(error);
      _storeData(GlobalConst.STORAGE_KEYS.imageUploadProgress, '-1');
    },
    function() {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL);
        saveData(databaseCollection, docRef.id, {imageUrl: downloadURL}).then(() => {
          _storeData(GlobalConst.STORAGE_KEYS.imageUploadProgress, '100');
        });

    });
  });

}


export async function downloadImage(folder, imageName){
  var storageRef = firebase.storage().ref();
  var pathRef = storageRef.child(folder + '/' + imageName);

  let url = await pathRef.getDownloadURL()
  return url;
}
