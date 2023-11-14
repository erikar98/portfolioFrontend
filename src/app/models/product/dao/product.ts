export interface ProductCreate {

    productNumBill : number,
    productTypeIdMaster: number,
    totalDebt: number,
    dateProductPayment: string,
    daysPastDue: number,
    customerId : string,
    statusIdMaster : number;

}

export interface Product {
}
