import firebase from "firebase/compat/app";
import 'firebase/compat/database';


const firebaseConfig = {
  apiKey: "AIzaSyDR9vlE9pHfeXHhY1CL-_uzF258fyN-m80", // Add API Key
  databaseURL:"https://videocall-b2224-default-rtdb.firebaseio.com" // Add databaseURL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let dbRef = firebase.database().ref();

export let connectedRef = firebase.database().ref(".info/connected");

export const userName = prompt("What's your name?");


const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
    dbRef = dbRef.child(roomId);
}else {
    dbRef = dbRef.push();
    window.history.replaceState(null, "Meet", `?id=${dbRef.key}`);
}

export default dbRef;
