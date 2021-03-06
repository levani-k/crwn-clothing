import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from 'firebase/firestore'

import { Category } from 'store/categories/category.types'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCwoP6lIaPq7MKB1I91Tv0rZEvzspV6vO0',
  authDomain: 'crwn-db-28200.firebaseapp.com',
  projectId: 'crwn-db-28200',
  storageBucket: 'crwn-db-28200.appspot.com',
  messagingSenderId: '622307896',
  appId: '1:622307896:web:731148866dd210b44cd4cd',
  measurementId: 'G-SYWT8R7T80',
}

// Initialize Firebase
initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider)
}

export const db = getFirestore()

export type ObjectToAdd = {
  title: string
}

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[],
): Promise<void> => {
  const collectionRef = collection(db, collectionKey)

  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('done')
}

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Category)
}

export type AdditionalInformation = {
  displayName?: string
}

export type UserData = {
  createdAt: Date
  displayName: string
  email: string
}

export const createUserDocumentfromAuth = async (
  userAuth: User,
  additionalInfo = {} as AdditionalInformation,
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      })
    } catch (error) {
      console.log('error creating user: ', error)
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>
}

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback)
}

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe()
        resolve(userAuth)
      },
      reject,
    )
  })
}
