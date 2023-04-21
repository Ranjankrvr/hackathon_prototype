const search = ()=> {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems=document.getElementById("notes-list")
    const notes = document.querySelectorAll(".notes") 
    const pname=document.getElementsByTagName("h3")


    for (var i=0; i<pname.length; i++){
    let match = notes[i].getElementsByTagName('h3')[0];

    if (match){
     let textvalue =   match.textContent || match.innerHTML

     if(textvalue.toUpperCase().indexOf(searchbox) > -1){
      notes[i].style.display="";
     } else {
        notes[i].style.display="none";
     }
    }
    }
}


