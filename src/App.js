import {useEffect, useState} from "react";
import './App.css';


function App() {

const [myActivity, setMyActivity] = useState('');


//useEffect (() => {
//getActivity();
//    }, [])

//const getActivity = async () => {
//  const response = await fetch(`http://www.boredapi.com/api/activity/`);
//  const data = await response.json();
 // console.log(data.activity);
 // setMyActivity(data.activity)
//}

useEffect (() => {
  const getActivity = async () => {
    const response = await fetch(`http://www.boredapi.com/api/activity/`);
    const data = await response.json();
    console.log(data.activity);
  }
  getActivity()
}, [])


  return (
<div className="App">

<div className="container">
<h2>{myActivity}</h2>
</div>

<div className="container">
  <button className="btn" onClick={getActivity}> New Activity</button>
</div>

</div>
  );
}

export default App;
