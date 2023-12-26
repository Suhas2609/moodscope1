import React ,{ChangeEvent, useState} from 'react';
import { Picker } from 'emoji-mart';
import Image from 'next/image';

 

const Mainpage = () => {


  const[colour,setcolour]=useState(false);
  const[Name,setname]=useState("");
  const[DOB,setDOB]=useState("");
  const[Days,setDays]=useState("");
  const[fill,setfill]=useState("");

  const changename=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setname(event.target.value);
  }
  const tellday=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setfill(event.target.value);
  }

  const changeDOB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDOB(event.target.value);
  };
  const Changedays = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDays(event.target.value);
  };
  
  const Submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ Name, DOB , Days });
    setname('');
    setDOB('');
    setDays('');
  };

  
  

  const gradientText = {
    background: 'linear-gradient(to right, #F59115, #FFF878)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    // marginTop: '10px',
    fontSize: '30px',
    fontWeight: 'bold',
    fontFamily: 'Lucida Calligraphy,cursive'
  };

  const emotionsWithEmojis = [
    { emotion: 'Happy', emoji: '😊' },
    { emotion: 'Sad', emoji: '😢' },
    { emotion: 'Excited', emoji: '😄' },
    { emotion: 'Worried', emoji: '😟' },
    { emotion: 'Surprised', emoji: '😮' },
    { emotion: 'Scared', emoji: '😨' },
    { emotion: 'Crazy', emoji: '🤪' },
    { emotion: 'Frustrated', emoji: '😤' },
    { emotion: 'Angry', emoji: '😡' },
    { emotion: 'Bored', emoji: '😐' },
    { emotion: 'Sick', emoji: '🤢' },
    { emotion: 'Embarrassed', emoji: '😳' },
    { emotion: 'Tired', emoji: '😴' },
    { emotion: 'Nervous', emoji: '😬' },
    { emotion: 'Calm', emoji: '😌' },
    { emotion: 'Confused', emoji: '😕' },
    { emotion: 'Anxious', emoji: '😰' },
    { emotion: 'Aggressive', emoji: '😠' },
    { emotion: 'Sleepy', emoji: '😪' },
    { emotion: 'Hungry', emoji: '🍔' },
  ];

  
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateRows: 'repeat(4, 1fr)',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '20px',
    width: '75%', 
    height: 'auto', 
    padding: '10px', 
  };

  const showAlert = () => {
    alert("Please Kindly Select Your Emotion Of The Day!");
  };
  // const buttonStyle = { 
  //   height: '60px', 
  //   padding: '5px', 
  //   backgroundColor: colour ?'#17B5E4':'#D9D9D9',
  //   color: '#000000',
  //   border: 'none',
  //   borderRadius: '50px',
  //   cursor: 'pointer',
  //   fontSize: '20px', 
  //   display: 'flex', 
  //   justifyContent: 'center', 
  //   alignItems: 'center', 
  // };

  return (
    
    
    <div
      style={{
        backgroundColor: '#1E1E1E',
        backgroundImage: 'linear-gradient(#1E1E1E, #003041, #1E1E1E)',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        border: '1px solid #1E1E1E',
        boxSizing: 'unset',
        position: 'relative',
      }}
    >
    <div className="absolute bottom-80 right-12"> 
        <div className="relative rounded-lg w-64 overflow-hidden bg-white before:absolute before:w-12 before:h-12 before:content-[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:-z-10 after:w-20 after:h-20 after:content-[''] after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
            <input
            placeholder="Days Completed..."
            className="relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500"
            type="text"
            value={Days}
            onChange={Changedays}/>
        </div>
    </div>
    <div className="absolute top-80 right-12"> 
        <div className="relative rounded-lg w-64 overflow-hidden bg-white before:absolute before:w-12 before:h-12 before:content-[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:-z-10 after:w-20 after:h-20 after:content-[''] after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
            <input
            placeholder="Name..."
            className="relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500"
            type="text"
            value={Name}
            onChange={changename}/>
        </div>
    </div>
    <div className="absolute bottom-30 right-12"> 
        <div className="relative rounded-lg w-64 overflow-hidden bg-white before:absolute before:w-12 before:h-12 before:content-[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:-z-10 after:w-20 after:h-20 after:content-[''] after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
            <input
            placeholder="DOB..."
            className="relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500"
            type="text"
            value={DOB}
            onChange={changeDOB}/>
        </div>
    </div>
    <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 p-4">
  <input
    className="w-48 h-48 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-black  focus:border-blue-500 focus:outline-none focus:ring-blue-500"
    placeholder="Tell us more about your day..."
    type="text"
    value={fill}
    onChange={tellday}
  />
</div>


    

    <button 
    
    className="absolute bottom-20 right-20 py-2 px-10 w-100% h-12 text-black flex justify-center text-base items-center rounded-[40px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"
    // className="absolute bottom-20 right-20 py-2 px-10 bg-[#FFFFFF] text-black py-2 px-10 rounded-full hover:bg-blue-600 flex items-center"
    onClick={showAlert}>
        Save Your Emotion Please!!
    </button>
      
    <div style={{ position: 'absolute', top: '10px', right: '10px', textAlign: 'right' }}>
      <img src="/Rectangle.png" alt="Logo" style={{ width: '90px', height: '90px',marginRight: '260px' }} />
      <p style={{ ...gradientText, marginBottom:'10', fontSize: '32.5px', fontWeight: '-moz-initial',marginLeft:'10px' , marginTop:'-70px',marginRight:'60px' }}>MoodScope</p>
    </div>
    <div style={{ marginTop: '-300px',marginBottom:'initial', alignSelf:'center', marginRight:'200px'}}>
      <p style={gradientText}>Emotion for the day...??</p>
    </div>
    <div>
      <img src="/profile.png" alt='My Profile Pic' style={{position:'absolute',right:100,top:100}}/>
    </div>
    
    <div style={gridContainerStyle}>
      {emotionsWithEmojis.map(({ emotion, emoji }) => (
    <div key={emotion}>
      <button 
        // style={buttonStyle} 
        // className="bg-[#FFFFFF] text-black py-2 px-4 rounded-full hover:bg-blue-600 flex items-center"
        // className="bg-[#FFFFFF] text-black w-40 h-12 rounded-full hover:bg-blue-600 flex items-center justify-center"
        className="relative py-2 px-8 w-40 h-12 text-black flex justify-center text-base items-center rounded-[40px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"
        // onMouseEnter={()=>setcolour(true)}
        // onMouseLeave={()=>setcolour(false)}
        >
        <span style={{ marginLeft:'-10px',fontSize: '50px', lineHeight: '60px' }}>{emoji}</span> {emotion}
      </button>
      
    </div>
    ))}
    </div>
    </div>
  );
};




export default Mainpage;