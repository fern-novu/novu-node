/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ExecutionDetailsResponseDtoStatus =
    | "Success"
    | "Warning"
    | "Failed"
    | "Pending"
    | "Queued"
    | "ReadConfirmation";

export const ExecutionDetailsResponseDtoStatus = {
    Success: "Success",
    Warning: "Warning",
    Failed: "Failed",
    Pending: "Pending",
    Queued: "Queued",
    ReadConfirmation: "ReadConfirmation",
} as const;
