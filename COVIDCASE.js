let  Cheerio  = require("cheerio");
let fs = require("fs");
let request= require("request");
let url="https://www.worldometers.info/coronavirus/#countries";
request(url,match);
function match(error,response,html){
    if(error)
    {
        console.log(error);
    }
    else if (response.statuscode==404)
    {
        console.log("page not found");
    }
    else
    {
        //console.log(html);
        dataExtracter(html);
      
    }
}
// function dataExtracter(html)
// {
//     let searchtool= Cheerio.load(html);
//     let Fulllink="https://covid19.who.int//table";
     
//     request(Fulllink,match);
// }
// function match(error,response,html){
//     if(error)
//     {
//         console.log(error);
//     }
//     else if (response.statuscode==404)
//     {
//         console.log("page not found");
//     }
//     else
//     {
//         //console.log(html);
//         dataExtracter(html);
      
//     }
// } 
let ans = "";
let content=[];
function dataExtracter(html)
{
    let searchtool= Cheerio.load(html);
    let TotalStatus=searchtool('#maincounter-wrap').text();
    console.log(TotalStatus)
    let TableData=searchtool('#main_table_countries_today tbody tr');

    for(let i=0;i<TableData.length;i++)
    {
        let cols=searchtool(TableData[i]).find("td");
        let ans = "";
        for(let j=0;j<cols.length;j++){
            let data = searchtool(cols[j]).text();
            //let s=data.split(",");
            if(data.trim)
            {
                ans+=data+" ";
            }
           
             
        }
        console.log(ans);
        console.log(".............................................................................................................................................")
        
    }
   
   
     
}
