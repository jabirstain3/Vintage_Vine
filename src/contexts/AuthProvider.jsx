import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/FireBaseAuth";
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState( null );
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    // Creat user
    const createUser =(email, password) =>{
        return  createUserWithEmailAndPassword(auth, email, password);
    }

    // Authintication
    const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleUser = () =>{
            return signInWithPopup(auth, googleProvider);
        }

    const facebookUser = () =>{
        return signInWithPopup(auth, facebookProvider);
    }

    // log out
    const logOut = () => {
        return signOut(auth);
    }

    //Observe auth state change
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentuser =>{
            if(currentuser){
                setUser(currentuser);
                // console.log(currentuser);
            }
        });
        
        return ()=> {
            unSubscribe();
        }
    },[])

    const authInfo = { user, createUser, googleUser, facebookUser, logInUser, logOut};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;
