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

export interface Product {
}
