/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Novu } from "@fern-api/novu";

export interface ActivityGraphStatesResponse {
    id: string;
    count: number;
    templates: string[];
    channels: Novu.ChannelPreferenceType[];
}
