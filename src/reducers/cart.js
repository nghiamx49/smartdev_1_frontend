const initialState = {
  listProducts: [
    {
      product_id: 1,
      product_name: "Ao Quan Tre Em",
      quantity_purchased: 2,
      unit_price: 150000,
    },
    {
      product_id: 2,
      product_name: "Ao Quan Nguoi Lon",
      quantity_purchased: 3,
      unit_price: 150000,
    },
  ],
  total: 750000,
};

const cartReducer = (state = initialState, action) => {};

export default cartReducer;
