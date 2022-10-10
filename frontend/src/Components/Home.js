import React from 'react'
import * as Chk from '@chakra-ui/react'

const Home = () => {
    return (
        <section>
            <Chk.Text>Bio</Chk.Text>
            <Chk.Text>
                This site is a place where I can do whatever I want,
                however I want. 
            </Chk.Text>
            <Chk.Text>Planned Features:</Chk.Text>
            <Chk.UnorderedList>
                <Chk.ListItem>A Blog</Chk.ListItem>
                <Chk.ListItem>Some games like Snake or Frogger</Chk.ListItem>
                <Chk.ListItem>A projects section</Chk.ListItem>
            </Chk.UnorderedList>
        </section>
    )
}

export default Home