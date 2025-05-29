// Typ för leverantör
export type Supplier = {
    id: string;               // Unikt leverantörs-ID
    name: string;             // Leverantörens namn
    contactEmail?: string;    // Kontaktmail (valfritt)
    contactPhone?: string;    // Telefonnummer (valfritt)
    address: string;
    productsCount: number;
    createdAt?: string;       // Datum för skapande (ISO)
    updatedAt?: string;       // Datum för senaste uppdatering (ISO)
};
