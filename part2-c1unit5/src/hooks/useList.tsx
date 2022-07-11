import React from "react"
export const useList = (arr:any) => {

    const[uselist1,uselist2]=React.useState(arr)
     console.log(uselist1,uselist2)

    const push=(x:number)=>{
        uselist1.push(x)
        uselist2([...uselist1])
    }
    const pop=()=>{
        uselist1.pop()
        uselist2([...uselist1])
    }

    const clear=()=>{
        uselist2([])
    }

    const reset=()=>{
        uselist2(arr)
    }

    const map=(x:Function)=>{
        console.log(x)
    
        let mydata=uselist1.map(x)
       uselist2(mydata)
    }


   let value1={push,pop,clear,reset,map}
    return[uselist1,value1]
};
