const DATE = new Date()
let day= DATE.getDay();

let username= prompt("Lütfen isminizi giriniz");
let info =document.querySelector("#info");
let user =document.querySelector("#user");
if(day==0){
    day="Pazar";
}
else if(day==1){
    day="Pazartesi"
}
else if(day==2){
    day="Salı"
}
else if(day==3){
    day="Çarşamba"
}
else if(day==4){
    day="Perşembe"
}
else if(day==5){
    day="Cuma"
}
else if(day==6){
    day="Cumartesi"
}

user.innerHTML=`

Hoşgeldin ${username} şuanki tarih bilgisi 
`
setInterval(function(){
    
    let [hour, minute, second] = new Date().toLocaleTimeString("tr-TR").split(/:| /)
    info.innerHTML= hour+":"+minute+":"+second+"  "+day;
},1000)
