import React from 'react'

const ProductList = () => {
    return (
        <div>ProductList
            Search: <input type="text" name="" id="" /> <button> + Add Product</button>
            <ul>
                <li>
                    <span>SKU</span>
                    <span>Name</span>
                    <span>Stock</span>
                    <span>Supplier</span>
                </li>
            </ul>
            <div>Pages:
                <button>1</button>
                <button>2</button>
                <button>etc</button>
            </div>

        </div>
    )
}

export default ProductList