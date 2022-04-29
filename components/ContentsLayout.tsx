import React from "react";

import Link from 'next/link'
import ReactPlayer from "react-player";


interface Props {

    content?: any,

}

const ContentLayout: React.FC<Props> = ({ content }) => {

    const contentToArray = () => {
        if (content && content?.acf?.contents)
            return Object.keys(content?.acf?.contents)
                .map(function (key) {
                    return content.acf.contents[key];
                })
        else { return [] }
    }

    const lay = contentToArray()

    console.log({ lay }); // ["hello", "this is", "javascript!"]

    const contentRender = (obj: any, i: number) => {
        if (obj && obj.type && obj.type == "image")
            return <img key={i} src={obj.url} alt="" style={{ width: "100%", height: "auto" }} />
        if (obj && obj.type && obj.type == "video")
            return <div><ReactPlayer
            muted
            className="video_player"
            src={obj.url}
            playsinline
            loop
        /></div> 
    }




        return (
            <>
                {lay.map((obj, i) =>
                    contentRender(obj, i)
                )}
                  <video controls autoPlay loop muted>
          <source src="https://paolominopoli.altervista.org/wp-content/uploads/2022/04/Video.mp4" type="video/mp4"></source>
        </video>
              
                <ReactPlayer
            muted
            className="video_player"
            src="https://paolominopoli.altervista.org/wp-content/uploads/2022/04/Video.mp4"
            playsinline
            loop
        />
            </>
        );
    }

    export default ContentLayout;