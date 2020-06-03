import styled from "styled-components";
import Avatar from "./avatar";
import { useRouter } from "next/router";



const Nav = styled.nav`
  height: 100%;
  width: 15vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: ${({theme}) => theme.light.body};
  overflow-x: hidden;
  padding-top: 20px;
  border-right: 1px solid white;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: ${({theme}) => theme.light.navText};
  cursor: pointer;

  font-weight: 200;
  &:visited {
    ${'' /* color: ${({theme}) => theme.light.text}; */}

  }
  &:hover {
    font-weight: 1000;
    text-shadow: #ddd 2px 0 1px;
    transition-duration: 0.5s;
    color: ${({theme}) => theme.light.lightRed}

  }
`;

const navItems = [
  {
    id: "/projects",
    label: "projects",
  },
  {
    id: "/about",
    label: "about",
  },
  {
    id: "/",
    label: "home",
  },
];

const SideNav = () => {
  const router = useRouter()



  return (
    <>
    <Nav>
      <ul>
        {navItems.map(({ id, label }) => {
          return (
            <li  key={label} style={{ listStyle: "none" }}>
              <NavItem href={id}>
                {label}
              </NavItem>
            </li>
          );
        })}
      </ul>
      {router.route === "/"? <Avatar />: null}
      
    </Nav>
    </>
  );
};

export default SideNav;
