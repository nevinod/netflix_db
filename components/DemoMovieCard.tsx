import {
    Card,
    CardBody,
    Heading,
    Stack,
    Box,
    Text,
    StackDivider,
} from "@chakra-ui/react";

export function DemoMovieCard(props: any) {
    return (
        <Card size="sm" height={"10rem"} width={"15rem"} margin={3}>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='2'>
                    <Box>
                        <Heading size='sm' textTransform='uppercase'>
                            {props.movie.movie_name}
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {`Directed by: ${props.movie.director}`}
                        </Text>
                        <Text fontSize="xl" as="b" mt="2rem">{props.movie.rating}</Text>              
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}
