import React from 'react'
import {MainAdminContainer,
    MainAdminHeader,MainAdminHeaderRight,
    MainAdminHeaderUser,
    MainAdminHeaderSearch,MainAdminContent,MainAdminAllUser,MainAdmintextfunction,MainAdminTable,MainAdminStrong,MainAdminSpan,MainAdminText,MainAdminFlex, ButtonApprove, ButtonRefuse} from "./style"
function Approve() {
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
                        <tr>
                            <td>
                                <MainAdminFlex>
                                    <img height="30" width="30" src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"  alt="dfkjghdfg"/>
                                    <MainAdminText>
                                    <MainAdminStrong>huynh huu hieu</MainAdminStrong>
                                    <MainAdminSpan>create 1 day ago</MainAdminSpan>
                                    </MainAdminText>
                                </MainAdminFlex>
                            </td>
                            <td>
                                    <MainAdminText>
                                    <MainAdminStrong>ngo quyen da nang</MainAdminStrong>
                                    <MainAdminSpan>create 1 day ago</MainAdminSpan>
                                    </MainAdminText>
                            </td>
                            <td>
                                    <MainAdminText>
                                    <MainAdminStrong>03-06-2020</MainAdminStrong>
                                    <MainAdminSpan>create 1 day ago</MainAdminSpan>
                                    </MainAdminText>
                            </td>
                            <td>
                                    <MainAdminText>
                                    <MainAdminStrong>hieu@gmail.com</MainAdminStrong>
                                    <MainAdminSpan>create 1 day ago</MainAdminSpan>
                                    </MainAdminText>
                            </td>
                            <td>
                                    <MainAdminText>
                                    <MainAdminStrong>0987654321</MainAdminStrong>
                                    <MainAdminSpan>create 1 day ago</MainAdminSpan>
                                    </MainAdminText>
                            </td>
                            <td>
                                    <MainAdminText>
                                    <MainAdminStrong>ĐVH</MainAdminStrong>
                                    <MainAdminSpan>create 1 day ago</MainAdminSpan>
                                    </MainAdminText>
                            </td>
                            <td>
                                    <MainAdminText>
                                        <ButtonApprove>Approve</ButtonApprove>
                                        <ButtonRefuse>Refuse</ButtonRefuse>
                                    </MainAdminText>
                            </td>
                        </tr>
                   </tbody>
                    
                </MainAdminTable>
            </MainAdminContent>
        </MainAdminContainer>
    )
}

export default Approve