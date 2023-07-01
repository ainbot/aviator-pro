import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth';

const firebaseConfig1 = {
  apiKey: "AIzaSyDNBeD74W8-CNmLX_ChQchxq0qsmJeoBoE",
  authDomain: "aviator-ainbot-267b3.firebaseapp.com",
  projectId: "aviator-ainbot-267b3",
  storageBucket: "aviator-ainbot-267b3.appspot.com",
  messagingSenderId: "473523611344",
  appId: "1:473523611344:web:0a017285856a54f58960d5"
};

const firebaseConfig2 = {
  apiKey: "AIzaSyBTKpMYTQqKzDNm4hML05iqtWScNpP13nE",
  authDomain: "agentes-396b9.firebaseapp.com",
  databaseURL: "https://agentes-396b9-default-rtdb.firebaseio.com",
  projectId: "agentes-396b9",
  storageBucket: "agentes-396b9.appspot.com",
  messagingSenderId: "430692585388",
  appId: "1:430692585388:web:40af4c971e9858bbf1f409"
};

const firebaseApp1 = initializeApp(firebaseConfig1);
const firebaseApp2 = initializeApp(firebaseConfig2, 'db2');

const auth1 = getAuth(firebaseApp1);
const auth2 = getAuth(firebaseApp2);

// Define a persistência da sessão do navegador
setPersistence(auth1, browserSessionPersistence);
setPersistence(auth2, browserSessionPersistence);

export { firebaseApp1, firebaseApp2, auth1, auth2 };
