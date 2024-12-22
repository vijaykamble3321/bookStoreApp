import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
    document.getElementById('my_modal_3').close(); // Close the modal after successful submission
  };

  const openModal = () => {
    document.getElementById('my_modal_3').showModal();
  };

  const closeModal = () => {
    document.getElementById('my_modal_3').close();
  };

  return (
    <div>
      {/* Button to open the modal */}
     

      {/* Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          {/* Close button */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeModal}
          >
            ✕
          </button>

          <h3 className="font-bold text-lg">Hello!</h3>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4 space-y-2">
              <label>Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="mt-4 space-y-2">
              <label>Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Login button */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-900 duration-200"
              >
                Login
              </button>

              <p>
                Not Reg?{" "}
                <Link to="/signup" className="underline text-red-600 cursor-pointer">
                  Signup!!
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
