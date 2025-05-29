export type Locale = {
    appTitle: string;

    nav: {
        dashboard: string;
        products: string;
        suppliers: string;
        deliveries: string;
        categories: string;
        export: string;
        settings: string;
    };

    buttons: {
        addProduct: string;
        addSupplier: string;
        addVariation: string;
        addOption: string;
        save: string;
        cancel: string;
        submitDelivery: string;
        exportDownload: string;
    };

    product: {
        title: string;
        name: string;
        sku: string;
        supplier: string;
        supplierItemNumber: string;
        category: string;
        price: string;
        costPrice: string;
        vatRate: string;
        stock: string;
        reorderLevel: string;
        description: string;
        imageUrl: string;
        isActive: string;
        tags: string;
    };

    variations: {
        title: string;
        name: string;
        type: string;
        required: string;
        options: string;
    };

    suppliers: {
        title: string;
        name: string;
        contactEmail: string;
        contactPhone: string;
        address: string;
        productsCount: string;
    };

    deliveries: {
        title: string;
        supplier: string;
        date: string;
        quantity: string;
    };

    export: {
        title: string;
        format: string;
        includeActive: string;
        includeVariants: string;
    };

    placeholders: {
        search: string;
        select: string;
    };

    messages: {
        noProducts: string;
        noSuppliers: string;
        stockLow: string;
    };
};