import * as yup from "yup";

export const userRegisterSchema = yup.object().shape({
  fullname: yup.string().required("họ tên không được để trống"),
  username: yup.string().required("tên đăng nhập không được để trống"),
  password: yup.string().required("mật khẩu không được để trống"),
  confirmPassword: yup.string().required("mật khẩu cần được xác nhận"),
  address: yup.string().required("địa chỉ không được để trống"),
  phone_number: yup.string().required("số điện thoại không được để trống"),
  email: yup
    .string()
    .email("email is invalid")
    .required("email không được để trồng"),
  zipcode: yup.string().required("zipcode không được để trống"),
});

export const providerRegisterSchema = yup.object().shape({
  owner: yup.string().required("họ tên không được để trống"),
  username: yup.string().required("tên đăng nhập không được để trống"),
  password: yup.string().required("mật khẩu không được để trống"),
  confirmPassword: yup.string().required("mật khẩu cần được xác nhận"),
  address: yup.string().required("địa chỉ không được để trống"),
  phone_number: yup.string().required("số điện thoại không được để trống"),
  email: yup
    .string()
    .email("email is invalid")
    .required("email không được để trồng"),
  store_name: yup.string().required("tên cửa hàng không được để trống"),
});
