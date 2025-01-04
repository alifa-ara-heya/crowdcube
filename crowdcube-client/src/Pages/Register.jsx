import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Register = () => {

    const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [showPassword, setShowPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!passwordRegex.test(password)) {
            setErrorMsg('Please use at least one uppercase, one lowercase, one number and one special character(!,@,&) and also make sure that the length of the password is more than six characters.')
            return;
        }

        // create user
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(`user with sign in`, createdUser);

                // setUser(createUser);

                // save user information to mongodb
                const newUser = { name, email }
                fetch('https://assignment-10-crowdcube-server.vercel.app/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('user created to db', data);
                        if (data.insertedId) {
                            toast.success('Registration successful.')
                        }
                    })

                // update profile
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        //refreshing user to get updated profile
                        setUser({ ...createdUser, displayName: name, photoURL: photo });
                        // toast.success('Registration successful.')
                        const from = location?.state?.from?.pathname || '/';
                        navigate(from, { replace: true });
                    })
                    .catch((error => {
                        console.log(`Error updating profile`, error);
                    }))
            })
            .catch(error => {
                console.log(`Error in registration`, error);
                toast.error(error.message);
            })
    }

    return (
        <div className="flex justify-center items-center bg-primary/10 md:min-h-screen py-10">
            <div className="">
                <div className="text-center">
                    <h1 className="text-3xl font-medium text-primary mb-5">Register now!</h1>
                </div>

                <div className="card bg-primary/20 md:w-full w-96 mx-auto max-w-md shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body md:px-20 p-10">
                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name"
                                name="name"
                                className="input input-bordered " required />
                        </div>
                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                name="email" placeholder="email" className="input input-bordered " required />
                        </div>
                        {/* photo url */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered " required />
                        </div>
                        {/* password */}
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                placeholder="password"
                                className="input input-bordered" required />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className='btn btn-xs absolute right-2 top-12'>
                                {
                                    showPassword ? <FaEyeSlash /> : <FaEye />
                                }
                            </button>
                            {
                                errorMsg && <p className='text-red-600 text-xs mt-6'>{errorMsg}</p>
                            }
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-primary hover:bg-primary/60 border-none text-white mb-4">Register</button>
                        </div>

                        <p>Already have an account? Please <Link className="btn-link text-blue-900" to='/sign-in'>SignIn.</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;