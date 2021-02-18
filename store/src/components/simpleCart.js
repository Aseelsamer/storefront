import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import ListItem from "@material-ui/core/ListItem";
import DeleteIcon from '@material-ui/icons/Delete';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import {updateInstockIncrement} from '../rtkStore/cartSlicer';
import Button from '@material-ui/core/Button';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const ItemInCart = props => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    return (
        <>
               <Button label="CART"  onClick={handleClick} />: {props.myCart.productsInCart.length}<Button/>
                  
                    <Menu>
                {props.myCart.productsInCart.map((item) => (
                    <ListItemLink href="#simple-list">
                        <MenuItem ><Link to='/checkout'>{item.name}</Link></MenuItem>
                        <DeleteIcon onClick={() => props.put(item)}/>

                    </ListItemLink>
                ))}
            </Menu>
            
        </>


    )
}

const mapStateToProps = state => ({
    myCart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
    put: (obj) => dispatch(updateInstockIncrement(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemInCart)