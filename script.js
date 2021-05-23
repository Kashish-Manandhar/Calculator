


function getOutput(){
    return document.getElementById("result-text").innerText;
}

function printOutput(GET_NUM)
{
    document.getElementById("result-text").innerText=GET_NUM;
}

function getHistory(){
    return document.getElementById("history-text").innerText;
}

function printHistory(GET_NUM)
{
    document.getElementById("history-text").innerText=GET_NUM;
}


function formattedNumber(GET_NUM)
{

    return Number(GET_NUM).toLocaleString("en");
}


function reverseFormattedNUmber(GET_NUM)
{
    let output=Number(GET_NUM.replace(/,/g,''));
    return output;
}

let operator=document.getElementsByClassName("operator");

for(let i=0;i<operator.length;i++)
{
    operator[i].addEventListener('click',function(){

        if(this.id=="clear")
        {
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace")
        {
            let output=reverseFormattedNUmber(getOutput()).toString();
            if(output!=null)
            {
                output=output.substr(0,output.length-1);
                printOutput(formattedNumber(output));
            }
        }
        else if(this.id=="=")
        {
            let history=getHistory();
            let output=getOutput();

            history=history+output;
            var res=eval(history);
        printOutput(res);
        printHistory("");


        }
        else{
            let history=getHistory();
            let output=getOutput();

            history=history+output+this.id;
            printHistory(history);
            printOutput("");

        }
      

    });
}


let number=document.getElementsByClassName("number");

for(let i=0;i<number.length;i++)
{
    number[i].addEventListener('click',function(){

       let output=reverseFormattedNUmber(getOutput());

       output+=this.id;

       printOutput(formattedNumber(output));

    });
}



