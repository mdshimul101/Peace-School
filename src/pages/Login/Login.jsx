import React from 'react'
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const imgUrl =
  "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto py-28 lg:py-40 px-4 lg:px-4">
      <div className="lg:flex justify-between overflow-hidden">
        <div className="w-full lg:w-[47%] mb-5 lg:mb-0 hover:scale-105 duration-300">
          <div
            style={{
              backgroundImage: `url(${imgUrl})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "500px",
            }}
            className="flex justify-center items-center bg-[rgb(0,0,0)] "
          >
            <div className="text-pink-200 bg-[rgba(0,0,0,0.5)]  mx-16 p-5">
              <h1 className="text-3xl font-raleWay font-thin text-justify">
                Please, Login for going to the Dashboard and explore more information.
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[47%] border border-pink-200 px-10">
       
          <div className="flex justify-center items-center">
            <div className="w-full">
              <h2 className="text-3xl py-8 text-center text-pink-400">
                Login
              </h2>
              <form  className="">

              <span className='my-2 block'>Email</span>
                <input
                 
                  type="email"
                  placeholder="Enter Your Email"
                  className="py-3 px-2 mb-5 w-full  border border-pink-200"
                />
                
                <span className='my-2 block'>Password</span>
                <input  
                  type="password"
                  placeholder="Enter Your Password"
                  className="py-3 px-2 w-full  border border-pink-200"
                />
                
                

                <div className='mt-10'>
                <Link to={"/dashboard"} className="px-12 py-2 mt-10 w-full block text-center font-semibold text-white bg-pink-500 rounded ">LOGIN</Link>
                </div>
              </form>
              <div className=" mt-1 w-0 h-[2px] bg-slate-500  group-hover:w-full ease-out duration-300"></div>

              <div className="py-3 text-gray-500">
                <p>
                  Do not Have An Account ?{" "}
                  <Link to="/register" className="text-pink-400">
                    Register
                  </Link>
                </p>
              </div>
              <div className="divider">OR</div>

              <div className="flex justify-center items-center bg-pink-200 w-full my-4 lg:w-1/2 mx-auto">
                <FcGoogle />
                <button
                  
                  className="px-3 py-2 text-slate-500  font-raleWay font-semibold"
                >
                  Login with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login;