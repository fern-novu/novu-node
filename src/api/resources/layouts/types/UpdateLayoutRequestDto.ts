/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface UpdateLayoutRequestDto {
    /** User defined custom name and provided by the user that will name the Layout updated. */
    name?: string;
    /** User defined description of the layout */
    description?: string;
    /** User defined content for the layout. */
    content?: string;
    /** User defined variables to render in the layout placeholders. */
    variables?: Record<string, unknown>[];
    /** Variable that defines if the layout is chosen as default when creating a layout. */
    isDefault?: boolean;
}
