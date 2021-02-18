import React, { useEffect, useState } from 'react';
import { connect,useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getRemoteData  } from '../rtkStore/productSlicer';
import { updateInstockdecrement, deleteProduct } from '../rtkStore/cartSlicer';
import { Link, Redirect } from 'react-router-dom';


// to show totlaVotes from the store

const Status = props => {
   
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchData = async () =>{
            await dispatch(getRemoteData());
        };
        fetchData();
    } ,[dispatch]);

    return (
        <>
            <section>
                {props.filetredProduct.map((product, idx) => {
                    return <Card variant="outlined">
                        <CardContent>
                            <Typography key={idx} color="textSecondary" gutterBottom>
                                {product.name}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => props.update(product)}>Add To Cart</Button>
                            <Link to={`/details/${product._id}`}>View Details</Link>
                        </CardActions>
                    </Card>
                })}
            </section>
        </>
    )
}

const mapStateToProps = state => ({
    myProducts: state.products.products,
    filetredProduct: state.products.filetredProduct,
    myProductsInCart: state.products.productsInCart,

});

const mapDispatchToProps = (dispatch) => ({
    delete: () => dispatch(deleteProduct()),
    update: (obj) => dispatch(updateInstockdecrement(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(Status);