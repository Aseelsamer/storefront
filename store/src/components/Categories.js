
import React,{useEffect}from 'react';
import {connect} from 'react-redux';
import {active} from '../reduxStore/categoriesReducer';
import * as actions from '../reduxStore/actions';
import { Link, Typography } from '@material-ui/core'

const ActiveCategories = props => {
    const fetchData = (e) => {
        props.getcat();
    }
      useEffect(fetchData,[])
    return (
        <>
            <div style={{ fontSize: '24px' }}>
                Browse Our Categories
        </div>
            <br />
            <section>
                <Typography>

                    {props.activeOne.categories.map((category, idx) => {

                        return <Link style={{borderLeft:"solid #2E3B55 4px",color:"#2E3B55" ,padding:"2px",magginRight:"25px"}} key={idx} onClick={() => props.active(category.name)} href="#">{category.name.toUpperCase()} </Link>

                    })}
                  


                </Typography>
            </section>


        </>

    )
}

const mapStateToProps = state => ({

    active:state.categories.ActiveCategories,
    activeOne : state.categories
});

const mapDispatchToProps = (dispatch, getState,string) => ({
    active: (string)=>dispatch(active(string)),
    activeProduct: (string)=>dispatch(activeProduct(string))

});


export default connect(mapStateToProps, mapDispatchToProps)(ActiveCategories)