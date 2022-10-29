"use strict";
exports.__esModule = true;
var graphql_1 = require("graphql");
var schema = graphql_1.buildSchema("\ntype User {\n    id: ID!\n    firstname: String!\n    lastname: String!\n    email: String!\n    password: String!\n    type: String!\n    createdAt: String!\n}\ntype UserResponse {\n    user: User!\n    token: String\n}\ntype OrderResponse {\n    status :String,\n    orderId:String\n}\ninput OrderItems {\n    cardtype: String!\n    category: String!\n    img1: String!\n    img2: String!\n    name: String!\n    price: Float!\n    property: String!\n    quantity: Float!\n    year: Float!\n  }\ninput PaystackResponse {\n    message: String!\n    redirecturl: String!\n    reference: String!\n    status: String!\n    trans: String!\n    transaction: String!\n    trxref: String!\n}\ntype PaymentResponse{\n    status:String!\n    paymentId:String\n}\ntype Query {\n    getUser(phone:String!): User!}\n\n    type Mutation{\n        createPayment(userId:String,amount:Float,paystackResponse:PaystackResponse):PaymentResponse\n        createOrder(userId:String ,orderTotal : Float ,paymentId :String , orderItems:[OrderItems]) :OrderResponse\n        createUser(firstname: String!,lastname: String!, email:String! password: String!, type: String!,): UserResponse\n        login(email: String!, password: String!): UserResponse\n    }\n");
exports["default"] = schema;
