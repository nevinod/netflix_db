import {
    Card,
    CardBody,
    Heading,
    Stack,
    Box,
    Text,
<<<<<<< HEAD
    StackDivider,
=======
    StackDivider
>>>>>>> 780885e2928a0c7f9e6b123978b8e7583786449b
} from "@chakra-ui/react";

export function DemoMovieCard(props: any) {
    return (
<<<<<<< HEAD
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
=======
        <Card>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    {props.movie.movie_name}
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    {`Directed by: ${props.movie.director}`}
                    </Text>
                    <Text pt='2' fontSize='sm'>
                    {props.movie.rating}
                    </Text>
                </Box>
>>>>>>> 780885e2928a0c7f9e6b123978b8e7583786449b
                </Stack>
            </CardBody>
        </Card>
    )
}
