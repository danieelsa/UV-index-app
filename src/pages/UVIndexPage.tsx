import { useEffect, useState } from "react";
import UVCard from "../components/common/UVCard";
import { UVDetails, UV_VALUE_INACCESSIBLE, UV_VALUE_UNDEFINED} from "../shared/interfaces/UVData";
import { fetchUVData } from "../weather-data/WeatherDataTest";


const UPDATE_INTERVAL = 10000;

export default function UVIndexPage() {

    const [UVIndex, setUVIndex] = useState<UVDetails[]>([{ ultraviolet_index_clear_sky: UV_VALUE_UNDEFINED}]);

    const fetchData = async () => {
        try {
            const UVData = await fetchUVData();
            setUVIndex(UVData);
        }
        catch (err: unknown) {
            console.error(err);
            setUVIndex([{ultraviolet_index_clear_sky: UV_VALUE_INACCESSIBLE}]);
        }
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, UPDATE_INTERVAL);

        return () => clearInterval(interval)
    }, []);

    return <main>
        <UVCard value={UVIndex[0]?.ultraviolet_index_clear_sky} />
    </main>
}