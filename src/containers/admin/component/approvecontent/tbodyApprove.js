import React from 'react'
import PropTypes from 'prop-types';

import {MainAdminStrong,MainAdminSpan,MainAdminText,MainAdminFlex, ButtonApprove, ButtonRefuse} from "./style"


TbodyApprove.propTypes = {
    provider :  PropTypes.shape({
        username : PropTypes.string,
        address : PropTypes.string,
        name : PropTypes.string,
        email : PropTypes.string,
        phone_Number : PropTypes.string,
        owner : PropTypes.string,
        date : PropTypes.string,
    })
}

export default function TbodyApprove(props) {
    const {provider} = props ;
    console.log(props);
    return (
        <>
            <tr>
                <td>
                    <MainAdminFlex>
                        <img height="30" width="30" src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"  alt="dfkjghdfg"/>
                        <MainAdminText>
                        <MainAdminStrong>{provider.username}</MainAdminStrong>
                        <MainAdminSpan>create {provider.date}</MainAdminSpan>
                        </MainAdminText>
                    </MainAdminFlex>
                </td>
                <td>
                        <MainAdminText>
                        <MainAdminStrong>{provider.address}</MainAdminStrong>
                        <MainAdminSpan>create {provider.date}</MainAdminSpan>
                        </MainAdminText>
                </td>
                <td>
                        <MainAdminText>
                        <MainAdminStrong>{provider.name}</MainAdminStrong>
                        <MainAdminSpan>create {provider.date}</MainAdminSpan>
                        </MainAdminText>
                </td>
                <td>
                        <MainAdminText>
                        <MainAdminStrong>{provider.email}</MainAdminStrong>
                        <MainAdminSpan>create {provider.date}</MainAdminSpan>
                        </MainAdminText>
                </td>
                <td>
                        <MainAdminText>
                        <MainAdminStrong>{provider.phone_Number}</MainAdminStrong>
                        <MainAdminSpan>create {provider.date}</MainAdminSpan>
                        </MainAdminText>
                </td>
                <td>
                        <MainAdminText>
                        <MainAdminStrong>{provider.owner}</MainAdminStrong>
                        <MainAdminSpan>create {provider.date}</MainAdminSpan>
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
