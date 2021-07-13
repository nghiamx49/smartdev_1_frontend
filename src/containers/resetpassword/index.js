import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import { BiArrowBack } from "react-icons/bi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ErrorComponent from "../page404/index";

import {
  FPContainer,
  FPCoverContainer,
  FPTitle,
  FPTitleIcon,
  FPTitleName,
  FPContent,
  FPContentName,
  FPContentInputDiv,
  FPContentInput,
  FPContentButton,
  FPContentBorderButton,
  Error,
} from "./style";
import { resetPasswordRequest } from "../../actions/userAction";
import { connect } from "react-redux";
import { toast } from "react-toastify";
const forgotpasswordSchema = yup.object().shape({
  new_password: yup
    .string()
    .required("mật khẩu mới không được để trống")
    .min(5, "mật khẩu ít nhất 6 kí tự. vui lòng nhập lại"),
});

function ResetPassword({ username, resetpassword }) {
  let { slug } = useParams();
  console.log(slug);

  const [error, setError] = useState(false);

  useEffect(() => {
    const checkValid = () => {
      if (username === "" || username !== slug) {
        setError(true);
      }
    };
    checkValid();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(forgotpasswordSchema) });

  const history = useHistory();

  const onSubmit = (dataSubmit) => {
    const response = resetpassword({
      new_password: dataSubmit.new_password,
      username: username,
    });
    if (response.status === 200) {
      history.push("/login");
    }
    return toast(response.message);
  };

  return (
    <>
      {error ? (
        <ErrorComponent />
      ) : (
        <FPCoverContainer>
          <FPContainer>
            <FPTitle>
              <FPTitleIcon>
                <Link to="/forgotpassword">
                  <BiArrowBack color="#FD5F32" style={{ fontSize: "25px" }} />
                </Link>
              </FPTitleIcon>
              <FPTitleName>Thiếp Lập Mật Khẩu</FPTitleName>
            </FPTitle>
            <FPContent>
              <FPContentName>Tạo mật khẩu mới</FPContentName>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FPContentInputDiv>
                  <FPContentInput
                    type="password"
                    placeholder="nhập mật khẩu mới"
                    {...register("new_password")}
                  />
                </FPContentInputDiv>
                {errors.new_password && (
                  <FPContentInputDiv>
                    <Error>{errors.new_password?.message}</Error>
                  </FPContentInputDiv>
                )}
                <FPContentBorderButton>
                  <FPContentButton>Tiếp theo</FPContentButton>
                </FPContentBorderButton>
              </form>
            </FPContent>
          </FPContainer>
        </FPCoverContainer>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.userReducer.username,
  };
};

const mapDispatchToProps = {
  resetpassword: resetPasswordRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
