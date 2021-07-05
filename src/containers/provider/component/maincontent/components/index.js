import React from "react";
import { MainAdminTable, MainAdminStrong } from "../style";

const listLi = [
  {
    name: "Ao Quan Tre Em",
      category_name: "Ao Quan",
      provider_name: "store1",
      unit_price: 150000,
      number_of_sold: 300,
      product_description: "ao quan danh cho tre em cac kieu bla bla",
      product_images: [
        "https://vinakids.vn/hinhanh/tintuc/tim-hieu-ve-thi-truong-quan-ao-tre-em-viet-nam-hien-nay-1.jpg",
        "https://honikids.com/wp-content/uploads/2019/01/tim-dai-ly-quan-ao-tre-em-thai-lan.jpg",
      ]
  },
];
function UserTable() {
  return (
    <MainAdminTable>
      <thead>
        <tr>
          <th>Products Name</th>
          <th>category name</th>
          <th>price product</th>
          <th>number of sold</th>
          <th>product descrition</th>
          <th>product images</th>
        </tr>
      </thead>
      <tbody>
        {listLi.map((item, index) => (
          <tr>
            <td>
              <MainAdminStrong>{item.name}</MainAdminStrong>
            </td>
            <td>
              <MainAdminStrong>{item.category_name}</MainAdminStrong>
            </td>
            <td>
              <MainAdminStrong>{item.unit_price}</MainAdminStrong>
            </td>
            <td>
              <MainAdminStrong>{item.number_of_sold}</MainAdminStrong>
            </td>
            <td>
              <MainAdminStrong>{item.product_description}</MainAdminStrong>
            </td>
            <td>
              <MainAdminStrong>
                  <img height="60px"  width="60px" src={item.product_images[0]} alt="dkjfhgkdjfg"/>
                  <img height="60px"  width="60px" src={item.product_images[1]} alt="dkjfhgkdjfg"/>
              </MainAdminStrong>
            </td>
          </tr>
        ))}
      </tbody>
    </MainAdminTable>
  );
}

export default UserTable;
