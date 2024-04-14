// import sun from "../../../assets/sun.svg";
import Button from "@material-ui/core/Button";
import styles from "./style.module.scss";
import { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import backIcon from "assets/linkIcon/back.svg";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  var currentUrl = window.location.pathname;
  console.log(currentUrl);

  return (
    <header className={styles.headerContainer}>
      {currentUrl != "/my-web-cv" && (
        <Button aria-controls="simple-menu" aria-haspopup="true">
          <a href="/my-web-cv">
            <img src={backIcon} className={styles.backButton} />
          </a>
        </Button>
      )}
      <Button
        className={styles.menuButton}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        My experience
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <a href="/digitable" className={styles.atribute}>
            Digitable
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="/garpix" className={styles.atribute}>
            Garpix
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="my-web-cv/cnet" className={styles.atribute}>
            C.NET
          </a>
        </MenuItem>
      </Menu>
    </header>
  );
};
