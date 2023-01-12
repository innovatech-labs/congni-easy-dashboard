import React from 'react'
import { Textarea, Pane } from 'evergreen-ui'


function Home() {
    return (
        <Pane>
            <Pane padding={24} marginBottom={16}>
                <Textarea name="resume" placeholder="Resume" />
            </Pane>
            <Pane padding={24} marginBottom={16}>
                <Textarea name="job-description" placeholder="Job description" />
            </Pane>
            <Pane padding={24} marginBottom={16}>
                <Textarea name="cover-letter" placeholder="Cover letter" />
            </Pane>
        </Pane>
    );
}

export default Home;
