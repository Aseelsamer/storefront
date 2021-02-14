import React from 'react';
import {connect} from 'react-redux';
import {active} from '../reduxStore/categoriesReducer';

const activeCategories = props => {
    return (
        <section>
            <ul>
                {props.activeOne.categories.map((category, idx)=> {
                    return <li key={idx} onClick={()=> props.active(category.name)}>{category.display_name}</li>
                })}
            </ul>
        
        </section>
    )
}

const mapStateToProps = state => ({
    activeOne : state.categories
});

const mapDispatchToProps = {active}

export default connect(mapStateToProps, mapDispatchToProps)(activeCategories)