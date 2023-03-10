/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Novu } from "@fern-api/novu";

export interface NotificationStepMetadata {
    amount?: number;
    unit?: Novu.NotificationStepMetadataUnit;
    digestKey?: string;
    delayPath?: string;
    type: Novu.NotificationStepMetadataType;
    backoffUnit?: Novu.NotificationStepMetadataBackofUnit;
    backoffAmount?: number;
    updateMode?: boolean;
}
