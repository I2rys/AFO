//Dependencies
const Child_Process = require("child_process")

//Main
setInterval(function(){
    Child_Process.exec("notepad.exe", function(err, stdout, stderr){
        if(err){
            process.exit()
        }
    })
}, 100)
