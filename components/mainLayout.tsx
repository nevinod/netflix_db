import React from "react";
import { Container } from "@chakra-ui/react"
import Navbar from "@/components/Navbar";
import RootLayout from "./layout";

function MainLayout({ children }: { children: React.ReactNode}) {
    return (
        <RootLayout>
            <Navbar />
            <Container as="main" mt="20">
                {children}
            </Container>
        </RootLayout>
    )
}

export default MainLayout;