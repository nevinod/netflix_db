import React from "react";
import { Container } from "@chakra-ui/react"
import Navbar from "@/components/Navbar";
import RootLayout from "./layout";

function MainLayout({ children }: { children: React.ReactNode}) {
    return (
        <RootLayout>
            <Navbar />
            <Container as="main" maxW='4xl' mt="20" justifyContent="center" display="flex">
                {children}
            </Container>
        </RootLayout>
    )
}

export default MainLayout;