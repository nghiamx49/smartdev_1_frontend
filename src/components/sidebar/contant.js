import { GrOverview } from "react-icons/gr";
import { ImUsers } from "react-icons/im";
import { FaUsers } from "react-icons/fa";


export const listLi = [
    {
      icons: GrOverview,
      text: "Products",
      link:""
    },
    {
      icons: ImUsers,
      text: "Products sold",
      link:"/provider/products-sold"
    },
    {
      icons: FaUsers,
      text: "Products waiting request",
      link:"/provider/products-waiting-request"
    },
  ];