import React from 'react';
import Input from './Input';

const ItemListing = (props) => {

    return (
        <>
                {props.formData.map((formElement, idx) =>
                    <Input key={idx} elementConfig={formElement}/>
                )}
        </>
    )
};

export default ItemListing;