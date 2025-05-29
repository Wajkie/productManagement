// Typ för en enskild variationsvärde, t.ex. "XS", "M", "42", "34W"
export type VariationOption = {
    value: string;           // Unikt ID för variationsvärdet
    label: string;        // T.ex. "XS", "M", "42", "34W"
    additionalPrice?: number;  // Eventuell prisjustering för denna variant (valfritt)
};

// Typ för variationskategori, t.ex. "Storlek tröja", "Skostorlek"
export type Variation = {
    id: string;                // Unikt ID för variationstypen
    name: string;              // Namn på variationen, t.ex. "Storlek tröja"
    type: 'size' | 'color' | 'custom';  // Typ av variation (kan utökas)
    options: VariationOption[];          // Tillgängliga val
    required: boolean;          // Om denna variation måste väljas vid köp
};