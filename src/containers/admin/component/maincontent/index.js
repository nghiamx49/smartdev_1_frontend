import React from "react";
import {
  MainAdminContainer,
  MainAdminHeader,
  MainAdminHeaderRight,
  MainAdminHeaderUser,
  MainAdminHeaderSearch,
  MainAdminContent,
  MainAdminAllUser,
  MainAdmintextfunction,
  MainAdminFlex,
  MainAdminPage
} from "./style";
import { AiOutlineSortAscending, AiFillFilter,AiOutlineSearch,AiFillCaretDown } from "react-icons/ai";
import {GrPrevious,GrNext} from 'react-icons/gr'
import UserTable from "./components/User";
import ProviderTable from "./components/Provider";
import Approveproviders from "./components/approveproviders";
import Product from "./components/product";
import NewProduct from "./components/newProduct";
import { apiClientPatch } from "../../../../apiServices/axiosAdmin";


function MainAdmin(props) {
  const {menu} = props
  function setLayout (com){
    switch(com){
      case "Users":
        return <UserTable/>
      case "Providers":
          return <ProviderTable/>
      case "Approveproviders":
        return <Approveproviders/>
      case "Products":
        return <Product/>
      case "NewProduct":
        return <NewProduct/>
         
      default:
        return <Approveproviders/>
    }
  }
  async function handleStatusProvider (id , status) {
    console.log(id, status);
    let data = JSON.stringify({
      "id": id,
      "status": status
    });
    const message = await apiClientPatch("/admin/providers/update_status" , "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYyNTcwMzA1MiwiaWF0IjoxNjI1NjE2NjUyfQ.Ztj4PWr5JrCYQ3OZKh8nVLaJcHeaO6sEdT84qjWIMdM" , 12 , "Allowed");
    console.log(message);
  }
  return (
    <MainAdminContainer>
      <MainAdminHeader>
        <h3>Tickets</h3>
        <MainAdminHeaderRight>
          <MainAdminHeaderSearch>

            <p><AiOutlineSearch/> <span>search</span></p>
          </MainAdminHeaderSearch>
          <MainAdminHeaderUser>
            <p>admin name</p>
            <img
              src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"
              alt="dfkjghdfg"
            />
          </MainAdminHeaderUser>
        </MainAdminHeaderRight>
      </MainAdminHeader>
      <button  onClick={handleStatusProvider.bind(this, 12 , "Allowed")}>nfndjkf</button>
      {
        setLayout(menu)
      }
    </MainAdminContainer>
  );
}

export default MainAdmin;
