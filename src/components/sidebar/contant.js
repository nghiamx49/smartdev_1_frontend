import { GrOverview } from "react-icons/gr";
import { ImUsers } from "react-icons/im";
import { FaUsers, FaMagento } from "react-icons/fa";
import {MdContacts,  MdSettingsApplications,} from "react-icons/md";


export const listLi = [
    {
      icons: GrOverview,
      text: "Products",
      link:"/provider"
    },
    {
      icons: ImUsers,
      text: "Products create",
      link:"/provider/products-create"
    },
    {
      icons: FaUsers,
      text: "Products waiting request",
      link:"/provider/products-request"
    },
  ];
  export const listLiAdmin = [
    {
        icons:GrOverview,
        text:"Approve Providers",
        link : "/admin"
    },
    {
        icons:FaUsers,
        text:"Providers",
        link : "/admin/providers"
    },
    {
        icons:ImUsers,
        text:"Users",
        link : "/admin/users"
    },
   
    {
        icons:MdContacts,
        text:"Products",
        link : "/admin/products"
    },
    {
        icons:FaMagento,
        text:"New Product",
        link : "/admin/new-products"
    },
    {
        icons:MdSettingsApplications,
        text:"Product Rejected",
        link : "/admin/products-rejected"
    },
    
];
