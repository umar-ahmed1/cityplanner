import { To, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export default function Header() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();

    const OpenPage = (arg : To) => {    
        navigate(arg);
    };

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    return (
        <>
            <Box >
                <AppBar position="static">
                    <Toolbar >
                        <Box display={"flex"}
                            flexDirection={"row"}
                    width={"100%"} height={"100%"} sx={{border:1}} justifyItems={"end"}>
                            <Typography>Create an Account</Typography>
                            <Button variant="contained" color={"secondary"}>
                                <Typography> Login </Typography>
                            </Button>
                        </Box>    
                    </Toolbar>
                </AppBar>
            </Box>
            
            <Outlet />
        </>
    );
};
