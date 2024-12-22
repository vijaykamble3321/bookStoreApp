 import React from 'react'
 import { Link } from 'react-router-dom';
import Login from './Login';
 function Signup() {
   return (
    <>
     <div className='flex h-scren item-center justify-center '>
     <div  className="w-[800px]">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">SignUp!!</h3>
    <div className="mt-4 space-y-2">
    <span>Name</span>
    <br/>
    <input type="text"
    
    placeholder="Enter your Name" className="w-80 px-3 border rounder-md outline-none"/>
  </div>
   {/* newwwwwww */}
    <div className="mt-4 space-y-2">
    <span>Email</span>
    <br/>
    <input type="email"
    
    placeholder="Enter your Email" className="w-80 px-3 border rounder-md outline-none"/>
  </div>
  <div className="mt-4 space-y-2">
    <span>Password</span>
    <br/>
    <input type="text"
    
    placeholder="Enter your Password" className="w-80 px-3 border rounder-md outline-none"/>
  </div>
  {/*botton*/}
  <div className='flex justify-around mt-4'>
  <button className='bg-pink-600 text-white  hover:bg-pink-900 duration-200'>
        Signup
        </button>
    <p className='text-xl'>Have Account_{" "}
        <button  to="/"
        className='underline text-red-600 cursor-pointer'
        onClick={()=>
          document.getElementById("my_modal_3").showModal()
   }
   >
           Login</button>{" "}
           <Login/>
    </p>
  </div>
  </div>
</div>
     </div>
     </>
   );
 }

 export default Signup
