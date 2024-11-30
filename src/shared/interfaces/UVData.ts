export const UV_VALUE_INACCESSIBLE: UVValueTypes = -1;
export const UV_VALUE_UNDEFINED: UVValueTypes = null;

export type UVValueTypes = number | null;

export enum UVScale{
    Low = 2,
    Medium = 5,
    High = 7,
    VerryHigh = 10
}

export interface UVDetails
{
    ultraviolet_index_clear_sky: UVValueTypes;
}




