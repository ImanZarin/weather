type searchResult = {
    id: number,
    name: string,
    coord: {
        lat: number,
        lon: number
    },
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number,
    },
    dt: number,
    wind: {
        speed: number,
        deg: number
    },
    sys: {
        country: string
    },
    weather: {
        id: number,
        main: string,
        description: string,
        icon: string
    }[]
}

export type searchResults = {
    message: string,
    cod: string,
    count: number,
    list: searchResult[]
}