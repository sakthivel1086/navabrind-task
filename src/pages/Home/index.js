import Table from "../../components/TableComponent/Table";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";


const HOME = () => {
  
  return (
    <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/"><Button className="logout" color="inherit">Logout</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
      <div>Employee Details</div>
      <Table/>
    </>
  );
};

export default HOME;
