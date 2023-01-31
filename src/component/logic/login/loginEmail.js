import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth'
import { auth } from '../../../config/firebase/config'

export default async function loginEmail() {
    const auths = getAuth()
    if (isSignInWithEmailLink(auths, window.location.href)) {
      let email = window.localStorage.getItem('emailForSigin')
      console.log(email );
        if (!email) {
            email = window.prompt('Please provide your email for comfirmation')
        }
        signInWithEmailLink(auths, email, window.location.href)
        .then((result) => {
          // Clear email from storage.
          window.localStorage.removeItem('emailForSigin');
         
        })
        .catch((error) => {
          console.log('error');
        });
    }
}