import React from 'react'
import { TabPanels, TabPanel } from "@chakra-ui/react";
import NavBar from './Components/NavBar';
import Home from './Components/Home'
import Blog from './Components/Blog';
import Snake from './Components/Games/SnakeComponents/Snake';

const App = () => {
    return (
        <div>
            <h1>My World</h1>
            <NavBar>
                <TabPanels>
                    <TabPanel>
                        <Home />
                    </TabPanel>
                    <TabPanel>
                        <Blog />
                    </TabPanel>
                    <TabPanel>
                        <Snake />
                    </TabPanel>
                    <TabPanel>
                        No projects yet.
                    </TabPanel>
                </TabPanels>
            </NavBar>
        </div>

    )
}

export default App;
