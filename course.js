function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


document.getElementById("output").innerHTML="<p id='internaloutput'></p>";
const cs = setTimeout(course,1000);

function mycourse(){
document.getElementById("srch").innerHTML="<input type='text' id='mycourse' onkeyup='mycourse()' placeholder='Search for course..' title='Type in a name' style='max-width:200px;height:50px;border-radius:26px 40px;'>";

document.getElementById("coursehover").style.backgroundColor="gold";
document.getElementById("coursehover").style.color="black";

document.getElementById("internaloutput").innerHTML="<ul id='myULs'>                                                                                                                                  <lis><img src='/images/btech.png' alt='B.TECH' onclick='btech();' style='width:100px; height:150px;'><br><as href='#'>B.TECH</as></lis>                                                                                                                                                                                                                                                                                 <lis><img src='/images/diploma.png' alt='DIPLOMA' onclick='diploma();' style='width:100px; height:150px;'><br><as href='#'>DIPLOMA</as></lis>                                                                                                                                                                                                            <lis><img src='/images/mbbs.png' alt='MBBS' onclick='mbbs();' style='width:100px; height:150px;'><br><as href='#'>MBBS</as></lis>                                                                                                                                                                        <lis><img src='/images/law.png' alt='LAW' onclick='law();' style='width:100px; height:150px;'><br><as href='#'>LAW</as></lis>                                                                                                                                                       <lis><img src='/images/school.png' alt='SCHOOL' onclick='school();' style='width:100px; height:150px;'><br><as href='#'>SCHOOL</as></lis>                                                                                                                                                                       <lis><img src='/images/graduation.png' alt='GRADUATION' onclick='graduation();' style='width:100px; height:150px;'><br><as href='#'>GRADUATION</as></lis>                                                                                                                                                                                                   <lis><img src='/images/hotelmanagement.png' alt='HOTEL MANAGEMENT' onclick='hotelmanagement();' style='width:100px; height:150px;'><br><as href='#'>HOTEL<br>MANAGEMENT</as></lis>                                                                              </ul>";
}

