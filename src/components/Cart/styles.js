import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
  },
  emptyButton: {
    lineHeight: '1.2',
    fontSize: '13px',
    display: 'inline-block',
    alignItems: 'center',
    padding: '15px 30px',
    color: '#fff',
    marginTop: '20px',
    borderRadius: '3px',
    minWidth: '200px',
    textAlign: 'center',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
      marginTop: '20%',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    lineHeight: '1.2',
    fontSize: '13px',
    display: 'inline-block',
    alignItems: 'center',
    padding: '15px 30px',
    background: '#343e45',
    color: '#fff',
    marginTop: '20px',
    borderRadius: '3px',
    minWidth: '200px',
    textAlign: 'center',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '2%',
    marginBottom: '10%',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
    float: 'right',
    padding: '2.5%',
    radius: '8%',
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: '1px solid',
  },
  cardTotal: {
    display: 'flex',
    marginTop: '5%',
  },
  amount: {
    textAlign: 'right',
  },
}));
