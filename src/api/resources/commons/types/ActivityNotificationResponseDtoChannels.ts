/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ActivityNotificationResponseDtoChannels =
    | "in_app"
    | "email"
    | "sms"
    | "chat"
    | "push"
    | "digest"
    | "trigger"
    | "delay";

export const ActivityNotificationResponseDtoChannels = {
    InApp: "in_app",
    Email: "email",
    Sms: "sms",
    Chat: "chat",
    Push: "push",
    Digest: "digest",
    Trigger: "trigger",
    Delay: "delay",
} as const;