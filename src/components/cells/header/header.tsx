import Button from "@material-ui/core/Button";
import styles from "./style.module.scss";
import { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import backIcon from "assets/linkIcon/back.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const currentUrl = window.location.pathname;

  return (
    <header className={styles.headerContainer}>
      {currentUrl != "/my-web-cv/" && (
        <Button aria-controls="simple-menu" aria-haspopup="true">
          <Link to="/my-web-cv">
            <img src={backIcon} className={styles.backButton} />
          </Link>
        </Button>
      )}
      {currentUrl === "/my-web-cv/" && (
        <Button
          className={styles.menuButton}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          My experience
        </Button>
      )}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="digitable" className={styles.atribute}>
            DigiTable
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="garpix" className={styles.atribute}>
            Garpix
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="cnet" className={styles.atribute}>
            C.NET
          </Link>
        </MenuItem>
      </Menu>
    </header>
  );
};
