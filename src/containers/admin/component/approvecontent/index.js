import React from 'react'

import {MainAdminContainer,
    MainAdminHeader,MainAdminHeaderRight,
    MainAdminHeaderUser,
    MainAdminHeaderSearch,MainAdminContent,MainAdminAllUser,MainAdmintextfunction,MainAdminTable,MainAdminFlex,} from "./style"
import TbodyApprove from './tbodyApprove'

function Approve() {
    const Providers = [
        {
        Username : "hoang cute",
        Address : "82 Pham Nhu Xuong",
        Name : "Đoàn Văn Hoàng",
        Email : "H@gmail.com",
        Phone_Number : "0339905697",
        Owner : "Đvh",
        date : "21-6-2021"
        },
        {
            Username : "hoang cute",
            Address : "82 Pham Nhu Xuong",
            Name : "Đoàn Văn Hoàng",
            Email : "H@gmail.com",
            Phone_Number : "0339905697",
            Owner : "Đvh",
            date : "21-6-2021"
            }
    ]
    return (
        <MainAdminContainer>
            <MainAdminHeader>
                <h3>Tickets</h3>
                <MainAdminHeaderRight>
                    <MainAdminHeaderSearch>
                        <p>search</p>
                    </MainAdminHeaderSearch>
                    <MainAdminHeaderUser>
                        <p>admin name</p>
                        <img src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"  alt="dfkjghdfg"/>
                    </MainAdminHeaderUser>
                </MainAdminHeaderRight>
            </MainAdminHeader>
            <MainAdminContent>
                <MainAdminAllUser>
                    <h3>ALL USERS</h3>
                    <MainAdminFlex>
                        <MainAdmintextfunction>icon <span>sort</span></MainAdmintextfunction>
                        <MainAdmintextfunction>icon <span>filter</span></MainAdmintextfunction>
                    </MainAdminFlex>
                </MainAdminAllUser>
                <MainAdminTable>
                   <thead>
                        <tr>
                            <th>Username</th>
                            <th>Address</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone number</th>
                            <th>Owner</th>
                            <th>Status</th>
                        </tr>
                   </thead>
                   <tbody>
                        {
                            Providers.map((provider) => (
                                <TbodyApprove Provider = {provider}/>
                            ))
                        }
                   </tbody>
                </MainAdminTable>
            </MainAdminContent>
        </MainAdminContainer>
    )
}

export default Approve