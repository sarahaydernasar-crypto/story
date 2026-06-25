//let age;
//age = prompt("ادخل عمرك رجاءا:");
//let email = prompt("ادخل بريدك الالكتروني:");
//if(age>=16 && age<60&& email=="  @gmail.com")
//{alert( "اهلا")
 // prompt("هل انت متاكد ؟")
//}
//else 
//{alert ("هده القصص تحتوي قصص  غير مناسبه لعمرك")}
//let x;
//x= prompt("هل انت متاكد متابعه دخول للموقع ؟")
//if(x=="yes")
//{alert("اختار قصه:")}
//else{alert("شكرا لزيارتك لنا")}
function checkAge(event){
    let agee=prompt("enter your age:");
    if(agee===null || agee.trim() === ""){
        event.preventDefault();
        return false;
    }
    else if (parseInt(agee)<16 || parseInt(agee)>60){
        alert("عذراً، هذا المحتوى مخصص للأعمار بين 16 و 60 سنة فقط.");
        event.preventDefault();
        return false;
    }
    else {
        alert("مرحباً! يمكنك الآن الوصول إلى المحتوى.");
        
        return true;

    }

}
function serching(){
    let input = document.getElementById("serchInput").ariaValueMax.toLowerCase();
    let table = document.getElementById("myTable");
    let tr = table.getElementsByTagName("tr");
    for(let i=0;i<tr.length;i++){
        let td = tr[i].getElementsByTagName("td")[0];
        if(td){
            let textvalue=td.textContent || td.innerText;
            if(textvalue.toLowerCase().indexOf(input)>-1){
                tr[i].style.display="";
                
            }
        }

    }
}

