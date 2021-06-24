import React from 'react'
import { Viewshop, ViewshopContainer, Adress, Table, Picture } from './style';
import { MdPayment } from "react-icons/md";
function ProviderStore() {
    return (
        <div>
            <div>
                <ViewshopContainer>
                    <div>
                        <Viewshop>
                            <div>
                                <p> Provider_store_name_here</p>
                                <span>View ngay</span>
                            </div>

                            <Picture>
                                <img src="data:image/jpeg;base64,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" alt=""></img>
                                <p>Product Provider_store_name_here</p>
                            </Picture>
                        </Viewshop>
                    </div >
                </ViewshopContainer >
            </div>
            <div>
                <ViewshopContainer>
                    <div>
                        <Viewshop>
                            <div>
                                <Adress>
                                    <h4>Delivery Adress: </h4>
                                    <ul>
                                        <li>Nguyễn Anh Phú</li>
                                        <li>257 Đống Đa, hải Châu, Đà Nẵng</li>
                                        <li>0987123xxx</li>
                                    </ul>
                                </Adress>
                            </div>
                        </Viewshop>
                    </div >
                </ViewshopContainer >

                <div>
                    <ViewshopContainer >
                        <Table>
                            <table border="1" >
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan="6">
                                        <span>Product costs: </span> </td>
                                    <td><p>145.000 VND</p></td>
                                </tr>
                                <tr>
                                    <td colSpan="6"> <span>Delivery Fee:  </span></td>
                                    <td><p>20.000 VND</p></td>
                                </tr>
                                <tr>
                                    <td colSpan="6"><span>Total Fee: </span> </td>
                                    <td><p>165.000 VND</p></td>
                                </tr>
                                <tr>
                                    <td colSpan="6"><span><MdPayment /> Payment method:</span> </td>
                                    <td><p>Paypal</p></td>
                                </tr>
                            </table>
                        </Table>
                    </ViewshopContainer >
                </div>
            </div>
        </div >
    )
}
export default ProviderStore;
