import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";

export const Navbar = ({ items, brand }) => {
  return (
    <nav className="navbar">
      <a href="." className="navbar-brand">
        {brand}
      </a>
      <ul className="navbar-nav">
        {items.map((item) => (
          <NavItem
            key={item.id}
            title={item.title !== "Caret" && item.title}
            icon={item.icon}
            link={item.link}
          >
            <DropdownMenu list={item.children} />
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export const NavItem = ({ title, icon, children, link = "#" }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a
        href={link}
        title={title}
        className="icon-button"
        onClick={() => setOpen(!open)}
      >
        {icon}
      </a>

      {open && children.props.list != null && children}
    </li>
  );
};

export const DropdownMenu = ({ list }) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem({
    goToMenu = null,
    children = null,
    leftIcon = null,
    rightIcon = null,
    link = "#",
  }) {
    return (
      <a
        href={link}
        className="menu-item"
        onClick={() => goToMenu && setActiveMenu(goToMenu)}
      >
        {leftIcon && <span className="icon-button">{leftIcon}</span>}
        {children}
        {rightIcon && (
          <span className="icon-button icon-right">{rightIcon}</span>
        )}
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          {list.map((item) => (
            <DropdownItem
              key={item.id}
              rightIcon={item.rightIcon}
              leftIcon={item.leftIcon}
              link={item.link}
              goToMenu={item.goToMenu}
            >
              {item.title}
            </DropdownItem>
          ))}
        </div>
      </CSSTransition>
      {list.map((item) => (
        <CSSTransition
          key={item.id}
          in={activeMenu === item.title}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              {item.title}
            </DropdownItem>
            {item.children &&
              item.children.map((child) => (
                <DropdownItem
                  key={child.id}
                  link={child.link}
                  leftIcon={child.leftIcon}
                >
                  {child.title}
                </DropdownItem>
              ))}
          </div>
        </CSSTransition>
      ))}

      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};
