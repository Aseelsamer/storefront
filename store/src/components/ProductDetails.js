import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getDetailedObj } from '../rtkStore/productSlicer';
import {Typography,Container,Card,CardContent,CardMedia,Button,} from "@material-ui/core";

const Details = props =>{
    const { id } = props.match.params;
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
           await dispatch(getDetailedObj(id));
        };
        fetchData();
    }, [dispatch]);

 return(
     
    <>

    <Container >
        <Typography variant="h4" component="h2" >
            {props.product.name}
        </Typography>
        <Card>
            <CardMedia
                
                image="https://st2.depositphotos.com/3665639/7442/v/600/depositphotos_74424541-stock-illustration-pictograph-of-shopping-cart.jpg"
                title="Contemplative Reptile"
            />
            <CardContent >
                <Typography gutterBottom variant="h5" component="h4">
                    inStock: {props.product.inStock}
                </Typography>
                <Typography gutterBottom variant="h5" component="h4">
                    Price: ${props.product.price}
                </Typography>
            </CardContent>
        </Card>
        <Button
            variant="contained"
            color="primary"
            >
            Buy
             </Button>
    </Container>
</>

);
}
const mapStateToProps = (state) => ({
product: state.products.productDetail,
});

export default connect(mapStateToProps)(Details);
 


