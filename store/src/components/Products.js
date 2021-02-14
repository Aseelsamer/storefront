import React from 'react';
import {connect} from 'react-redux';

// to show totlaVotes from the store

const Status = props => {
    return (
        <section>
             {props.filetredProduct.map((product, idx)=> {
                console.log('<-----------in Component------------>', props.myProducts.products)
                    return <li key={idx}>{product.name}</li>
                })}
      
        </section>
    )
}

// I do not have any action here so no need to do mapDispatchToProps
// I will only use mapStateToProps
const mapStateToProps = state =>({
    myProducts: state.products.products,
    filetredProduct : state.products.filetredProduct
});

export default connect(mapStateToProps)(Status);