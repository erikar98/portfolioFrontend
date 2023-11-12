import { Product } from "../product";


export interface ProductResponse {

    content: Product[];
    pageable: {
        sort: {
            empty: boolean;
            sorted: boolean;
            unsorted:boolean;
        },
        offset: number;
        pageNumber: number;
        pageSize: number;
        paged: boolean;
        unpaged: boolean;
    };
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
}
