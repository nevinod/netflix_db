import { Flex, Heading, Link } from "@chakra-ui/react";

function Navbar() {
    return (
        <Flex 
            as="header" 
            position="fixed" 
            backgroundColor="lightcoral" 
            w="100%" 
            h="4rem" 
            top={0}
            align="center"
        >
            <Link ml="3">
                <Heading>MOVIES_DB</Heading>
            </Link>
            
        </Flex>
    )
}

export default Navbar;