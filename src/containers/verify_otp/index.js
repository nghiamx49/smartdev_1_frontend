import React, { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
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
import { connect } from "react-redux";

const forgotpasswordSchema = yup.object().shape({
  otp: yup.string().required("otp không được để trống"),
});

function VerifyOTP({ props }) {
  const history = useHistory();

  useEffect(() => {
    const checkValid = (otp, history) => {
      if (String(otp) === "") {
        return history.push("/forgotpassword");
      }
    };
    checkValid(props.otp, history);
  }, [history, props.otp]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(forgotpasswordSchema) });

  const onSubmit = (dataSubmit) => {
    if (parseInt(dataSubmit.otp) === props.otp) {
      history.push(`/reset_password/${props.username}`);
    } else {
      return toast(<h3 color="black">otp không hợp lệ</h3>);
    }
  };

  return (
    <FPCoverContainer>
      <FPContainer>
        <FPTitle>
          <FPTitleIcon>
            <Link to="/forgotpassword">
              <BiArrowBack color="#FD5F32" style={{ fontSize: "25px" }} />
            </Link>
          </FPTitleIcon>
          <FPTitleName>Vui Lòng Nhập Mã Xác Minh</FPTitleName>
        </FPTitle>
        <FPContent>
          <FPContentName>
            Mã xác minh của bạn đã được gửi đến email
          </FPContentName>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FPContentInputDiv>
              <FPContentInput
                type="number"
                placeholder="nhập OTP"
                {...register("otp")}
              />
            </FPContentInputDiv>
            {errors.otp && (
              <FPContentInputDiv>
                <Error>{errors.otp?.message}</Error>
              </FPContentInputDiv>
            )}
            <FPContentBorderButton>
              <FPContentButton>Tiếp theo</FPContentButton>
            </FPContentBorderButton>
          </form>
        </FPContent>
      </FPContainer>
    </FPCoverContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    props: state.userReducer,
  };
};

export default connect(mapStateToProps, null)(VerifyOTP);
