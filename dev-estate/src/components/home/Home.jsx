import { Grid, GridItem } from '@chakra-ui/react'
const Home = () => {
    return (
        <Grid 
        as="section"
        h="100vh"
        w="100vw">
            <div>Home</div>
            <Grid
                templateAreas={`"header header"
                    "nav main"
                    "nav footer"`}
                gridTemplateRows={'50px 1fr 30px'}
                gridTemplateColumns={'150px 1fr'}
                gap='1'
                color='blackAlpha.700'
                fontWeight='bold'
            >
                <GridItem pl='2' bg='orange.300' area={'header'}>
                    Header
                </GridItem>
                <GridItem pl='2' bg='pink.300' area={'nav'}>
                    Nav
                </GridItem>
                <GridItem pl='2' bg='green.300' area={'main'}>
                    Main
                </GridItem>
                <GridItem pl='2' bg='blue.300' area={'footer'}>
                    Footer
                </GridItem>
            </Grid>
        </Grid>
    )
}

export default Home