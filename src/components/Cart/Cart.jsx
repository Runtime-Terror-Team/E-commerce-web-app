// import { Box, Button, Card, Container, createMuiTheme, ThemeProvider, Typography } from '@material-ui/core';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import CartItem from './CartItem/CartItem';
// import './checkOutProduct.css';
// import useStyles from './styles';

// const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
//   const theme = createMuiTheme();

//   theme.typography.h5 = {
//     fontSize: '0.7rem',
//     '@media (min-width:600px)': {
//       fontSize: '1.2rem',
//     },
//     [theme.breakpoints.up('md')]: {
//       fontSize: '1.4rem',
//     },
//   };
//   const classes = useStyles();

//   const handleEmptyCart = () => onEmptyCart();

//   const renderEmptyCart = () => (
//     <Typography variant="subtitle1">
//       You have no items in your shopping cart,
//       <Link className="link" to="/">
//         start adding some
//       </Link>
//       !
//     </Typography>
//   );

//   if (!cart.line_items) return 'Loading';

//   const renderCart = () => (
//     <ThemeProvider theme={theme}>
//       <div className="checkout">
//         <div className="checkout__left">

//           <div>
//             <h2 className="checkout__title">Your shopping basket</h2>
//             {cart.line_items.map((lineItem) => (
//               <CartItem
//                 item={lineItem}
//                 onUpdateCartQty={onUpdateCartQty}
//                 onRemoveFromCart={onRemoveFromCart}
//               />
//             ))}
//           </div>

//         </div>

//       </div>

//       <Card variant="outlined" className="cardDetails">
//         <Typography variant="h4" className="cardTotal">
//           Cart Total
//         </Typography>
//         <div style={{ width: '100%' }}>
//           <Box
//             display="flex"
//             justifyContent="flex-start"
//             m={1}
//             p={1}
//             bgcolor="background.paper"
//             style={{ borderBottom: '1px solid grey', width: '100%' }}
//           >
//             <Box p={1} style={{ width: '100%', fontWeight: 'bold' }}>
//               Sub Total
//               <span p={1} style={{ float: 'right', fontWeight: 'bold' }}>
//                 {cart.subtotal.formatted_with_symbol}
//               </span>
//             </Box>
//           </Box>
//           <Box
//             display="flex"
//             justifyContent="flex-start"
//             m={1}
//             p={1}
//             bgcolor="background.paper"
//             style={{ borderBottom: '1px solid grey', width: '100%' }}
//           >
//             <Box p={1} style={{ width: '100%', fontWeight: 'bold' }}>
//               Shipping Charges
//               <span p={1} style={{ float: 'right', fontWeight: 'bold' }}>
//                 {' '}
//                 Free{' '}
//               </span>
//             </Box>
//           </Box>
//           <Box
//             display="flex"
//             justifyContent="flex-start"
//             m={1}
//             p={1}
//             bgcolor="background.paper"
//             style={{ borderBottom: '1px solid grey', width: '100%' }}
//           >
//             <Box p={1} style={{ width: '100%', fontWeight: 'bold' }}>
//               Total
//               <span p={1} style={{ float: 'right', fontWeight: 'bold' }}>
//                 {cart.subtotal.formatted_with_symbol}
//               </span>
//             </Box>
//           </Box>
//         </div>
//         <div>
//           <Button
//             className="emptyButton"
//             size="large"
//             type="button"
//             variant="contained"
//             color="secondary"
//             onClick={handleEmptyCart}
//           >
//             Empty cart
//           </Button>
//           <Button
//             className="checkoutButton"
//             component={Link}
//             to="/checkout"
//             size="large"
//             type="button"
//             variant="contained"
//             color="primary"
//           >
//             Checkout
//           </Button>
//         </div>
//       </Card>
//     </ThemeProvider>
//   );

//   return (
//     <Container>
//       <div className="toolbar" />
//       <Typography className="title" variant="h3" gutterBottom>
//         Your Shopping Cart
//       </Typography>
//       {!cart.line_items.length ? renderEmptyCart() : renderCart()}
//     </Container>
//   );
// };

// export default Cart;

import { Box, Button, Card, Container, createMuiTheme, Grid, ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
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

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link className={classes.link} to="/">
        start adding some
      </Link>
      !
    </Typography>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <ThemeProvider theme={theme}>
      <Grid
        spacing={3}
        style={{
          border: '1px solid',
          padding: '10px',
          borderBottom: 'hidden',
          borderRight: 'hidden',
        }}
      >
        <Grid container spacing={3} style={{ borderBottom: '1px solid' }}>
          <Grid item xs={1} className={classes.cartItem} />

          <Grid item xs={5} className={classes.cartItem}>

            <Typography variant="h5">Products</Typography>
          </Grid>
          <Grid item xs={2} className={classes.cartItem}>

            <Typography variant="h5">Price</Typography>
          </Grid>
          <Grid item xs={2} className={classes.cartItem}>

            <Typography variant="h5">Quality</Typography>
          </Grid>
          <Grid item xs={2} className={classes.cartItem}>

            <Typography variant="h5">Total</Typography>
          </Grid>
        </Grid>
        {cart.line_items.map((lineItem) => (
          <Grid key={lineItem.id}>
            <CartItem
              item={lineItem}
              onUpdateCartQty={onUpdateCartQty}
              onRemoveFromCart={onRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>

      <Card variant="outlined" className={classes.cardDetails}>
        <Typography variant="h4" className={classes.cardTotal}>
          Cart Total
        </Typography>
        <div style={{ width: '100%' }}>
          <Box
            display="flex"
            justifyContent="flex-start"
            m={1}
            p={1}
            bgcolor="background.paper"
            style={{ borderBottom: '1px solid grey', width: '100%' }}
          >
            <Box p={1} style={{ width: '100%', fontWeight: 'bold' }}>
              Sub Total
              <span p={1} style={{ float: 'right', fontWeight: 'bold' }}>
                {cart.subtotal.formatted_with_symbol}
              </span>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-start"
            m={1}
            p={1}
            bgcolor="background.paper"
            style={{ borderBottom: '1px solid grey', width: '100%' }}
          >
            <Box p={1} style={{ width: '100%', fontWeight: 'bold' }}>
              Shipping Charges
              <span p={1} style={{ float: 'right', fontWeight: 'bold' }}>
                {' '}
                Free{' '}
              </span>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-start"
            m={1}
            p={1}
            bgcolor="background.paper"
            style={{ borderBottom: '1px solid grey', width: '100%' }}
          >
            <Box p={1} style={{ width: '100%', fontWeight: 'bold' }}>
              Total
              <span p={1} style={{ float: 'right', fontWeight: 'bold' }}>
                {cart.subtotal.formatted_with_symbol}
              </span>
            </Box>
          </Box>
        </div>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </Card>
    </ThemeProvider>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
