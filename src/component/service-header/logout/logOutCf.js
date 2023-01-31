import { getAuth, signOut } from "firebase/auth";

export default function logoutCoffee () {
    const auth = getAuth()
    signOut(auth).then(() => {
        console.log('success');
    })
    .catch(() => console.log('fail'))
}