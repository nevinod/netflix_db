import React from "react";
import { Container } from "@chakra-ui/react"
import Navbar from "@/components/Navbar";
import RootLayout from "./layout";

function MainLayout({ children }: { children: React.ReactNode}) {
    return (
        <RootLayout>
            <Navbar />
<<<<<<< HEAD
            <Container as="main" maxW='4xl' mt="20" justifyContent="center" display="flex">
=======
            <Container as="main" mt="20">
>>>>>>> 780885e2928a0c7f9e6b123978b8e7583786449b
                {children}
            </Container>
        </RootLayout>
    )
}

export default MainLayout;