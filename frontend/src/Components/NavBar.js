import React from 'react'
import { Tabs, TabList, Tab } from '@chakra-ui/react'

const NavBar = ({ children }) => {
    return (
        <Tabs>
            <TabList>
                <Tab>
                    Home
                </Tab>
                <Tab>
                    Blog
                </Tab>
                <Tab>
                    Games
                </Tab>
                <Tab>
                    Projects
                </Tab>
            </TabList>
            {children}
        </Tabs>
    )
}

export default NavBar;
