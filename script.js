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
        tablerow.remove();
     });
}

form.addEventListener("submit",listener1);