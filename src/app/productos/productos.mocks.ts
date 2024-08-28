//mock quiere decir simulacro y se refiere a unos exámenes de prueba antes de los reales

export  const productsList:Product[] =[
    {id: 1, name: 'Lavandina', price: 10, description: 'Botella de 1.5lts'},
    {id: 2, name: 'Detergente', price: 7, description: '900ml sabor limon'},
    {id: 3, name: 'Trapo de piso', price: 2, description: 'Material marino'},
    {id: 4, name: 'Jabon en polvo', price: 45, description: 'Aroma de estrella'},
    {id: 5, name: 'Polvo de pulir', price: 32, description: 'De piedra ACME'},
    {id: 6, name: 'Cif', price: 88},
    {id: 7, name: 'Cloro', price: 31, description: 'Al 95%'},
]

export interface Product {
    id: number | string;
    name: string;
    price: number;
    description?: string;
}