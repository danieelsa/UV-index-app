import axios from "axios";
import { UVDetails } from "../shared/interfaces/UVData";


const testApi = axios.create({
    baseURL: "https://api.met.no/weatherapi/locationforecast/2.0?lat=58.28365&lon=12.28864"
});



export const fetchUVData = async () => {

    const response = await testApi.get("");
    const weatherData = response.data.properties.timeseries;
    
    const UVData: UVDetails[] = weatherData.map((info: any) => ({
        ultraviolet_index_clear_sky: info.data.instant.details.ultraviolet_index_clear_sky
    })).slice(0, 24);

    return UVData;
}