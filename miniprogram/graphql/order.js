let createOrder=`mutation createorder($remark: String, $server_id: String, $updatedAt: String, $payTime: String, $orderTotalPay: Float, $createdAt: String, $orderStatus: String, $id: ID!, $user_id: ID, $orderTime: String, $storeTotalPay: Float) {
    createorder: create_order(remark: $remark server_id: $server_id updatedAt: $updatedAt payTime: $payTime orderTotalPay: $orderTotalPay createdAt: $createdAt orderStatus: $orderStatus id: $id user_id: $user_id orderTime: $orderTime storeTotalPay: $storeTotalPay) {
        remark
        server_id
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
        orderTime
        storeTotalPay
    }
}`,
deleteOrder=`mutation deleteorder($remark: String, $server_id: String, $updatedAt: String, $payTime: String, $orderTotalPay: Float, $createdAt: String, $orderStatus: String, $id: ID, $user_id: ID, $orderTime: String, $storeTotalPay: Float) {
    deleteorder: delete_order(remark: $remark server_id: $server_id updatedAt: $updatedAt payTime: $payTime orderTotalPay: $orderTotalPay createdAt: $createdAt orderStatus: $orderStatus id: $id user_id: $user_id orderTime: $orderTime storeTotalPay: $storeTotalPay)
}`,
updateOrder=`mutation updateuser($id: ID, $openid: String, $username: String, $password: String, $telephone: String, $email: String, $createdAt: String, $updatedAt: String) {
    updateuser: update_user(id: $id openid: $openid username: $username password: $password telephone: $telephone email: $email createdAt: $createdAt updatedAt: $updatedAt) {
        id
        openid
        username
        password
        telephone
        email
        createdAt
        updatedAt
    }
}`,
getOrder=`query orderbyprops($remark: String, $server_id: String, $updatedAt: String, $payTime: String, $orderTotalPay: Float, $createdAt: String, $orderStatus: String, $user_id: ID, $orderTime: String, $storeTotalPay: Float) {
    orderbyprops: order_by_props(remark: $remark server_id: $server_id updatedAt: $updatedAt payTime: $payTime orderTotalPay: $orderTotalPay createdAt: $createdAt orderStatus: $orderStatus user_id: $user_id orderTime: $orderTime storeTotalPay: $storeTotalPay) {
        remark
        server_id
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