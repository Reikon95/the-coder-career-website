import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
          <div className="navbar-wrapper">
            <Typography
              variant="h5"
              color="inherit"
              className="navbar-home-link"
            >
              The Coder Career
            </Typography>
            <div className="navbar-endpoint-group">
              <Typography variant="h7" color="inherit" className="navbar-item">
                Blog Posts
              </Typography>
              <Typography variant="h7" color="inherit" className="navbar-item">
                Write for us!
              </Typography>
              <Typography variant="h7" color="inherit" className="navbar-item">
                Resources
              </Typography>
              <Typography variant="h7" color="inherit" className="navbar-item">
                Contact Us
              </Typography>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
