function mybtechcsesemester() {
    var input, filter1, ul1, li1, a1, i1, txtValue1;
    input = document.getElementById("mybtechcsesemester");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myULbtechcsesemester");
    li = ul.getElementsByTagName("libtechcsesemester");
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


function btechcsesem(){
document.getElementById("srch").innerHTML="<input type='text' id='mybtechcsesemester' onkeyup='mybtechcsesemester()' placeholder='Search for btechcsesemester..' title='Type in a name' style='max-width:200px;height:50px;border-radius:26px 40px;'>";

document.getElementById("internaloutput").innerHTML="<ul id='myULbtechcsesemester'>                                                                                                                                  <libtechcsesemester><as href='#'>CSE(SEM-1)</as></libtechcsesemester>                                                                                                                                                                                                                                                                                 <libtechcsesemester><as href='#'>CSE(SEM-2)</as></libtechcsesemester>                                                                                                                                                                                                            <libtechcsesemester><as href='#'>CSE(SEM-3)</as></libtechcsesemester>                                                                                                                                                                        <libtechcsesemester><as href='#'>CSE(SEM-4)</as></libtechcsesemester>                                                                                                                                                       <libtechcsesemester><as href='#'>CSE(SEM-5)</as></libtechcsesemester>                                                                                                                                                                       <libtechcsesemester><as href='#'>CSE(SEM-6)</as></libtechcsesemester>                                                                                                                                                                                                   <libtechcsesemester><as href='#'>CSE(SEM-7)</as></libtechcsesemester>                                                                                                                                                                                              <libtechcsesemester><as href='#'>CSE(SEM-8)</as></libtechcsesemester>                                                                              </ul>";

}