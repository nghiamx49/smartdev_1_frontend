import React from 'react'

import {MainAdminContainer,
    MainAdminHeader,MainAdminHeaderRight,
    MainAdminHeaderUser,
    MainAdminHeaderSearch,MainAdminContent,MainAdminAllUser,MainAdmintextfunction,MainAdminTable,MainAdminFlex,} from "./style"
import TbodyApprove from './tbodyApprove'

function Approve() {
    const Providers = [
        {
        username : "hoang cute",
        address : "82 Pham Nhu Xuong",
        name : "Đoàn Văn Hoàng",
        email : "H@gmail.com",
        phone_Number : "0339905697",
        owner : "Đvh",
        date : "21-6-2021"
        },
        {
            username : "hoang cute",
            address : "82 Pham Nhu Xuong",
            name : "Đoàn Văn Hoàng",
            email : "H@gmail.com",
            phone_Number : "0339905697",
            owner : "Đvh",
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
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                   </thead>
                   <tbody>
                        {
                            Providers.map((provider) => (
                                <TbodyApprove provider = {provider}/>
                            ))
                        }
                   </tbody>
                </MainAdminTable>
            </MainAdminContent>
        </MainAdminContainer>
    )
}

export default Approve