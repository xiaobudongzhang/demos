const exec =require('child_process').exec;

let cmd="cd .. && npm run dev";
exec(cmd,(error,stdout,stderr)=>{
    if(error){
	console.log(`exec error:${error}`);
	return;
    }
    console.log(`stdout:${stdout}`);
    console.log(`stderr:${stderr}`);
});
