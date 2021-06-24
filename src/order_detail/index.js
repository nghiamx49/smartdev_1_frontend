import React from 'react';
import IdOderDetail from './idOrderDetail';
import Provider_store from './provider_store';
import { Container } from './style'
export default function index() {
    return (
        <Container>
            <div>

                <div>
                    <div> <IdOderDetail></IdOderDetail> </div>
                    <div> <Provider_store></Provider_store> </div>
                    <table>
                    </table>
                </div>
            </div>
        </Container>

    )
}
