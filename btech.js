function mybtechbranch() {
    var input, filter1, ul1, li1, a1, i1, txtValue1;
    input = document.getElementById("mybtechbranch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myULbtechbranch");
    li = ul.getElementsByTagName("libtechbranch");
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


function btech(){
document.getElementById("srch").innerHTML="<input type='text' id='mybtechbranch' onkeyup='mybtechbranch()' placeholder='Search for btech branch..' title='Type in a name' style='max-width:200px;height:50px;border-radius:26px 40px;'>";

document.getElementById("internaloutput").innerHTML="<ul id='myULbtechbranch'>                                                                                                                                  <libtechbranch><img src='/images/cse.png' alt='CSE' onclick='fiction();' style='width:100px; height:150px;'><br><as href='#'>CSE</as></libtechbranch>                                                                                                                                                                                                                                                                                 <libtechbranch><img src='/images/mech.png' alt='MECHANICAL' onclick='novel();' style='width:100px; height:150px;'><br><as href='#'>MECHANICAL</as></libtechbranch>                                                                                                                                                                                                            <libtechbranch><img src='/images/civil.png' alt='CIVIL' onclick='narrative();' style='width:100px; height:150px;'><br><as href='#'>CIVIL</as></libtechbranch>                                                                                                                                                                        <libtechbranch><img src='/images/electronics.png' alt='ELECTRONICS' onclick='mystery();' style='width:100px; height:150px;'><br><as href='#'>ELECTRONICS</as></libtechbranch>                                                                                                                                                       <libtechbranch><img src='/images/electrical.png' alt='ELECTRICAL' onclick='sciencefiction();' style='width:100px; height:150px;'><br><as href='#'>ELECTRICAL</as></libtechbranch>                                                                                                                                                                                                                                                                                                                                                                                                                                                       </ul>";

}