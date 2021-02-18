import React, { useEffect } from 'react';
import {connect, useDispatch} from 'react-redux';
// import {active} from '../reduxStore/categoriesReducer';
import {  active, getRemoteCategories} from '../rtkStore/categorySlicer';
import { Link, Typography,Button } from '@material-ui/core';
import {activeProduct} from '../rtkStore/productSlicer';

const ActiveCategories = props => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const fetchData=async() =>{
            await dispatch(getRemoteCategories())
        };
        fetchData();
    },[dispatch])

    return (
        <section>
            <ul>
                {props.activeOne.categories.map((category, idx)=> {
                     return <Button onClick={()=>{props.activeProduct(category.name)}}><Link style={{borderLeft:"solid #2E3B55 4px",color:"#2E3B55" ,padding:"2px",magginRight:"25px"}} key={idx} value={category.name} onClick={()=>props.active(category.name)} href="#">{category.name.toUpperCase()} </Link></Button>
                })}
            </ul>
        
        </section>
    )
}

const mapStateToProps = state => ({
    active:state.categories.ActiveCategories,
    activeOne : state.categories
});

const mapDispatchToProps = (dispatch, getState,string) => ({
    active: (string)=>dispatch(active(string)),
    activeProduct: (string)=>dispatch(activeProduct(string))
})
export default connect(mapStateToProps, mapDispatchToProps)(ActiveCategories)