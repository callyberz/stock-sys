/**
 *
 * ProductInfo
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';

import {
    productDefaultShape,
    productShape,
} from '../../shapes/product';

import H1 from '../H1';
import NotePaper from '../NotePaper';
import OpeningHours from '../OpeningHours';
import Grid from '../Grid';

/* eslint-disable camelcase */
function ProductInfo({
    product: { address, category, district, opening_hours, phone, website },
}) {
    const infos = [
        {
            type: 'list',
            title: 'Details',
            infos: [
                { subtitle: 'Cooking', text: category.name },
                {
                    subtitle: 'Neighborhood',
                    text: district.includes('_') ? district.replace('_', '') : district,
                },
            ],
        },
        {
            type: 'list',
            title: 'Location',
            infos: [
                {
                    subtitle: address,
                    multipleLine: true,
                },
                { subtitle: 'Website', text: website },
                { subtitle: 'Phone number', text: phone },
            ],
        },
    ];

    return (
        <>
            <H1>ProductInfo</H1>
            <Grid>
                <li className="column poductInfo-card">
                    <OpeningHours openingHours={opening_hours} />
                </li>
                {infos.map(info => (
                    <li key={info.title} className="column productInfo-card">
                        <NotePaper ProductInfo={info} />
                    </li>
                ))}
            </Grid>
        </>
    );
}

ProductInfo.defaultProps = {
    product: productDefaultShape,
};

ProductInfo.propTypes = {
    ...productShape,
};

export default ProductInfo;
