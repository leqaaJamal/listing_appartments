export interface AppartmentItem {
    id: number;
    address: string;
    area: number;
    description: string;
    floor: number;
    number_of_rooms: number;
    price: number;
    title: string;
    [key: string]: number | string; 
}