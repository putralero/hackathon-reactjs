import React from "react";
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return(
        <div className="youtube-wrapper">
            <div className="img-trumb">
                <img src="https://i.ytimg.com/vi/QkRRH21AYQo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCrVr6wzaWdSdTpFEtzB3CiiNZcRg" alt=""/>
                <p className="title">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time: '00.00',
    title: 'title here',
    desc: 'xx kali di tonton xx yg lalu'
    
}

export default YoutubeComp;