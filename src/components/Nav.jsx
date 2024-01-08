import { useState } from "react";

import { headerLogo } from "../assets/images";

import { hamburger } from "../assets/icons";

import { navLinks } from "../constants/index";

import { Box, Drawer, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const menuOptions = [
  {
    text: "Home",
    icon: <HomeIcon />,
    url: "#home",
  },
  {
    text: "About",
    icon: <InfoIcon />,
    url: "#about-us",
  },
  {
    text: "Products",
    icon: <ShoppingCartRoundedIcon />,
    url: "#products",
  },
  {
    text: "Contact",
    icon: <PhoneRoundedIcon />,
    url: "#contact-us",
  },
];

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="headerLogo" width={130} height={29} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <img
            onClick={() => setOpenMenu(true)}
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
          />
        </div>
        
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
          
        >
          <Box
            sx={{ width: 200, }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem  key={item.text} disablePadding >
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <Link
                      href={item.url}
                      style={{
                        textDecoration: "none",
                      }}
                      
                    >
                      <ListItemText className="text-slate-gray">{item.text}</ListItemText>
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

      </nav>
    </header>
  );
};

export default Nav;
