import {
    Card,
    CardBody,
    Heading,
    Stack,
    Box,
    Text,
    StackDivider
} from "@chakra-ui/react";

export function DemoMovieCard(props: any) {
    return (
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
                </Stack>
            </CardBody>
        </Card>
    )
}
