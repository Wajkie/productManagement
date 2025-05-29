import React, { useState } from 'react'
import NewVariationForm from './Forms/NewVariationForm'
import type { Variation } from '../types/variationTypes';
import { addVariation } from '../services/variations_API';

const Dashboard = () => {
    const [show, setShow] = useState<string | null>(null);
    const VariationSubmit = async (variation: Variation) => {
        await addVariation(variation)
        setShow(null);
    }

    return (
        <div>
            <button onClick={() => !show ? setShow("variationForm") : setShow(null)}>{show === "variationForm" ? "Stäng" : "Lägg till variation"}</button>

            <button>Supplier</button>
            <p>PRODUCT DATA</p>

            <button>Product List</button>
            <button>Suppliers</button>
            <button>Deliveries</button>
            <button>Categories</button>
            <button>Export</button>
            <button>Settings</button>
            {show === "variationForm" && <NewVariationForm handleSubmit={(variation) => VariationSubmit(variation)} />}
        </div>
    )
}

export default Dashboard