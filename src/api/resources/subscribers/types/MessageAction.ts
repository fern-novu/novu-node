/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Novu } from "@fern-api/novu";

export interface MessageAction {
    status?: Novu.MessageActionType;
    buttons?: unknown;
    result: Novu.MessageActionResult;
}
