import React from 'react';
import ChildrenListing from './ChildrenListing';
const Flexi = (props) => {


    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <ChildrenListing configData={props.configData}/>
                <input type="submit" />
            </form>
        </div>
    )
};

export default Flexi;