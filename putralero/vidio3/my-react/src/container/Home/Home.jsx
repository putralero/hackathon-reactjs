import React, {Component} from "react";
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";

class Home extends Component{
    render(){
        return (
            <div>
                <p>Youtube component</p>
                <hr/>
                <YoutubeComp 
                    time="07.12" title="munculnya sang ulraman"
                    desc="12 jt kali di tonton 1 tahun yg lalu"/>
                <YoutubeComp 
                    time="08.21" title="ultraman bertemu manusia"
                    desc="11 jt kali di tonton 1 tahun yg lalu"/>
                <YoutubeComp 
                    time="10.12" title="ultraman melawan gigante"
                    desc="11,23 jt kali di tonton 12 bulan yg lalu"/>
                <YoutubeComp
                     time="02.32" title="jurus pamukas ultraman "
                     desc="15 jt kali di tonton 10 bulan yg lalu"/>
                <YoutubeComp/>
            </div>
        )
    }
}

export default Home;