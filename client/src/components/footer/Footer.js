// import React from 'react';
// import './footer.scss';
// import { Link } from 'react-router-dom';
// import bg from '../../assets/footer-background.jpg';
// import logo from '../../assets/main-logo.png';

// const Footer = () => {
//   return (
//     <div className='footer' style={{ backgroundImage: `url(${bg})` }}>
//       <p> © 2023 Shivam. All rights reserved.</p>
//     </div>
//   );
// };

// export default Footer;
import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import bg from '../../assets/footer-background.jpg';
import logo from '../../assets/main-logo.png';
import Grid from '@mui/material/Grid';
const Footer = () => {
  return (
    <div className='footer' style={{ backgroundImage: `url(${bg})` }}>
      <div className='footer__content container'>
        <div className='footer__content__logo'>
          <div className='logo'>
            <img src={logo} alt='mymovies' />
            <Link to='/'>MyMovies</Link>
          </div>
        </div>
        <Grid container className='footer__content__menu'>
          <Grid item xs={3} sm={2} md={3}><Link to='/'>Home</Link></Grid>
          <Grid item xs={3} sm={2} md={3}><Link to='/movie'>Movies</Link></Grid>
          <Grid item xs={3} sm={2} md={3}><Link to='/favorites'>Favorites</Link></Grid>
          <Grid item xs={3} sm={2} md={3}><Link to='/tv'>Shows</Link></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
