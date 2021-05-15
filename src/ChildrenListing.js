import React from 'react';
import ItemListing from './ItemListing';

const ChildrenListing = (props) => {
    
    return (
        <>
             {typeof (props.configData) == 'object' && Object.keys(props.configData).map((formCategory, idx) => {
                    if (formCategory == "items")
                        return <ItemListing key={idx} formData={props.configData[formCategory]}/>
                    if (formCategory == "children")
                        return Array.isArray(props.configData[formCategory]) && props.configData[formCategory].map((formaCte, idx1) =>
                            <ChildrenListing configData={formaCte} key={idx1}/>
                        )
                }
                )}
        </>
    )
};

export default ChildrenListing;