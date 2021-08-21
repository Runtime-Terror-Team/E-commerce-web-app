// import { MenuItem } from '@material-ui/core';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import React from 'react';
// import '../checkOutProduct.css';

// const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
//   const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);
//   const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

//   return (
//     <div className="checkoutProduct">
//       <img src={item.media.source} alt="" className="checkoutProduct__image" />
//       <div className="checkoutProduct__info">
//         <p className="checkoutProduct__title">{item.name}</p>
//         <FormControl>

//           <Select
//             value={item.quantity}
//             onChange={(e) => handleUpdateCartQty(item.id, item.quantity = (e.target.value))}
//           >
//             <MenuItem value="" disabled>Quantity</MenuItem>
//             <option value={1}>1</option>
//             <option value={2}>2</option>
//             <option value={3}>3</option>
//             <option value={4}>4</option>
//             <option value={5}>5</option>
//             <option value={6}>6</option>
//             <option value={7}>7</option>
//             <option value={8}>8</option>
//             <option value={9}>9</option>
//             <option value={10}>10</option>

//           </Select>
//         </FormControl>

//         <p className="checkoutProduct__price">
//           <strong>{item.price.formatted_with_symbol}</strong>
//         </p>
//         <div className="checkoutProduct__rating" />
//         <button onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>Remove from the Cart</button>
//       </div>
//     </div>
//   );
// };
// export default CartItem;

import { CardMedia, createMuiTheme, Grid, ThemeProvider, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import React from 'react';
import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const theme = createMuiTheme();

  theme.typography.h5 = {
    fontSize: '0.7rem',
    '@media (min-width:600px)': {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.4rem',
    },
  };
  const classes = useStyles();
  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);
  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={3} style={{ borderBottom: '1px solid' }}>
        <Grid item xs={1} className={classes.cartItem}>
          <DeleteIcon
            variant="contained"
            type="button"
            color="black"
            fontSize="large"
            onClick={() => handleRemoveFromCart(item.id)}
          >
            Remove
          </DeleteIcon>
        </Grid>
        <Grid
          item
          xs={5}
          style={{
            display: 'flex',
            alignItems: 'center',
            borderRight: '1px solid',
          }}
        >
          <CardMedia
            image={item.media.source}
            alt={item.name}
            className={classes.media}
          />
          <Typography variant="h5">{item.name}</Typography>
        </Grid>
        <Grid item xs={2} className={classes.cartItem}>
          <Typography variant="h5">{item.price.formatted_with_symbol}</Typography>
        </Grid>
        <Grid item xs={2} className={classes.cartItem}>
          <RemoveIcon
            size="medium"
            style={{ border: '1px solid' }}
            onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
          />
          <Typography variant="h5">&nbsp;{item.quantity}&nbsp;</Typography>
          <AddIcon
            size="medium"
            style={{ border: '1px solid' }}
            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
          />
        </Grid>
        <Grid item xs={2} className={classes.cartItem}>
          <Typography variant="h5">
            {item.line_total.formatted_with_symbol}
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default CartItem;
