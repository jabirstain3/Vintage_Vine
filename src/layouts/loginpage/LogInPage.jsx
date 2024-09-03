import { useContext, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Batn from "../../components/Batn";
import { AuthContext } from "../../contexts/AuthProvider";
// import AuthProvider from "../../contexts/AuthProvider";




const LogInPage = () => { 

    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    const { logInUser, googleUser, /*facebookCreateUser*/ }= useContext( AuthContext);

    const handelLogInWithEmail = (e) =>{

        e.preventDefault();
        // console.log(e);

        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        logInUser(email, password)
        .then((result) =>{
            console.log(result.user);
            e.target.reset();
            navigate('/');
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }

    const handelLogInWithGoogle = () => {
        googleUser()
        .then((result) =>{
            console.log(result.user);
            navigate('/');
        })
        .catch((error)=>{
            console.log(error.message);
        })
        console.log("Google");
        
    }

    const handelLogInWithFacebook = () => {
        // facebookCreateUser();
        console.log("Facebook");
        
    }

    return (
            <div className="w-full h-screen flex justify-center items-center">

                <div className="w-[300px] sm:w-[525px] rounded-2xl sm:rounded-3xl py-[40px] sm:py-[60px] px-10 sm:px-14 grid justify-center bg-primary" >
                    <h1 className="text-center font-bold text-2xl sm:text-5xl mb-8 sm:mb-10">LOG IN</h1>

                    <form className="grid items-center" onSubmit={handelLogInWithEmail}>
                        <input name="email" type="email" placeholder="E-mail..." className="w-[256px] sm:w-[360px] h-fit rounded-md mb-4 px-3 sm:px-4 py-1 sm:py-2 text-md sm:text-xl" required/>

                        <div className="relative">
                            <input className="w-[256px] sm:w-[360px] h-fit rounded-md px-2 sm:px-4 py-1 sm:py-2 text-md sm:text-xl"  type={show ? 'text' : 'password'} name="password" placeholder="Password..." required />
                            <span className='absolute top-2 sm:top-3 right-2 cursor-default text-xs sm:text-sm' onClick={() => setShow(!show)}>{ show ? "hide" : "show"}</span>
                        </div>

                        <div className="flex justify-between items-center my-1 text-sm sm:text-md">
                            <div className="">
                                <input type="checkbox" name="remembered"/>
                                <label className="ml-1">Remember me</label>
                            </div>
                            <p className="">Forgot Password?</p>
                        </div>

                        <Batn text='Log In' classname="my-3 sm:my-5 py-1 sm:py-2 px-6 sm:px-8 text-lg" type="submit"/>
                    </form>

                    <div className="flex items-center justify-center">
                        <div className="border-t border-black flex-grow"></div>
                        <span className="px-2 sm:px-3  text-xs sm:text-md">Or log in with</span>
                        <div className="border-t border-black flex-grow"></div>
                    </div>

                    <div className="grid gap-3 sm:gap-4 my-3 sm:my-5">
                        <button className="w-44 mx-auto border border-black flex justify-center items-center gap-1 bg-white text-black rounded-3xl py-2  text-md sm:text-lg font-semibold" onClick={handelLogInWithGoogle}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
                            <span>Google</span>
                        </button>
                        <button className="w-44 mx-auto border border-black flex justify-center items-center gap-1 bg-white text-black rounded-3xl  py-2  text-md sm:text-lg font-semibold" onClick={handelLogInWithFacebook}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path></svg>
                            <span>facebok</span>
                        </button>
                    </div>

                    <p className=" text-center text-sm sm:text-lg">Dont Have an account? <NavLink className={'hover:text-black '} to={'/signup'}>Register Now!</NavLink></p>

                </div>

            </div>
    );
};

export default LogInPage;