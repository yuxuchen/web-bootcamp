import React, {useState, useEffect} from 'react';
import './App.css';

function App(){
    const [count, setCount] = useState(0);
    const [count1, setCount1] =useState(0);

//useEffect 参数的第二个值是触发useEffect更改状态的筛选条件
    useEffect(()=>{
        document.title = `you click ${count} times`;
    },[count])
    return (
        <>
        <div>
            <p> You click {count} times</p>
            <button onClick={() => setCount(count+1)}>
            Click me
            </button>
        </div>
        <div>
         <p> You click {count1} times</p>
         <button onClick={() => setCount1(count1+1)}>
         Click me
         </button>
     </div>
     </>
    )
}
export default App;