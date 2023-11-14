export interface ProductResponse {

    content: Product[];
    pageable: {
        offset: number;
        pageNumber: number;
        pageSize: number;
        // ... otras propiedades de paginación
    };
    last: boolean;
    totalPages: number;
    totalElements: number;

}
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
