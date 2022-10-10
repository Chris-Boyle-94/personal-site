import React, { useState } from 'react'
import {
    Button, Input, Stack,
    Text, Textarea
} from '@chakra-ui/react'

const Blog = () => {
    const initialEntry = {
        title: '',
        content: ''
    }

    const [newEntry, setNewEntry] = useState(initialEntry)
    const [allEntries, setAllEntries] = useState([])

    const handleChange= (e) => {
        setNewEntry(prevEntry => {
            return {
                ...prevEntry,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = () => {
        setAllEntries(prevEntries => {
            return [
                ...prevEntries,
                newEntry
            ]
        })
        setNewEntry(initialEntry)
    }

    return (
        <section>
            <div>
                <Text>New Entry</Text>
                <Input
                    name='title'
                    value={newEntry.title}
                    placeholder='Title'
                    onChange={handleChange}
                />
                <Textarea
                    name='content'
                    value={newEntry.content}
                    placeholder='Content'
                    onChange={handleChange}
                />
                <Button onClick={handleSubmit} >Submit</Button>
            </div>
            <Stack>
                {allEntries.map((entry, idx) => {
                    return (
                        <Stack key={idx} >
                            <Text fontSize='lg'>{entry.title}</Text>
                            <Text>{entry.content}</Text>
                        </Stack>
                    )
                })}
            </Stack>
        </section>
    )
}

export default Blog;
