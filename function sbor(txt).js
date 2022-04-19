function sbor(str){
   /*let txt=str[0];
   let command=str[1];let sum=0;
   if(command=="LOWERCASE"){  for(let x=0;x<txt.length;x++){
        if(txt.charAt(x)!==txt.charAt(x).toUpperCase()) {
            sum+=txt.charCodeAt(x);
       }
    }  console.log(`The total sum is: ${sum}`);    }

    else if(command=="UPPERCASE"){  for(let x=0;x<txt.length;x++){ 
         
     if(txt.charAt(x)==txt.charAt(x).toUpperCase()&& txt.charCodeAt(x)>=65 && txt.charCodeAt(x)<=122) {
         
           
            sum+=txt.charCodeAt(x);
            }
    }   console.log(`The total sum is: ${sum}`);   }
   

}sbor(['HelloFromMyAwesomePROGRAM','LOWERCASE'])*/
let word=[];
for(let x =0;x<str.length;x++){
    let line=str[x].split(`:`);let letter=line.shift();let index=line.shift();index=index.split(`/`);
   for(let i=0;i<=index.length;i++) {  word[index[i]]=letter; }console.log(word.join(``)) 
  }
 }sbor(['a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end'
])
sbor(['a:0/2/4/6',
'b:1/3/5',
'end'
])