/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CreateSubscriberRequestDto {
    /** The internal identifier you used to create this subscriber, usually correlates to the id the user in your systems */
    subscriberId: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    /** An http url to the profile image of your subscriber */
    avatar?: string;
    locale?: string;
    data?: Record<string, unknown>;
}
