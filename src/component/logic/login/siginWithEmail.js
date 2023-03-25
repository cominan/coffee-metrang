import { getAuth, sendSignInLinkToEmail } from 'firebase/auth'

export default async function sendLinkToEmail( email, actionCodeSettings ) {
    const auths = getAuth()
    await sendSignInLinkToEmail(auths, email, actionCodeSettings)
        .then(() => {
            alert('send link success,please check your email')
            window.localStorage.setItem('emailForSigin', email)

        })
        .catch(error => {
            const errorCode = error.code
            console.log('error send email');
        })
}