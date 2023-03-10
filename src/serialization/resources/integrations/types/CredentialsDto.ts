/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const CredentialsDto: core.serialization.ObjectSchema<serializers.CredentialsDto.Raw, Novu.CredentialsDto> =
    core.serialization.object({
        apiKey: core.serialization.string().optional(),
        user: core.serialization.string().optional(),
        secretKey: core.serialization.string().optional(),
        domain: core.serialization.string().optional(),
        password: core.serialization.string().optional(),
        host: core.serialization.string().optional(),
        port: core.serialization.string().optional(),
        secure: core.serialization.boolean().optional(),
        region: core.serialization.string().optional(),
        accountSid: core.serialization.string().optional(),
        messageProfileId: core.serialization.string().optional(),
        token: core.serialization.string().optional(),
        from: core.serialization.string().optional(),
        senderName: core.serialization.string().optional(),
        projectName: core.serialization.string().optional(),
        applicationId: core.serialization.string().optional(),
        clientId: core.serialization.string().optional(),
    });

export declare namespace CredentialsDto {
    interface Raw {
        apiKey?: string | null;
        user?: string | null;
        secretKey?: string | null;
        domain?: string | null;
        password?: string | null;
        host?: string | null;
        port?: string | null;
        secure?: boolean | null;
        region?: string | null;
        accountSid?: string | null;
        messageProfileId?: string | null;
        token?: string | null;
        from?: string | null;
        senderName?: string | null;
        projectName?: string | null;
        applicationId?: string | null;
        clientId?: string | null;
    }
}
