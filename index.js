const fs = require("fs");
const {createGzip}=require("node:zlib")
const gzip=createGzip()
const http= require("node:http")
const port =3000;



//part1-q1:
const readStream = fs.createReadStream("./big.txt", {
  encoding: "utf8",
});


readStream.on("data", chunk => {
  console.log(chunk);
  console.log("=====end of chunk=====")
});

 //part1:q2) 
const readStream2 = fs.createReadStream("./source.txt")
const writeStream1=fs.createWriteStream("./dest.txt")


 readStream2.pipe(writeStream1);

  writeStream1.on("finish" , () => {
    console.log("File copied using streams");
  });

//part1:q3
const readStream3 = fs.createReadStream("./data.txt",{
   encoding: "utf8", 
});

const writeStream2=fs.createWriteStream("./data2.zip");


 readStream3.pipe(gzip).pipe(writeStream2);
 gzip.on("error", console.error);

  writeStream2.on("finish", () => {
    console.log("File copied using zip extention");
  }); 
  //==================================================
const users=[
    {
    id:1,
    name:"user 1",
    email:"user@gmail.com",
    age:27
   },
    {
        id:2,
    name:"user 2",
    email:"user@gmail.com",
    age:30
   }
]




const server =http.createServer((req,res)=>{
   console.log({method:req.method,url:req.url});
   if(req.method =="GET" && req.url=="/"){
    res.writeHead(200,{"constent-type":"application/json"})
    return res.end()
   }//part2 q3
   else if(req.method ==="DELETE" &&  req.url.startsWith("/user/")){

 const mainid = parseInt(req.url.split("/")[2]);
 
  if (isNaN(mainid)) {
    res.writeHead(400);
    return res.end("Invalid ID");
  }   

    
    const userIndex=users.findIndex((user)=>{
                
                return user.id == mainid;
                
            

    })    
                if(userIndex == -1){
             res.writeHead(404,{"content-type":"application/json"})
            res.write(JSON.stringify({message:"user not exist",statusCode:404}))
            return res.end()
            }else{
            users.splice(userIndex,1)
            console.log()
            res.writeHead(200,{"content-type":"application/json"})
            res.write(JSON.stringify({message:"done deleting",users}))}
            res.end();   
              
   }//part 2 q5
   else if(req.method ==="GET" &&  req.url.startsWith("/user/")){
            const mainid3 = parseInt(req.url.split("/")[2]);
            const user = users.find((user) => {
            if (user.id == mainid3){
                return user

            }
        })
        if (!user){
             res.writeHead(404,{"content-type":"application/json"})
            res.write(JSON.stringify({message:"user not found",statusCode:404}))
            return res.end()

        }
        else{
            res.writeHead(200,{"content-type":"application/json"})
            res.write(JSON.stringify({message:"user found",user}))
            res.end();}
        }
            
    
   
   //part 2 q4
   else if(req.method==="GET" && req.url=="/users"){
            res.writeHead(200,{"content-type":"application/json"})
            res.write(JSON.stringify({message:"all the users from array",users}))
            res.end(); 
   }
   //part 2 q2
   else if(req.method==="PATCH" && req.url.startsWith("/user/")){
    
    let data=''
    req.on("data",(chunk)=>{
        data +=chunk
    })
    req.on("end",()=>{
        const{age}=JSON.parse(data)
        const mainid2 = parseInt(req.url.split("/")[2]);
        console.log(mainid2);
       const user = users.find((user) => {
            if (user.id == mainid2){
                user.age = age;
                return user

            }
        })
        if(!user){
            res.writeHead(404,{"content-type":"application/json"})
            res.write(JSON.stringify({message:"user ID not found",statusCode:404}))
            return res.end()

        }
            res.writeHead(200,{"constent-type":"application/json"})
            res.write(JSON.stringify({message:"User age updated successfully",statusCode:200,users}))
               return res.end()
         
    })


   }
   //part 2 q1
   else if( req.method ==="POST" && req.url=="/user"){
    let data='';
   req.on("data",(chunk)=>{
    data+=chunk;
   })
   req.on("end",()=>{
    const {id ,name,email,age}=JSON.parse(data);
    let  newUser=JSON.parse(data);
    const userExist=users.find((user)=>{
    return user.email == email;
})
if(userExist){
    res.writeHead(404,{"content-type":"application/json"})
    res.write(JSON.stringify({message:"Email already exists."}))
    return res.end()

}else{

    users.push(newUser)
    
    res.writeHead(200,{"content-type":"application/json"})
    res.write(JSON.stringify({message:"user added successfully"}))
    return res.end()
   }})
   }
   else{
    res.writeHead(404,{"content-type":"application/json"})
    res.write(JSON.stringify({message:"error yama3laam" }))
    return res.end()
   }


}).listen(port,()=>{
    console.log("server is on : "+port);
})

 //===================part 3===================
 //q1: 
 /* The Node.js Event Loop is a mechanism that allows Node.js to handle asynchronous,
  non-blocking operations using a single thread. It works by executing JavaScript
   code on the call stack while delegating time-consuming tasks like file I/O, network requests, 
   and timers to the system. When these tasks finish, their callbacks are queued 
   and executed by the event 
   loop once the call stack is free, allowing Node.js to efficiently handle 
   many operations at the same time.*/

/* 
q2: 
libuv is a high-performance C library that serves as the backbone of Node.js, providing the infrastructure for asynchronous
 I/O and the Event Loop. Since JavaScript is single-threaded, libuv allows Node.js to perform "non-blocking" operations by 
 offloading tasks like file system access, networking, and DNS lookups to the operating system or its own internal thread pool. 
 It essentially acts as a bridge between your JavaScript code and the computer’s hardware, abstracting  away the complex differences
  between Windows, macOS, and Linux so that your code runs consistently across all platforms.

*/
/*
 q3:
Under the hood, Node.js uses a "non-blocking" delegation system to manage asynchronous tasks. When you initiate an async operation
 (like a file read or a network request), the V8 engine hands the task over to libuv, which either offloads it to the Operating 
 System kernel or a background thread pool. This allows the main JavaScript thread to remain free to handle other code instead 
 of waiting for data to return. Once the background task is finished, libuv places the result in a queue, and the Event Loop pushes it
  back onto the main thread for execution as soon as the call stack is empty. */ 

  /*
  Q5:The libuv thread pool is a collection of background threads used by Node.js to handle "expensive"
   tasks that the operating system cannot perform natively in an asynchronous way. While Node.js handles 
   networking directly through the OS kernel, it offloads CPU-intensive or blocking tasks—specifically File System (fs) operations,
    DNS lookups, and Crypto/Zlib functions—to this pool. This prevents the main JavaScript
   thread from "freezing" while waiting for a large file to be read or a password to be hashed.
  */
 /*Q4:
 In Node.js, the Call Stack is where your synchronous JavaScript code is executed one frame at
 a time; if a function is running here, the program is "busy." The Event Queue (or Task Queue) is
 a waiting area for asynchronous callbacks—like the result of a file read or an HTTP request—
 that have finished their background work and are ready to run. The Event Loop acts as a
 constant monitor that connects the two: it waits for the Call Stack to be completely empty and
 then moves the first callback from the Event Queue onto the stack to be executed.
 */
/*
q6:
Node.js handles blocking code (synchronous) by executing it sequentially on the main thread,
meaning every other operation must wait until that specific task finishes, which can "freeze" the
application. In contrast, it handles non-blocking code (asynchronous) by delegating the task to
libuv, which manages the operation in the background while the main thread immediately
moves on to the next line of code. Once the background task completes, its callback is placed in
the Event Queue and eventually pushed back onto the main thread by the Event Loop, allowing
the application to remain responsive and handle thousands of concurrent connections.
*/
