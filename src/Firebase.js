import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJ6Ttp5KW_qx7LNMWyE3ECrsWDkEodIco",
  authDomain: "directfruit-f6756.firebaseapp.com",
  databaseURL: "https://directfruit-f6756-default-rtdb.firebaseio.com",
  projectId: "directfruit-f6756",
  storageBucket: "directfruit-f6756.appspot.com",
  messagingSenderId: "281395927474",
  appId: "1:281395927474:web:5a49941f0536022e7c2cab",
  measurementId: "G-S44FLVC9MQ",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const db = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { db };
