const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var sum=0; 
function getInput() 
{
    rl.question("Enter a value (Enter 0 to stop):",(value) => 
    {
        var num=parseInt(value); 
        if(num==0) 
        {
            console.log(`Total sum: ${sum}`);
            rl.close();
        } 
        else 
        {
            sum+=num; 
            getInput(); 
        }
    });
}

getInput();
