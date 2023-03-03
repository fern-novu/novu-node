/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Novu } from "@fern-api/novu";

export interface SubscriberResponseDto {
    /** The internal id novu generated for your subscriber, this is not the subscriberId matching your query. See `subscriberId` for that */
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    avatar?: string;
    locale?: string;
    /** The internal identifier you used to create this subscriber, usually correlates to the id the user in your systems */
    subscriberId: string;
    /** Channels settings for subscriber */
    channels?: Novu.ChannelSettings[];
    isOnline?: boolean;
    lastOnlineAt?: string;
    organizationId: string;
    environmentId: string;
    deleted: boolean;
    createdAt: string;
    updatedAt: string;
    v?: number;
}
