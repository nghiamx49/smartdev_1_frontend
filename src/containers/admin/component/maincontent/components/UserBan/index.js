import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as all from "../../../../../../actions/adminAction";
import avatar from "../../../../../../assests/img/user-default.png";

import {
  MainAdminContent,
  MainAdminAllUser,
  MainAdmintextfunction,
  MainAdminTable,
  MainAdminStrong,
  MainAdminFlex,
  MainAdminPage,
  ButtonBan,
  ContainerTable,
} from "../../style";
import { AiOutlineSortDescending } from "react-icons/ai";
import { apiClientPatchUser } from "../../../../../../apiServices/axiosAdmin";

function UserBan({ users, pagesUser, token, ...action }) {
  let pagination = [];
  const [pagina, setpagina] = useState([]);
  const [page, setPage] = useState(0);

  async function getData(page) {
    await action.getUser("ban", token, page);
    setPage(page);
  }
  useEffect(() => {
    getData(0);
  }, []);

  useEffect(() => {
    for (var i = 0; i < pagesUser; i++) {
      pagination.push(i);
      console.log(pagination);
    }
    setpagina(pagination);
  }, [pagesUser]);
  async function handleStatusProvider(id) {
    console.log(id);
    const message = await apiClientPatchUser(
      `/admin/users/${id}/not_ban`,
      token,
    );
    getData(page);
  }
  return (
    <MainAdminContent>
      <MainAdminAllUser>
        <h3>ALL USERS BAN</h3>
        <MainAdminFlex>
          <MainAdmintextfunction>
            <AiOutlineSortDescending />{" "}
            <button onClick={action.sort}>sort</button>
          </MainAdmintextfunction>
        </MainAdminFlex>
      </MainAdminAllUser>
      <ContainerTable>
        <MainAdminTable>
          <thead>
            <tr>
              <th>User name</th>
              <th>Address</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Ban</th>
            </tr>
          </thead>
          <tbody>
            {users.length !== 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <MainAdminFlex>
                      <img
                        height="30"
                        width="30"
                        src={user.avatar_source ? user.avatar_source : avatar}
                        alt="avatar"
                      />
                      <MainAdminStrong>{user.username}</MainAdminStrong>
                    </MainAdminFlex>
                  </td>
                  <td>
                    <MainAdminStrong>{user.address}</MainAdminStrong>
                  </td>
                  <td>
                    <MainAdminStrong>{user.full_name}</MainAdminStrong>
                  </td>
                  <td>
                    <MainAdminStrong>{user.email}</MainAdminStrong>
                  </td>
                  <td>
                    <MainAdminStrong>{user.phone_number}</MainAdminStrong>
                  </td>
                  <td>
                    <ButtonBan onClick={() => handleStatusProvider(user.id)}>
                      Allowed User
                    </ButtonBan>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>
                  <h3>No User</h3>
                </td>
              </tr>
            )}
          </tbody>
        </MainAdminTable>
      </ContainerTable>
      <MainAdminPage>
        {pagina.map((page) => (
          <button onClick={() => getData(page)} key={page}>
            {page + 1}
          </button>
        ))}
      </MainAdminPage>
    </MainAdminContent>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.adminReducer.allUsers,
    token: state.authenticateReducer.token,
    pagesUser: state.adminReducer.pagesUsers,
    sortvalue: state.adminReducer.sort,
  };
};

const mapDispatchToProps = {
  getUser: all.getUser,
  sort: all.sortUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBan);
