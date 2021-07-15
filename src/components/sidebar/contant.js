import { GrOverview } from "react-icons/gr";
import { ImUsers } from "react-icons/im";
import { FaUsers, FaMagento } from "react-icons/fa";
import {MdContacts,  MdSettingsApplications,} from "react-icons/md";


export const listLi = [
    {
      icons: GrOverview,
      text: "Sản phẩm được bán",
      link:"/provider"
    },
    {
      icons: ImUsers,
      text: "thêm sản phẩm mới",
      link:"/provider/products-create"
    },
    {
      icons: FaUsers,
      text: "Sản phẩm đợi xét duyệt",
      link:"/provider/products-request"
    },
  ];
  export const listLiAdmin = [
    {
        icons:GrOverview,
        text:"New Providers",
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
        text:"Products Rejected",
        link : "/admin/products-rejected"
    },
    {
      icons:MdSettingsApplications,
      text:"Providers Rejected",
      link : "/admin/providers-rejected"
    },
    {
      icons:MdSettingsApplications,
      text:"Users Ban",
      link : "/admin/users-ban"
    },
    
];
