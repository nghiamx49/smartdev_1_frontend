const initialState = {
  allProducts: [
    {
      id: 1,
      name: "Ao Quan Tre Em",
      category_name: "Ao Quan",
      provider_name: "store1",
      unit_price: 150000,
      number_of_sold: 300,
      product_description: "ao quan danh cho tre em cac kieu bla bla",
      product_images: [
        "https://vinakids.vn/hinhanh/tintuc/tim-hieu-ve-thi-truong-quan-ao-tre-em-viet-nam-hien-nay-1.jpg",
        "https://honikids.com/wp-content/uploads/2019/01/tim-dai-ly-quan-ao-tre-em-thai-lan.jpg",
      ],
      rating: [
        {
          id: 1,
          username: "user1",
          avatar_source:
            "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
          start: 5,
          comment: "san phat tot",
          create_at: "23/06/2021",
        },
        {
          id: 1,
          username: "user2",
          avatar_source:
            "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
          start: 5,
          comment: "san phat tot",
          create_at: "23/06/2021",
        },
      ],
    },
    {
      id: 2,
      name: "Ao Quan Nguoi Lon",
      category_name: "Ao Quan",
      provider_name: "store2",
      unit_price: 150000,
      number_of_sold: 200,
      product_description: "ao quan danh cho nguoi lon cac kieu bla bla",
      product_images: [
        "https://vinakids.vn/hinhanh/tintuc/tim-hieu-ve-thi-truong-quan-ao-tre-em-viet-nam-hien-nay-1.jpg",
        "https://honikids.com/wp-content/uploads/2019/01/tim-dai-ly-quan-ao-tre-em-thai-lan.jpg",
      ],
      rating: [
        {
          id: 1,
          username: "user1",
          avatar_source:
            "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
          start: 5,
          comment: "san phat tot",
          create_at: "23/06/2021",
        },
        {
          id: 1,
          username: "user2",
          avatar_source:
            "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
          start: 5,
          comment: "san phat tot",
          create_at: "23/06/2021",
        },
      ],
    },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
