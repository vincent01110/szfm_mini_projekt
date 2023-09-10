import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs, addDoc, deleteDoc, doc, onSnapshot,
    query, where, orderBy, serverTimestamp,
    getDoc, updateDoc
  } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAKyWfVBFwTn8IfVDqzFOeNxYKqdNAecWI",
    authDomain: "quizquest-ecb6d.firebaseapp.com",
    projectId: "quizquest-ecb6d",
    storageBucket: "quizquest-ecb6d.appspot.com",
    messagingSenderId: "11630667233",
    appId: "1:11630667233:web:faf191dbf66d2f00fc5ea0"
  };

initializeApp(firebaseConfig)

const db = getFirestore()

//collection ref
const colRef = collection(db, 'questions')

//get collection data
onSnapshot(colRef, snapshot => {
    let questions = []
    snapshot.docs.forEach((doc) => {
      questions.push({ ...doc.data(), id: doc.id })
    })
    console.log(questions)
  })
  


// add
const addQuestionForm = document.querySelector(".addQuestion")
addQuestionForm.addEventListener('submit', event => {
    event.preventDefault()
    
    addDoc(colRef, {
        question: addQuestionForm.question.value,
        ans1: addQuestionForm.ans1.value,
        ans2: addQuestionForm.ans2.value,
        ans3: addQuestionForm.ans3.value,
        ans4: addQuestionForm.ans4.value,
    }).then(() => {
        addQuestionForm.reset()
    })
})