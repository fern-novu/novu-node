/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Novu } from "@fern-api/novu";

export interface ChannelSettings {
    /** Id of the integration that is used for this channel */
    integrationId: string;
    providerId: Novu.ChannelSettingsProviderId;
    credentials: Novu.ChannelSettingsCredentials;
}