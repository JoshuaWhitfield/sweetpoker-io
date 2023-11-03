import { getNavItems } from "../../slices/Nav/navSlice.js";
import { Row } from "reactstrap";
import NavItem from "./NavItem.js";

const NavList = () => {
    const navArr = getNavItems();
    
    return (
        <Row style={{width: '500px'}}>
            {
                navArr.map(
                    (item, idx) => {
                        return (
                            <>
                                <NavItem key={idx} name={item.name} path={item.path} target={item.target}/>
                            </>
                        );
                    }
                )
            }
        </Row>
    );
}

export default NavList