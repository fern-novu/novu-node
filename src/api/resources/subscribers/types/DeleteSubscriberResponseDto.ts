/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Novu } from "@fern-api/novu";

export interface DeleteSubscriberResponseDto {
    /** A boolean stating the success of the action */
    acknowledged: boolean;
    status: Novu.DeleteSubscriberResponseDtoStatus;
}
