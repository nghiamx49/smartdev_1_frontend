const initialState = {
  listProducts: [
    {
      id: 0,
      shopName: "shop Hoang 0",
      linkImage:
        "https://cdn.mediamart.vn/Product/tai-nghe-chup-dau-co-mic-kanen-ip2050-mau-do-den-y72Dcj.png",
      name: "tai nghe 0 day",
      price: 100,
      number: 1,
      status: false,
    },
    {
      id: 1,
      shopName: "shop Hoang 1",
      linkImage:
        "https://cdn.mediamart.vn/Product/tai-nghe-chup-dau-co-mic-kanen-ip2050-mau-do-den-y72Dcj.png",
      name: "tai nghe 0 day",
      price: 100,
      number: 1,
      status: false,
    },
    {
      id: 2,
      shopName: "shop Hoang 2",
      linkImage:
        "https://cdn.mediamart.vn/Product/tai-nghe-chup-dau-co-mic-kanen-ip2050-mau-do-den-y72Dcj.png",
      name: "tai nghe 0 day",
      price: 100,
      number: 1,
      status: false,
    },
    {
      id: 3,
      shopName: "shop Hoang 3",
      linkImage:
        "https://cdn.mediamart.vn/Product/tai-nghe-chup-dau-co-mic-kanen-ip2050-mau-do-den-y72Dcj.png",
      name: "tai nghe 0 day",
      price: 100,
      number: 1,
      status: false,
    },
    {
      id: 4,
      shopName: "shop Hoang 4",
      linkImage:
        "https://cdn.mediamart.vn/Product/tai-nghe-chup-dau-co-mic-kanen-ip2050-mau-do-den-y72Dcj.png",
      name: "tai nghe 0 day",
      price: 100,
      number: 1,
      status: false,
    },
  ],
  total: 750000,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cartReducer;
