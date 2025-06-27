import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fakeLogin } from "../Redux/auth/auhtSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading } = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    dispatch(fakeLogin(data)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        if (res.payload.role === "admin") navigate("/admin");
        else navigate("/");
      }
    });
  };

  return (
    <>
    <Navbar></Navbar>
    <br /><br /><br /><br />
    <div className="max-w-md mx-auto border rounded-xl shadow p-16">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <input
          className="w-full border p-2 rounded"
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded "
          type="submit"
          disabled={loading}
        >
          {loading ? "Caricamento..." : "Login"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
    </>
  );
}

export default LoginForm;