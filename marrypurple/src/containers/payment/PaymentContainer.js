import React from 'react';
import Payment from '../../components/payment/Payment';
import { withRouter } from 'react-router-dom';

const PaymentContainer = () => {
    return (
        <Payment/>
    )
}

export default withRouter(PaymentContainer);