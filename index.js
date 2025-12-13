

const path = require("node:path");
const fs=require("node:fs");
const EventEmitter = require('events');
const event = new EventEmitter();

const { writeFile } = require("fs/promises");



//q1
console.log(__dirname);
console.log(__filename);

//q2

console.log(path.basename(__filename));
//q3
function buildPath(obj) {
  return path.format(obj);
}
const result = buildPath({ dir: "folder", name: "app", ext: ".js" });
console.log(result);
//q4
console.log(path.extname(__filename));
//q5
const res = path.parse("D:/BACKEND ROUTE/section 4/assignment 2/index.js");
console.log("{"+"Name:"+res.name+" , ext:"+res.ext+"}");

//q6
console.log(path.isAbsolute("./index.js"));
console.log(path.isAbsolute(__dirname));
//q7
function joinSegments(...segments) {
  return path.join(...segments);
}
console.log(joinSegments("src","components","App.js"));
//q8
console.log(path.isAbsolute("index.js"));
console.log(path.resolve("index.js"));
//q9
console.log(path.join("/folder1","folder2/file.txt"))
//q10
const path1="D:/BACKEND ROUTE/section 4/assignment 2/ahmed";
fs.unlink(path1, (error) => {
  if (error) {
    console.error("Failed to delete file:", error.message);
    return;
  }

  console.log(`The ${path.basename(path1)} is deleted.`);
});
//q11
function newfolder(folderName){
    const newPath = path.join(__dirname, folderName);
    if(!fs.existsSync(newPath)){
        fs.mkdirSync(newPath);
        console.log("Success");

    }else{
        console.log("already there")
    }
}
newfolder("ahmed");
//q12


event.on('start',()=>{
    console.log("hello yabo samraaaaaaaaaa3 event triggered ")

})
event.emit('start')
//q13
event.on('login',(name)=>{
    console.log("user logged in: "+name)

})
event.emit("login", "FADY");

//Q14
function readFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8'); // Read file synchronously
        console.log("The file content =>", data);
    } catch (err) {
        console.error("Error reading file:", err);
    }
}
const a=__dirname
readFile(path.join(a,"notes.txt"))
//q15


async function writeAsync(path, content) {
  try {
    await writeFile(path, content);
    console.log("File written successfully.");
  } catch (error) {
    console.error("Error writing file:", error.message);
  }
}

writeAsync("./async.txt", "Async save");
//q16
function Exists(path) {
  return fs.existsSync(path);
}
console.log("answer for the exists 1 : "+Exists("./notes.txt"));

console.log("answer for the exists 2 : "+Exists("./not1es.txt"));

//q17
const os = require("node:os");
function getSystemInfo() {
  return {
    Platform: os.platform(),
    Arch: os.arch()
  };
}
console.log(getSystemInfo());