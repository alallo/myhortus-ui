import React from 'react';
import StoryImage from './storyImage';
import StoryItem from './storyItem';


function Story(){
    return(
        <div class="bg-white max-w-md mx-auto mt-20 border border-grey-light rounded-t-lg overflow-hidden ">
            <StoryImage url={"https://images.unsplash.com/photo-1584479898061-15742e14f50d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}></StoryImage>
            <StoryItem></StoryItem>
      </div>
    )
};


export default Story;