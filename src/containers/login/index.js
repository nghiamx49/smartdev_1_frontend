import React from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { submitLogin } from "../../actions/authenticateAction";

import { LoginContainer, Logo, LoginForm, LoginButton } from "./style";
import logo from "../../assests/img/logo.png";
import { connect } from "react-redux";

<<<<<<< refs/remotes/origin/nghia
import { toast, ToastContainer } from "react-toastify";
=======
>>>>>>> local
import "react-toastify/dist/ReactToastify.css";

const loginSchema = yup.object().shape({
  username: yup.string().required("username không được để trống"),
  password: yup.string().required("password không được để trống"),
});

const Login = ({ loading, login }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

<<<<<<< refs/remotes/origin/nghia
  const { login } = authenticateService;

  const [message, setMessage] = useState(null);

  const onSubmit = async (data) => {
    const result = await login(data);
    console.log(result);
    if (result.status === 401) {
      setMessage(result.message);
    } else {
      loginSuccess(result);
    }
  };

  console.log(message);

=======
  const onSubmit = async (data) => {
    await login(data);
  };
>>>>>>> local
  return (
    <>
      {message && toast.error(message)}
      <ToastContainer
        // position="top-center"
        // autoClose={false}
        // hideProgressBar={false}
        // newestOnTop={false}
        // closeOnClick
        // rtl={false}
        // pauseOnFocusLoss={false}
        // pauseOnHover
        limit={1}
        onClick={() => setMessage(null)}
      />
      <LoginContainer>
        <Logo src={logo} />
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <h2 style={{ fontWeight: 400 }}>Đăng nhập</h2>
          <input
            type="text"
            {...register("username")}
            placeholder="tên đăng nhập"
          />
          <span>{errors.username?.message}</span>
          <input
            type="password"
            {...register("password")}
            placeholder="mật khẩu"
          />
          <span>{errors.password?.message}</span>
<<<<<<< refs/remotes/origin/nghia
          <LoginButton>Đăng nhập</LoginButton>
=======
          <LoginButton disabled={loading}>
            {loading ? "Loading..." : "Đăng nhập"}
          </LoginButton>
>>>>>>> local
          <a href="#forgotpassword">Quên Mật Khẩu</a>
          <hr />
          <p style={{ textAlign: "center" }}>
            Chưa có tài khoản? <Link to="/register">Đăng ký</Link> ngay!
          </p>
        </LoginForm>
      </LoginContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loadingReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(submitLogin(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
