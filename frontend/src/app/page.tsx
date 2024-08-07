"use client"

import { useState } from 'react';

export default function Home(){
  const [keyword, setInputValue] = useState('');
  const [resValue, setResValue] = useState('');

  const Submit = async () => {
    const response = await fetch('http://localhost:3001', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      /**
       * * { inputValue : string }
       */
      body: JSON.stringify({ keyword }),
    });

    //*const data = await response.json() as { inputValue : string };
    const data = await response.json() ;
    //! any를 써도 상관이 없지만 ts 사용하는 의미가 없어짐. 추후에 오류 찾기 힘들어짐. 



    if (response.ok) {
      // 요청이 성공한 경우 입력 필드 초기화
      setInputValue('');
      setResValue(data.keyword);
      alert('Data successfully sent to the server!');
    } else {
      alert('Failed to send data to the server.');
    }
  }
  return(
    <>
    <input className= " bg-slate-500" title="안녕" value ={keyword} onChange={(e) => setInputValue(e.target.value)}>
    </input>
    <button className=" w-auto h-auto bg-amber-800" type = "submit" onClick={Submit}>submit</button>
    <div>{resValue}</div>
    {//! inputValue 값이 있든 없든 렌더링을 한다.
    //* { resValue && (<div>{resValue}</div>)}  
    //! inputValue 값이 있을 때만 렌더링을 해준다. (논리연산자)
    }
    </>
  )
  
}

// function getData(obj : {inputValue: string}){
//   console.log(obj.inputValue);
// }

// function IsInputValue(obj: any): obj is { inputValue: string }{
//   if('inputValue' in obj){
//     return true
//   }
//   else{
//     return false;
//   }
// }

// if(IsInputValue(data)){
//   data.inputValue
// } else{
//   data
// }