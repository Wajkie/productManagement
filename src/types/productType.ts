import type { Variation } from "./variationTypes";

// Typ för produkt
export type Product = {
    id: string;                   // Unikt produkt-ID
    name: string;                 // Produktnamn
    description?: string;         // Beskrivning (valfritt)
    sku: string;                  // Eget SKU
    supplierItemNumber?: string;  // Leverantörens artikelnummer (valfritt)
    supplierName: string
    supplierId?: string;          // Koppling till leverantörens ID (valfritt)
    price: number;                // Pris inkl moms (kan justeras)
    costPrice?: number;           // Inköpspris (valfritt)
    vatRate: number;              // Moms i procent
    stock: number;                // Lagersaldo
    reorderLevel?: number;        // När lagret ska fyllas på (valfritt)
    imageUrl?: string;            // Bild-URL (valfritt)
    weight?: number;              // Vikt i kg (valfritt)
    dimensions?: {                // Dimensioner (valfritt)
        length?: number;
        width?: number;
        height?: number;
    };
    isActive?: boolean;           // Om produkten är aktiv (valfritt)
    variations?: Variation[];              // Taggar för filtrering/sökning (valfritt)
    createdAt?: string;           // Skapandedatum (ISO)
    updatedAt?: string;           // Uppdateringsdatum (ISO)
};

export type NewProduct = Omit<Product, "id">