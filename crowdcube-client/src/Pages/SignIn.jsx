import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";

const SignIn = () => {

    const { signInWithGoogle, signInUser, setUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signInUser(email, password)
            .then(result => {
                // console.log(`signed in user`, result.user);
                e.target.reset();
                setUser(result.user);
                toast.success('Login successful.')
                const from = location.state?.from?.pathname || '/';
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(`${error.code}`)
            })
    }


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                // console.log(`Google Login User`, result.user);
                toast.success('Sign In Successful!')
                const from = location.state?.from?.pathname || '/';
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log('My error when logged in with Google is', error.message);
            })
    }


    return (
        <div className="flex justify-center items-center  bg-primary/10 md:min-h-screen py-10">
            <div className="">
                <div className="text-center">
                    <h1 className="text-3xl font-medium text-primary mb-5">Login now!</h1>
                </div>

                <div className="card bg-primary/20 md:w-full w-96 mx-auto max-w-md shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body md:px-20 p-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                name="email" placeholder="email" className="input input-bordered "

                                required />
                            {/* onChange={(e) => setEmail(e.target.value)} */}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                {/* <Link
                                    state={{ email }}
                                    to='/forgot-password'
                                    className="label-text-alt link link-hover">
                                    Forgot password?
                                </Link> */}
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-gradient-to-r from-primary to-fourth text-white mb-4 hover:bg-primary/60 border-none">Login</button>
                        </div>

                        <p>Don&apos;t have an account? <br />Please <Link className="btn-link text-primary " to='/register'>Register.</Link></p>

                        <p>or,</p>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline border-primary hover:bg-primary/50 hover:text-black">Login With Google <FcGoogle size={20} /></button>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignIn;