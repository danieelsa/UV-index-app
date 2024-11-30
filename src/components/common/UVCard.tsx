import "./UVCard.tsx.css";
import {UV_VALUE_INACCESSIBLE, UV_VALUE_UNDEFINED, UVValueTypes} from "../../shared/interfaces/UVData"

interface Props
{
    value: UVValueTypes;
}

export default function UVCard({value}: Props) {
    return <div className="uv-card">
        {(value === UV_VALUE_INACCESSIBLE || value === UV_VALUE_UNDEFINED) ? <p>---</p> : <p>{value}</p>}
    </div>
}