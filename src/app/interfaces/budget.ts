export interface Budget {
    servicios: {
        seo: boolean;
        ads: boolean;
        web: boolean;
    },
    nombre: string;
    telefono: number;
    email: string;
    total: number;
    numPagina:number;
    numIdioma:number;
    fecha:string;
}
