import { useEffect, useRef } from "react";

const PaypalButton = ({ productName, totalFee, handleSuccess }) => {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: `Thanh toán đơn hàng cho sản phẩm ${productName}}`,
                amount: {
                  currency_code: "USD",
                  value: Math.round(totalFee / 23000).toFixed(2),
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          handleSuccess(true);
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  });

  return <div ref={paypal}></div>;
};

export default PaypalButton;
