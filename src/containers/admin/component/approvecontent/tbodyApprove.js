import React from 'react'
import PropTypes from 'prop-types';

import {MainAdminStrong,MainAdminSpan,MainAdminText,MainAdminFlex, ButtonApprove, ButtonRefuse} from "./style"


TbodyApprove.propTypes = {
    Provider :  PropTypes.shape({
        Username : PropTypes.string,
        Address : PropTypes.string,
        Name : PropTypes.string,
        Email : PropTypes.string,
        Phone_Number : PropTypes.string,
        Owner : PropTypes.string,
        date : PropTypes.string,
    })
}

export default function TbodyApprove(props) {
    const {Provider} = props ;
    console.log(props);
    return (
        <>
            <tr>
                <td>
                    <MainAdminFlex>
                        <img height="30" width="30" src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"  alt="dfkjghdfg"/>
                        <MainAdminText>
                        <MainAdminStrong>{Provider.Username}</MainAdminStrong>
                        <MainAdminSpan>create {Provider.date}</MainAdminSpan>
                        </MainAdminText>
                    </MainAdminFlex>
                </td>
                <td>
                        <MainAdminText>
                        <MainAdminStrong>{Provider.Address}</MainAdminStrong>
                        <MainAdminSpan>create {Provider.date}</MainAdminSpan>
                        </MainAdminText>
                </td>
                <td>
                        <MainAdminText>
                        <MainAdminStrong>{Provider.Name}</MainAdminStrong>
                        <MainAdminSpan>create {Provider.date}</MainAdminSpan>
                        </MainAdminText>
                </td>
                <td>
                        <MainAdminText>
                        <MainAdminStrong>{Provider.Email}</MainAdminStrong>
                        <MainAdminSpan>create {Provider.date}</MainAdminSpan>
                        </MainAdminText>
                </td>
                <td>
                        <MainAdminText>
                        <MainAdminStrong>{Provider.Phone_Number}</MainAdminStrong>
                        <MainAdminSpan>create {Provider.date}</MainAdminSpan>
                        </MainAdminText>
                </td>
                <td>
                        <MainAdminText>
                        <MainAdminStrong>{Provider.Owner}</MainAdminStrong>
                        <MainAdminSpan>create {Provider.date}</MainAdminSpan>
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
