let form=document.getElementById("form1");
let table=document.getElementsByTagName("table")[0];
let index=1;

let listener1 = (event) =>{
 
    event.preventDefault();
    //  accesssing the input value and stored in variable
    const name=form["Name"].value;
    const email=form["Email"].value;
    const gpa=form["GPA"].value;
    const age=form["Age"].value;
    const degree=form["Degree"].value;
    //  creating elements ------> table cell
     let tablerow=document.createElement("tr");

     let Idcell=document.createElement("td");
     Idcell.innerText=index;

     
     let namecell=document.createElement("td");
     namecell.innerText=name;

     let emailcell=document.createElement("td");
     emailcell.innerText=email;

     let agecell=document.createElement("td");
     agecell.innerText=age;

     let gpacell=document.createElement("td");
     gpacell.innerText=gpa;
    
     let edit=document.createElement("img");
      edit.src= "./assets/edit 1.svg";
      edit.alt="img";
      edit.className="Edit";
      edit.style="padding-left:100px; margin-right:20px";

      let delet=document.createElement("img");
      delet.src= "./assets/trash-2 1.svg";
      delet.alt="img";
      delet.className="delete";

      
     let degreecell=document.createElement("td");
     degreecell.innerText=degree;
     degreecell.appendChild(edit);
     degreecell.appendChild(delet);
 
     
    //   adding  A row to  the table element

     tablerow.append( Idcell,namecell,emailcell,agecell,gpacell,degreecell);
     table.appendChild(tablerow);
     index++;
     form.reset();

    //   Adding eventlistnere to edit and delet button
     
     edit.addEventListener("click", () => {
      form["Name"].value=name;
      form["Email"].value=email;
      form["GPA"].value=gpa;
      form["Age"].value=age;
      form["Degree"].value=degree;
    
      form["btn"].className="btn-1";
      form["btn"].innerText="Edit Student";
      form.addEventListener("submit",() => {
        namecell.innerText=form["Name"].value;
        emailcell.innerText=form["Email"].value;
        gpacell.innerText=form["GPA"].value;
        agecell.innerText=form["Age"].value;
        degreecell.innerText=form["Degree"].value;
        form["btn"].innerText="Add Student";
        form["btn"].className="btn";   
        tablerow.remove(); 
      });

     });
     delet.addEventListener("click",() =>{
        const confirmation = prompt("Are You Want to delete it?");
        if(confirmation.toLowerCase()=== "yes" ){
            tablerow.remove();
            alert("successfully deleted");
        }
     });
}

form.addEventListener("submit",listener1);

let  Searchelement = document.getElementById("search");
let tr =document.getElementsByTagName("tr");

let listener2= (event)=>{

    event.preventDefault();
    let filter= Searchelement.value;
    // filtration on name ,email and degree
    for(let i=1;i<tr.length;i++)
    {
        let Sname=tr[i].getElementsByTagName("td")[1];
        let Semail=tr[i].getElementsByTagName("td")[2];
        let Sdegree=tr[i].getElementsByTagName("td")[5];


        if(Sname.innerText.includes(filter))
        {
            tr[i].style.display="";
        }
         else if(Semail.innerText.includes(filter))
        {
            tr[i].style.display="";
        }
        else if(Sdegree.innerText.includes(filter))
        {
            tr[i].style.display="";
        }
        else{
            tr[i].style.display="none";
        }
    }
}

Searchelement.addEventListener("keyup", listener2);