import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button, TextField } from '@material-ui/core';
// import { Container, Grow, Grid,  TextField, Button, Paper } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { getPostsBySearch } from '../../actions/posts';

import memoriesLogo from '../../images/memoriesLogo.png';
// import memoriesText from '../../images/ideas.png';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';
import './styles.css';
import { red } from '@material-ui/core/colors';

const Navbar2 = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  // const history = useHistory();
  const classes = useStyles();

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const history = useHistory();

  // const classes = useStyles();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  };

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      history.push('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));

  return (

    <AppBar className={classes.appBar} position="static" color="inherit">

      <Link to="/" className={classes.brandContainer}>
        {/* <img component={Link} to="/" src={memoriesText} alt="icon" height="45px" /> */}
        <Typography className={classes.text} >Blog Here</Typography>
       <img className={classes.image} src="data:image/jpeg;base64,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" alt="icon" height="40px" />
      </Link>


      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile} >
            <Button component={Link} to="/createpost" variant="contained" className={classes.createpost} color="secondary" >Add a Blog here!</Button>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
      {/* <div class="row g-3">
        <div class="col">
          <input type="text" style={{border:'1px solid', borderRadius:'5px', height:'25px'}} className="form-control" placeholder="Search Post" aria-label="First name" onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search Memories" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div class="col">
          <input type="text" style={{border:'1px solid', borderRadius:'5px', height:'25px', marginTop:'10px'}}  className="form-control" placeholder="Search tags" aria-label="Last name" 
          value={tags}
          onAdd={(chip) => handleAddChip(chip)}
          onDelete={(chip) => handleDeleteChip(chip)}
          label="Search Tags"
          variant="outlined" />
        </div>
      </div> */}
      <div className={classes.appBarSearch} color="inherit" >
        <TextField onKeyDown={handleKeyPress} style={{height:'10px', width:'150px'}} name="search" label="Search Notes" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
        <ChipInput 
          style={{ width:'110px', marginLeft:'10px', marginTop:'-7px', marginRight:'30px'}}
          value={tags}
          onAdd={(chip) => handleAddChip(chip)}
          onDelete={(chip) => handleDeleteChip(chip)}
          label="Search Tags"
          
        />
        <Button onClick={searchPost} style={{marginTop:'15px'}} variant="contained" color="primary">Search</Button>

      </div>
    </AppBar>
  );
};

export default Navbar2;
