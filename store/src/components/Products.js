import React , {useEffect}from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { addedToCart } from '../reduxStore/productsReducer.js';
import * as actions from '../reduxStore/actions'


// to show totlaVotes from the store

const Status = props => {
    
    const fetchData = (e) => {
        props.get();
      }

      useEffect(fetchData,[])
    return (
        <>
        <section>
            {props.filetredProduct.map((product, idx) => {
                return <Card cvariant="outlined">
                    <CardContent>
                        <Typography  key={idx} color="textSecondary" gutterBottom>
                            {product.name}
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" onClick={()=> props.update(product)}>Add To Cart</Button>
                        <Button size="small">View details</Button>
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
    myProductsInCart : state.products.productsInCart 

});
const mapDispatchToProps = (dispatch, getState) => ({
    get: () => dispatch(actions.getRemoteData()),
    update :(obj)=>dispatch(actions.updateInstockdecrement(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(Status);
