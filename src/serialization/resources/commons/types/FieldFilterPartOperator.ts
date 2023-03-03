/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const FieldFilterPartOperator: core.serialization.Schema<
    serializers.FieldFilterPartOperator.Raw,
    Novu.FieldFilterPartOperator
> = core.serialization.enum_([
    "LARGER",
    "SMALLER",
    "LARGER_EQUAL",
    "SMALLER_EQUAL",
    "EQUAL",
    "NOT_EQUAL",
    "ALL_IN",
    "ANY_IN",
    "NOT_IN",
    "BETWEEN",
    "NOT_BETWEEN",
    "LIKE",
    "NOT_LIKE",
    "IN",
]);

export declare namespace FieldFilterPartOperator {
    type Raw =
        | "LARGER"
        | "SMALLER"
        | "LARGER_EQUAL"
        | "SMALLER_EQUAL"
        | "EQUAL"
        | "NOT_EQUAL"
        | "ALL_IN"
        | "ANY_IN"
        | "NOT_IN"
        | "BETWEEN"
        | "NOT_BETWEEN"
        | "LIKE"
        | "NOT_LIKE"
        | "IN";
}
