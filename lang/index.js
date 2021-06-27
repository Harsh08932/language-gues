const franc= require("franc");
const langs=require("langs");
const inp=process.argv[2];
const langcode= franc(inp);
if(langcode==='und')
{console.log("sry");}
else{
const language =langs.where("3",langcode);
console.log(language.name);
}

