import { useState } from "react";
import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Collapse from "@mui/material/Collapse";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Colors } from '../../../mui/theme';
import { hasChildren } from "../../ultis/hasChildren";

const SingleLevel = ({ item }) => (
  <Link href={item.url} underline="none" variant="inherit">
    <MenuItem
      sx={{ color: Colors.secondary }}
      divider={true}
      autoFocus={true}
    >
      {item.title.toUpperCase()}
    </MenuItem>
  </Link>
);

const MultiLevel = ({ item }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { items: children } = item;

  return (
    <>
      <Button
        sx={{
          color: Colors.secondary,
        }}
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        {item.title}
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Button>
      <MuiMenu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
          "disablePadding": true,
          onMouseLeave: handleClose,
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          orientation="horizontal"
          sx={{
            backgroundColor: Colors.primary,
            backgroundImage:
              "linear-gradient(to right,#980d05,#71030c, #b20000,#71030c, #b20000)",
          }}
        >
          {children.map((child, key) => (
            <MenuItems key={key} item={child} />
          ))}
        </Collapse>
      </MuiMenu>
    </>
  );
};

const MenuItems = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};

export default MenuItems