// 必要な関数を import
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0THC3vHdaWJLksjlu--oNoGkTVhBrSrU",
  authDomain: "api-teach.firebaseapp.com",
  projectId: "api-teach",
  storageBucket: "api-teach.appspot.com",
  messagingSenderId: "934440887449",
  appId: "1:934440887449:web:eca23fc324153051b5c408",
  measurementId: "G-YTWDLCKX45",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
