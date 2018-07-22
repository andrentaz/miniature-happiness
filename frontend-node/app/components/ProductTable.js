import PropTypes from 'prop-types';
import React from 'react';
import ProductRow from '../containers/ProductRow';


const ProductTable = ({ filter, products }) => {
    let rows = [];

    products.forEach(p => {
        const productId = p.id.toLowerCase();
        const filterLC = filter.toLowerCase();

        if (productId.indexOf(filterLC) !== -1) {
            rows.push(
                <ProductRow key={p.id} data={p} />
            );
        }
    });

    return <div> {rows} </div>;
};

ProductTable.propTypes = {
    filter: PropTypes.string,
    products: PropTypes.array,
};

export default ProductTable;
