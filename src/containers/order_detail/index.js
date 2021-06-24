import React from 'react';
import IdOderDetail from './idOrderDetail';
import Providerstore from './provider_store';
import { Container } from './style'
export default function OrderDetail() {
    return (
        <Container>
            <div>

                <div>
                    <div> <IdOderDetail></IdOderDetail> </div>
                    <div> <Providerstore></Providerstore> </div>
                    <table>
                    </table>
                </div>
            </div>
        </Container>

    )
}
