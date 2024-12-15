let string="";
let btn=document.querySelectorAll(".button");
let o;
let string2="";

Array.from(btn).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.textContent=='^'){
           
                    string=string.replace("^","**");
            
            console.log(string)
            // string=eval(string);
            document.querySelector("input").value=string;
        }
        if(e.target.textContent=='=')
        {
            string=eval(string);
            document.querySelector("input").value=string;
        }
        else if(e.target.textContent=='AC'){
            string="";
            document.querySelector("input").value=string;
        }
       
        else if(e.target.textContent=='DEL')
        {
            string=string.slice(0,-1);
            document.querySelector("input").value=string;
        }
        else{
        console.log(e.target);
        string+=e.target.textContent;
        document.querySelector("input").value=string;
        }
     
    })
})
// for(items of btn){
// items.addEventListener('click',(event)=>{
//     string+=event.target.textContent;
//     console.log(string);
//     document.querySelector("input").value=string;
//     op();
//     // string2+=event.target.textContent;
//     // console.log(string2);
// })};
// //here if i dont use event then the loop is getting over by the time i click a button so it always refers to the last element 0
// //now if i want to listen to a specefic button tab mai event use krunga 
// //jo event object hota h vo automatically pass hota h jab bhi koi `click wagera hota h
// //ab is event object m useful properties hoti h like 
// //target - the specific element that triggered the element
// //type- click,dblclick,keydown etc
// //clintX,clientY mouse click coordinates
// let operator=document.querySelectorAll(".operator");
// function op(){
//     for(i of operator)
//     {
//         i.addEventListener("click",(e)=>{
//          o=e.target.textContent;
//          document.querySelector("input").value=o;
//         console.log(o);
//         str();
//         if(e.target.textContent=="=")
//             document.querySelector("input").value=result();
//         })
        
//     }
    

// }
// function result(){
    
// }
// function str(){
//     let btn2=document.querySelectorAll(".f");
//     for(items of btn2){
//         items.addEventListener("click",(event)=>{
//             string2+=event.target.textContent;
//             console.log(string2);
//             document.querySelector("input").value=string2;
//         })
//     }
// }
