import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { addedToCart } from '../reduxStore/productsReducer.js';



// to show totlaVotes from the store

const Status = props => {
    

    return (
        <>
            <section>
                        {props.filetredProduct.map((product, idx) => {
              return  <Card  variant="outlined">
                    <CardContent>
                             <Typography  key={idx} color="textSecondary" gutterBottom>
                                {product.name}
                            </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={()=> props.addedToCart(product.name)}>Add To Cart</Button>
                        <Button size="small"  >View details</Button>
                    </CardActions>
                </Card>
                        })}
            </section>
        </>
    )
}

// I do not have any action here so no need to do mapDispatchToProps
// I will only use mapStateToProps
const mapStateToProps = state => ({
    myProducts: state.products.products,
    filetredProduct: state.products.filetredProduct,
    myProductsInCart : state.products.productsInCart 

});

const mapDispatchToProps = {addedToCart}


export default connect(mapStateToProps, mapDispatchToProps)(Status);