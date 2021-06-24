const initialState = {
  allProviders: [
    {
      username: "provider1",
      avatar_source:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      address: "Hai Chau, Da nang",
      phone_number: "0977813xxx",
      email: "provider1@gmail.com",
      store_name: "store1",
      status: "active",
    },
    {
      username: "provider2",
      avatar_source:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      address: "Hai Chau, Da nang",
      phone_number: "0977814xxx",
      email: "provider2@gmail.com",
      store_name: "store2",
      status: "pending",
    },
    {
      username: "provider3",
      avatar_source:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      address: "Lien Chieu, Da nang",
      phone_number: "0977815xxx",
      email: "provider3@gmail.com",
      store_name: "store3",
      status: "reject",
    },
  ],
  allUsers: [
    {
      username: "user1",
      avatar_source:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      address: "Hai Chau, Da nang",
      phone_number: "0977811xxx",
      email: "user1@gmail.com",
      full_name: "Mai Xuan Nghia",
      status: "active",
    },
    {
      username: "user2",
      avatar_source:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      address: "Hai Chau, Da nang",
      phone_number: "0977816xxx",
      email: "user2@gmail.com",
      full_name: "Mai Xuan Nghia",
      status: "ban",
    },
    {
      username: "user3",
      avatar_source:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      address: "Hai Chau, Da nang",
      phone_number: "0977817xxx",
      email: "user3@gmail.com",
      full_name: "Mai Xuan Nghia",
      status: "active",
    },
  ],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default adminReducer;
