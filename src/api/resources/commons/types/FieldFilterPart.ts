/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Novu } from "@fern-api/novu";

export interface FieldFilterPart {
    field: string;
    value: string;
    operator: Novu.FieldFilterPartOperator;
    on: Novu.FieldFilterPartOn;
}