let createOrder=`mutation createorder($remark: String, $updatedAt: String, $payTime: String, $orderTotalPay: Float, $createdAt: String, $orderStatus: String, $id: ID!, $user_id: ID, $service_id: ID, $orderTime: String, $storeTotalPay: Float) {
    createorder: create_order(remark: $remark updatedAt: $updatedAt payTime: $payTime orderTotalPay: $orderTotalPay createdAt: $createdAt orderStatus: $orderStatus id: $id user_id: $user_id service_id: $service_id orderTime: $orderTime storeTotalPay: $storeTotalPay) {
        remark
        updatedAt
        payTime
        orderTotalPay
        createdAt
        orderStatus
        id
        user_id {
            id
            openid
            username
            password
            telephone
            email
            createdAt
            updatedAt
        }
        service_id {
            updatedAt
            orderPrice
            number
            timeRange
            name
            describle
            createdAt
            evaluation
            id
            class
            serverStatus
            recommended
            price

            img
        }
        orderTime
        storeTotalPay
    }
}`,
deleteOrder=`mutation deleteorder($remark: String, $updatedAt: String, $payTime: String, $orderTotalPay: Float, $createdAt: String, $orderStatus: String, $id: ID, $user_id: ID, $service_id: ID, $orderTime: String, $storeTotalPay: Float) {
    deleteorder: delete_order(remark: $remark updatedAt: $updatedAt payTime: $payTime orderTotalPay: $orderTotalPay createdAt: $createdAt orderStatus: $orderStatus id: $id user_id: $user_id service_id: $service_id orderTime: $orderTime storeTotalPay: $storeTotalPay)
}`,
updateOrder=`mutation updateorder($remark: String, $updatedAt: String, $payTime: String, $orderTotalPay: Float, $createdAt: String, $orderStatus: String, $id: ID, $user_id: ID, $service_id: ID, $orderTime: String, $storeTotalPay: Float) {
    updateorder: update_order(remark: $remark updatedAt: $updatedAt payTime: $payTime orderTotalPay: $orderTotalPay createdAt: $createdAt orderStatus: $orderStatus id: $id user_id: $user_id service_id: $service_id orderTime: $orderTime storeTotalPay: $storeTotalPay) {
        remark
        updatedAt
        payTime
        orderTotalPay
        createdAt
        orderStatus
        id
        user_id {
            id
            openid
            username
            password
            telephone
            email
            createdAt
            updatedAt
        }
        service_id {
            updatedAt
            orderPrice
            number
            timeRange
            name
            describle
            createdAt
            evaluation
            id
            class
            serverStatus
            recommended
            price

            img
        }
        orderTime
        storeTotalPay
    }
}`,
getOrder=`query orderbyprops($remark: String, $updatedAt: String, $payTime: String, $orderTotalPay: Float, $createdAt: String, $orderStatus: String, $user_id: ID, $service_id: ID, $orderTime: String, $storeTotalPay: Float) {
    orderbyprops: order_by_props(remark: $remark updatedAt: $updatedAt payTime: $payTime orderTotalPay: $orderTotalPay createdAt: $createdAt orderStatus: $orderStatus user_id: $user_id service_id: $service_id orderTime: $orderTime storeTotalPay: $storeTotalPay) {
        remark
        updatedAt
        payTime
        orderTotalPay
        createdAt
        orderStatus
        id
        user_id {
            id
            openid
            username
            password
            telephone
            email
            createdAt
            updatedAt
        }
        service_id {
            updatedAt
            orderPrice
            number
            timeRange
            name
            describle
            createdAt
            evaluation
            id
            class
            serverStatus
            recommended
            price

            img
        }
        orderTime
        storeTotalPay
    }
}`


export default{
    createOrder,
    deleteOrder,
    updateOrder,
    getOrder
}