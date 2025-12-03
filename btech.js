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

document.getElementById("internaloutput").innerHTML="<ul id='myULbtechcsesemester'>                                                                                                                                  <libtechcsesemester><img src='/thumbnail/dccnforouzan.png' alt='Behrouz A. Forouzan' onclick='dccnforouzan();' style='width:300px; height:200px;'><br><as href='#'>DCCN:DATA COMMUNICATION AND<BR> COMPUTER NETWORK)<BR>Behrouz A. Forouzan</as></libtechcsesemester>                                                                                                                                                                                                                                                                                                                                                                </ul>";

}
