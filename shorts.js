function myshorts() {
    var input, filter1, ul1, li1, a1, i1, txtValue1;
    input = document.getElementById("myshorts");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myULshorts");
    li = ul.getElementsByTagName("lishorts");
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


function shorts(){
document.getElementById("srch").innerHTML="<input type='text' id='myshorts' onkeyup='myshorts()' placeholder='Search for shorts..' title='Type in a name' style='max-width:200px;height:50px;border-radius:26px 40px;'>";

document.getElementById("internaloutput").innerHTML="<ul id='myULshorts'>                                                                                                                                  <lishorts><img src='/images/python.png' alt='PYTHON' onclick='python();' style='width:100px; height:150px;'><br><as href='#'>PYTHON</as></lishorts>                                                                                                                                                                                                                                                                                 <lishorts><img src='/images/java.png' alt='java' onclick='java();' style='width:100px; height:150px;'><br><as href='#'>JAVA</as></lishorts>                                                                                                                                                                                                            <lishorts><img src='/images/c.png' alt='C' onclick='c();' style='width:100px; height:150px;'><br><as href='#'>C</as></lishorts>                                                                                                                                                                        <lishorts><img src='/images/c++.png' alt='c++' onclick='cplus();' style='width:100px; height:150px;'><br><as href='#'>C++</as></lishorts>                                                                                                                                                       <lishorts><img src='/images/kotlin.png' alt='kotlin' onclick='kotlin();' style='width:100px; height:150px;'><br><as href='#'>KOTLIN</as></lishorts>                                                                                                                                                                                                                                                     </ul>";

}
