const variationTemplates: Variation[] = [
    {
        id: uuidv4(),
        name: "Storlek tröja",
        type: "size",
        required: true,
        options: [
            { value: "XS", label: "XS" },
            { value: "S", label: "S" },
            { value: "M", label: "M" },
            { value: "L", label: "L" },
            { value: "XL", label: "XL" },
            { value: "XXL", label: "XXL" },
        ],
    },
    {
        id: uuidv4(),
        name: "Färg",
        type: "color",
        required: false,
        options: [
            { value: "black", label: "Svart" },
            { value: "white", label: "Vit" },
            { value: "blue", label: "Blå" },
            { value: "red", label: "Röd" },
            { value: "green", label: "Grön" },
        ],
    },
    {
        id: uuidv4(),
        name: "Skostorlek",
        type: "size",
        required: true,
        options: [
            { value: "36", label: "36" },
            { value: "37", label: "37" },
            { value: "38", label: "38" },
            { value: "39", label: "39" },
            { value: "40", label: "40" },
            { value: "41", label: "41" },
            { value: "42", label: "42" },
        ],
    },
];


import type { Product } from "../types/productType";

import { v4 as uuidv4 } from "uuid";
import { dummySuppliers } from "./DummySupplier";
import type { Variation } from "../types/variationTypes";
export const dummyProducts: Product[] = [];

dummySuppliers.forEach((supplier, i) => {
    for (let j = 0; j < 10; j++) {
        const index = i * 10 + j;
        const variation = variationTemplates[index % variationTemplates.length];

        dummyProducts.push({
            id: uuidv4(),
            name: `Produkt ${index + 1}`,
            sku: `SKU-${index + 1}`,
            supplierId: supplier.id,
            supplierName: supplier.name,
            supplierItemNumber: `SUP-${i + 1}-ART-${j + 1}`,
            price: 199 + (index % 5) * 20,
            costPrice: 99 + (index % 3) * 10,
            vatRate: 25,
            stock: 5 + (index % 20),
            reorderLevel: 5,
            description: `Beskrivning för produkt ${index + 1}`,
            imageUrl: `https://placehold.co/300x300?text=Produkt+${index + 1}`,
            isActive: true,
            variations: [variation],
        });
    }
});
