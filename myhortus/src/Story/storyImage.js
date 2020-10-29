import React from 'react';


function StoryImage(props){
    return(
        <div class="flex flex-wrap no-underline text-black h-64 overflow-hidden">
          <div class="w-full h-full">
            <img class="block pr-px w-full h-full" src={props.url} alt=""/>
          </div>
        </div>
    )
};

export default StoryImage;