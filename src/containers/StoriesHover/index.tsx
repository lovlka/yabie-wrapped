import React, { useContext, useEffect } from "react"

import { StoryImg } from "@app/components/StoryImg"
import { StoriesContext } from "@app/contexts/StoriesContext"
import { IStoriesContext } from "@app/types/interfaces/storiesContext.interface"
import { fetchData } from "@app/data/api"

interface StoriesHoverProps {
  children: JSX.Element
}

const StoriesHover: React.FC<StoriesHoverProps> = ({ children }): JSX.Element => {
  const { currentStories, currentStory, loading } = useContext(StoriesContext) as IStoriesContext
  const [data, setData] = React.useState(null);

  useEffect(() => {
    fetchData('/data/merchantCode/5992/5567111702')
      .then(data => {
        if (data) {
          console.log('Fetched data:', data);
          setData(data);
        } else {
          console.log('No data fetched.');
        }
      });
  }, []);

  useEffect(() => {
    const spanElement = document.getElementById(currentStory)
    
    if(loading) spanElement?.classList.add("animation-pause")
    if(!loading) spanElement?.classList.remove("animation-pause")
  }, [loading])
  
  return(
    <section className="max-w-[900px] mx-auto">
      <StoryImg imgUrl={currentStory} data={data}>
        <div className="absolute px-2 w-[97%] bg-gradient-to-t from-transparent to-black">
          <div className="flex justify-between pt-3 space-x-1 px-1">
            {currentStories.map(story => (
              <div key={story} className="w-full relative">
                <span className="story-hover"></span>
                <span className="absolute top-0 left-0 story-hover" id={story}></span>
              </div>
            ))}
          </div>
          {children}
        </div>
      </StoryImg>
    </section>
  )
}

export { StoriesHover }