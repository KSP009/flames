function flam(){
    let name1=document.getElementById('maleName').value;
name1=name1.split('');
let name2=document.getElementById('femaleName').value;
name2=name2.split('');
let count=0;
for(let i = 0; i <name1.length; i++) {
    for(let j = 0; j < name2.length; j++){
        if(name1[i] === name2[j]){
            name1[i]='.';
            name2[j]='.';
            count=count+2
            // console.log(count)
            break;
        }
    }
}
let match=((name1.length+name2.length)-count)-1;
let flames=['f','l','a','m','e','s'];
let k=0;
let l=0;
let count1=0;
while(k<5){
    if(l<6){
        if(flames[l]!=='.' && count1===match){
            flames[l]='.';
            count1=0;
            k++;
            l++;
        }else{
            if(flames[l]!=='.'){
                count1++;
            }
            l++;
        }
    }else{
        l=0;
    }
}
for(let i=0; i<flames.length; i++){
    if(flames[i]!=='.'){
        if(flames[i]=='f'){
            document.getElementById('result').innerHTML='you are Friends';
            document.getElementById('emoji').innerHTML='&#128513';
        }
        if(flames[i]=='l'){
            document.getElementById('result').innerHTML='you are in Love';
            document.getElementById('emoji').innerHTML='&#128525';
        }
        if(flames[i]=='a'){
            document.getElementById('result').innerHTML='its Affection Bro...';
            document.getElementById('emoji').innerHTML='&#128517';
        }
        if(flames[i]=='m'){
            document.getElementById('result').innerHTML='Get ready for Marriage Kanna';
            document.getElementById('emoji').innerHTML='&#128526';
        }
        if(flames[i]=='e'){
            document.getElementById('result').innerHTML='U two are enemies';
            document.getElementById('emoji').innerHTML='&#128520';
        }
        if(flames[i]=='s'){
            document.getElementById('result').innerHTML='Brother, Iam u r sister..';
            document.getElementById('emoji').innerHTML='&#128530';
        }
    }
}
}


