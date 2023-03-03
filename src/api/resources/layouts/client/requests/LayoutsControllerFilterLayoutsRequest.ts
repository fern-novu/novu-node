/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface LayoutsControllerFilterLayoutsRequest {
    /**
     * Number of page for the pagination
     */
    page?: number;
    /**
     * Size of page for the pagination
     */
    pageSize?: number;
    /**
     * Sort field. Currently only supported `createdAt`
     */
    sortBy?: string;
}
