import "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    reset, // Import the reset function
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:4004/user/login", data);
      toast.success("Login Successful");
      localStorage.setItem("Users", JSON.stringify(res.data.user));
      reset(); // Clear the form fields
      document.getElementById("my_modal_3").close(); // Close the modal
    } catch (err) {
      toast.error("Error: " + (err.response?.data?.message || "Unknown error"));
    }
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        {/* Close the modal */}
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => {
            reset(); // Clear the form fields when modal is closed
            document.getElementById("my_modal_3").close();
          }}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">Login</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div>
            <label>Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              className="input input-bordered w-full"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
          <button className="btn btn-primary w-full">Login</button>
        </form>
        {/* Link to Signup */}
        <p className="mt-4 text-center">
          Not registered?{" "}
          <Link
            to="/signup"
            className="underline text-blue-500"
            onClick={() => {
              reset(); // Clear the form fields when navigating to signup
              document.getElementById("my_modal_3").close();
            }}
          >
            Signup
          </Link>
        </p>
      </div>
    </dialog>
  );
}

export default Login;
