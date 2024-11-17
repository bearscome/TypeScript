
export type Restaurants = {
    name: string;
    category: string;
    address: Address;
    menu : Array<Menu>
}

export type Address = {
    city: string,
    detail: string,
    zipCode: number,
}

export type Menu = {
    name: string,
    price: number,
    category: string
}

export type AddressWithoutZipcode = Omit<Address, "zipCode">
export type RestaurantOnlyCategory = Pick<Restaurants, "category">

export type ApiResponse<T> = {
    data: Array<T>,
    totalPage: number,
    currentPage: number
};

export type ApiResponseMenu = ApiResponse<Menu>;
