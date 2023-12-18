import { getFirestore, collection } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

onAuthStateChanged(getAuth(), (user) => {
  const username = collection(db, `users/${user.uid}/username`)
  console.log({ user, username })
})
