import { Contract } from "@paperbits/common";
import { HyperlinkContract } from "@paperbits/common/editing";

/**
 * Product API list widget configuration.
 */
export interface ApiProductsContract extends Contract {
    /**
     * List layout. "list", "dropdown" or "tiles"
     */
    itemStyleView?: string;

    /**
     * Link to a page that contains operation details.
     */
    detailsPageHyperlink?: HyperlinkContract;
}
