import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "chakra-ui"
import "./Styles.css";

/**
 * Component representing the navigation bar feature with links based on the current user's role.
 * @returns JSX element representing the navigation bar.
 */

export default function NavBar() {

  
    return (
        // Create red bar that spans the whole page horizontally and has our two navigation links for "menu" and "about us"
        <Box as="nav" className="navbar" py={4} data-testid="bar" fontSize={"xs"} lineHeight={"normal"} letterSpacing={"normal"} wordBreak={"normal"}>
                <>
                    <Link to="/">
                        <Box className="navbtn" as="span" mr={4} fontSize={"xs"} lineHeight={"normal"} letterSpacing={"normal"} wordBreak={"normal"}>
                            home
                        </Box>
                    </Link>
                    <Link to="/AboutUs">
                        <Box className="navbtn" as="span" fontSize={"xs"} lineHeight={"normal"} letterSpacing={"normal"} wordBreak={"normal"}>
                            about us
                        </Box>
                    </Link>
                </>
        </Box>
    );
}
