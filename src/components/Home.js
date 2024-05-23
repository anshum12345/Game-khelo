import React, { useState, useEffect } from "react";
import styled from "styled-components"; // Import styled from styled-components
import { motion } from "framer-motion"; // Import motion from framer-motion
import AnchorComponent from "../subComponents/Anchor";
import { Container } from "@chakra-ui/react";

const Home = () => {
    const [numbers, setNumbers] = useState(0);

    useEffect(() => {
        let num = (window.innerHeight - 70) / 30;
        setNumbers(parseInt(num));
    }, []);

    // Define MainContainer using styled components and framer-motion
    const MainContainer = styled(motion.div)`
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;

    `;

    return (
        <>
            <style>
                {`
                    /* General Styles */
                    body {
                        margin: 0;
                        font-family: Arial, sans-serif;
                        // background-color: #f4f4f4;
                    }

                    /* Navigation Bar */
                    .my-nav {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        background-color: #333;
                        padding: 10px 20px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    }

                    #my-title {
                        font-size: 1.5em;
                    }

                    #my-title a {
                        color: white;
                        text-decoration: none;
                    }

                    .my-nav-content ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                        display: flex;
                    }

                    .my-nav-content ul li {
                        margin-left: 15px;
                    }

                    .my-nav-content ul li a {
                        color: white;
                        text-decoration: none;
                        transition: color 0.3s;
                    }

                    .my-nav-content ul li a:hover {
                        color: #ff4500; /* Hover color */
                    }

                    /* Icon Styles */
                    .my-nav-content ul li a i {
                        color: white;
                    }

                    /* Responsive Design */
                    @media (max-width: 768px) {
                        .my-nav {
                            flex-direction: column;
                        }

                        .my-nav-content ul {
                            flex-direction: column;
                            align-items: center;
                        }

                        .my-nav-content ul li {
                            margin: 10px 0;
                        }
                    }
                `}
            </style>

            <Container>
                {/* <LogoComponent />
                <PowerButton />
                <SocialIcons /> */}
                <AnchorComponent number={numbers} />
                <Container />
                <MainContainer />

               
            </Container>
        </>
    );
}

export default Home;
