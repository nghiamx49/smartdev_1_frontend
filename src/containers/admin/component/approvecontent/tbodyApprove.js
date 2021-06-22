import React from 'react'

import {MainAdminStrong,MainAdminSpan,MainAdminText,MainAdminFlex, ButtonApprove, ButtonRefuse} from "./style"

export default function TbodyApprove() {
    return (
        <>
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
        </>
    )
}
