function validationForm() {
    let validationFit= document.forms["register"]["fit"].value;
    let validationLin= document.forms["register"]["lin"].value;
    let validationBot= document.forms["register"]["bot"].value;
    let validationEnt= document.forms["register"]["ent"].value;
    let validationVie= document.forms["register"]["vie"].value;
    let validationEla= document.forms["register"]["ela"].value; 
    
    if (validationFit == "") {
        alert ("Deve ser preenchido");
        return false;
    }
    if (validationLin == "") {
        alert("Deve ser preenchido");
        return false;
    }
    if (validationBot == "") {
        alert("Deve ser preenchido");
        return false;
    }
    if (validationEnt == "") {
        alert("Deve ser preenchido");
        return false;
    }
    if (ValidationVie == "") {
        alert("Deve ser preenchido");
        return false;
    }
    if (ValidationEla == "") {
        alert("Deve ser preenchido");
        return false;
    }
    alert ("Dados cadastrados");
    function insert() {
        let fit= document.forms["register"] ["fit"].value;
        let lin= document.forms["register"] ["lin"].value;
        let bot= document.forms["register"] ["bot"].value;
        let ent= document.forms["register"] ["ent"].value;
        let vie= document.forms["register"] ["vie"].value;
        let ela= document.forms["register"] ["ela"].value;

        let insert = windown.document.getElementById("insertRow");

        insert.innerHTML = `
        <td>${fit}</td>
        <td>${lin}</td>
        <td>${bot}</td>
        <td>${ent}</td>
        <td>${vie}</td>
        <td>${ela}</td>
        ` ;

    }
}