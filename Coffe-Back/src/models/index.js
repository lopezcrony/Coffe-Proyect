const roles = require('./roles');
const users = require('./users');
const providers= require('./providers');
const brands= require('./brands');
const brandsDetail= require('./brandDetails');
const products= require('./products');
const pictureProduct= require('./pictureProduct');
const attributes= require('./attributes');
const attributesProducts= require('./attrributesProduct');
const shoppings= require('./shoppings');
const shoppingsDetail= require('./shoppingDetail');
const adjustments= require('./adjustments');
const payments= require('./payments');
const sales= require('./sales');
const paymentsDetail= require('./paymentsDetail');
const salesDetail= require('./salesDetail');
const paymentsMethod= require('./paymentsMethod');
const paymentsMethodDetail= require('./paymentMethodDetail');

const model={
    roles,
    users,
    providers,
    brands,
    brandsDetail,
    products,
    pictureProduct,
    attributes,
    attributesProducts,
    shoppings,
    shoppingsDetail,
    adjustments,
    payments,
    sales,
    paymentsDetail,
    salesDetail,
    paymentsMethod,
    paymentsMethodDetail
}

module.exports={
    model
}