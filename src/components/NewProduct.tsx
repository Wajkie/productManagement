import React from 'react'

const NewProduct = () => {
    return (
        <form>
            <label>
                ProductName
                <input type="text" />
            </label>
            <label>
                SKU
                <input type="text" />
            </label>
            <label>
                SUPPLIER DROPDOWN
                <input type="text" />
            </label>
            <label>
                SUPPLIER ITEM#
                <input type="text" />
            </label>
            <label>
                CATEGORY DROPDOWN
                <input type="text" />
            </label>
            <label>
                PRICE
                <input type="text" />
            </label>
            <label>
                DESCRIPTION
                <input type="text" />
            </label>
            <label>
                VARIATIONS
                <input type="text" />
            </label>
            <button>SAVE</button>
            <button>CANCEL</button>
        </form>
    )
}

export default NewProduct