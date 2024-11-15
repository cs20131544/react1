import React from 'react';
import { useState } from 'react';
import './App.css';


function App() {
let [posts,setPosts] = useState([])
let [times, setTimes] = useState([]);
let [pop,setPop] = useState(false);
let [inputValue,setInputValue] = useState("")



return (
<div className="App">
    <div className="header">
        <div className="logo">ToMust</div>
        <div className="search">
            <input type="text" onChange={(e)=>{setInputValue(e.target.value);}}/><button className='submit'
                onClick={(e)=>{
                   
                    if(inputValue!==""){
                        let tmpTime = new Date();
                        setPosts([inputValue,...posts])
                        setTimes([tmpTime,...times])
                }
    
                }}>&nbsp;글발행&nbsp; </button>
                
        </div>
        <div className="contents poppins-regular">
            
            {
           
            posts.map(function(post,i){
            return (

                <List 
                posts={posts} 
                setPosts={setPosts} 
                key={i} 
                idx={i} 
                times = {times}
                setTimes = {setTimes}
                pop={pop} 
                setPop={setPop}
                />)
            })
            }
        </div>
        {pop?<Pop  />:null}
    </div>
</div>
);
}


function List(props){
let [like,setLike]=useState(0);

return(
<>
    <li className='list' key={props.idx}>
        <h2>Title : {props.posts[props.idx]} <span className="like" onClick={()=>{
                setLike(like+1)
                }}>❤️</span>{like}</h2>
                <p>Date : {props.times[props.idx].toDateString()}</p>

        <div className="settings">
            <button className='detail' onClick={()=>{
                props.setPop(!props.pop)
                }}>상세보기+</button>
            <button className='removePost' onClick={()=>{
                let copy = [...props.posts];
                let copyTimes = [...props.times];
                copy.splice(props.idx,1)
                copyTimes.splice(props.idx,1)
                props.setPosts(copy);         
                props.setTimes(copyTimes);       
            }}>글삭제</button>
            
        </div>


    </li>
</>
);
}
function Pop(props){
return(
<div className="pop">
    <p>Memo : </p>
    <p>Date : {props.time}</p>
</div>
);
}
export default App;