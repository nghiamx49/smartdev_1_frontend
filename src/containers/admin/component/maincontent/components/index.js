import React from "react";
import { MainAdminTable, MainAdminStrong } from "../style";

const listLi = [
  {
    name: "huynh huu hieu",
    address: "ngo quyen da nang",
    birthday: "03-06-2020",
    email: "hieu@gmail.com",
    phone: "0987654321",
  },
];
function UserTable() {
  return (
    <MainAdminTable>
      <thead>
        <tr>
          <th>User name</th>
          <th>Address</th>
          <th>Birthday</th>
          <th>Email</th>
          <th>Phone number</th>
        </tr>
      </thead>
      <tbody>
        {listLi.map((item, index) => (
          <tr>
            <td>
              <MainAdminStrong>{item.name}</MainAdminStrong>
            </td>
            <td>
              <MainAdminStrong>{item.address}</MainAdminStrong>
            </td>
            <td>
              <MainAdminStrong>{item.birthday}</MainAdminStrong>
            </td>
            <td>
              <MainAdminStrong>{item.email}</MainAdminStrong>
            </td>
            <td>
              <MainAdminStrong>{item.phone}</MainAdminStrong>
            </td>
          </tr>
        ))}
      </tbody>
    </MainAdminTable>
  );
}

export default UserTable;
