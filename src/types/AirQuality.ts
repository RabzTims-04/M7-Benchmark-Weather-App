export interface AirQuality {
    coord: ICoord;
    list:  IList[];
}

export interface ICoord {
    lon: number;
    lat: number;
}

export interface IList {
    main:       IMain;
    components: { 
        [key: string]: number 
    };
    dt:         number;
}

export interface IMain {
    aqi: number;
}
