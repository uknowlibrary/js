function mygenere() {
    var input, filter1, ul1, li1, a1, i1, txtValue1;
    input = document.getElementById("mygenere");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myULgenere");
    li = ul.getElementsByTagName("ligenere");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("as")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


function genere(){
document.getElementById("srch").innerHTML="<input type='text' id='mygenere' onkeyup='mygenere()' placeholder='Search for Genere..' title='Type in a name' style='max-width:200px;height:50px;border-radius:26px 40px;'>";

document.getElementById("internaloutput").innerHTML="<ul id='myULgenere'>                                                                                                                                  <ligenere><img src='/images/fiction.png' alt='FICTION' onclick='fiction();' style='width:100px; height:150px;'><br><as href='#'>FICTION</as></ligenere>                                                                                                                                                                                                                                                                                 <ligenere><img src='/images/novel.png' alt='NOVEL' onclick='novel();' style='width:100px; height:150px;'><br><as href='#'>NOVEL</as></ligenere>                                                                                                                                                                                                            <ligenere><img src='/images/narrative.png' alt='NARRATIVE' onclick='narrative();' style='width:100px; height:150px;'><br><as href='#'>NARRATIVE</as></ligenere>                                                                                                                                                                        <ligenere><img src='/images/mystery.png' alt='MYSTERY' onclick='mystery();' style='width:100px; height:150px;'><br><as href='#'>MYSTERY</as></ligenere>                                                                                                                                                       <ligenere><img src='/images/sciencefiction.png' alt='SCIENCE FICTION' onclick='sciencefiction();' style='width:100px; height:150px;'><br><as href='#'>SCIENCE FICTION</as></ligenere>                                                                                                                                                                       <ligenere><img src='/images/nonfiction.png' alt='NON-FICTION' onclick='nonfiction();' style='width:100px; height:150px;'><br><as href='#'>NON-FICTION</as></ligenere>                                                                                                                                                                                                   <ligenere><img src='/images/historicalfiction.png' alt='HISTORICAL FICTION' onclick='historicalfiction();' style='width:100px; height:150px;'><br><as href='#'>HISTORICAL<BR>FICTION</as></ligenere>                                                                                                                                                                                              <ligenere><img src='/images/thriller.png' alt='THRILLER' onclick='thriller();' style='width:100px; height:150px;'><br><as href='#'>THRILLER</as></ligenere>                                                                              </ul>";

}
