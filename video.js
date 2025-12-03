function myvideo() {
    var input, filter1, ul1, li1, a1, i1, txtValue1;
    input = document.getElementById("myvideo");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myULs");
    li = ul.getElementsByTagName("lis");
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
function video(){
document.getElementById("srch").innerHTML="<input type='text' id='myvideo' onkeyup='myvideo()' placeholder='Search for videos..' title='Type in a name' style='max-width:200px;height:50px;border-radius:26px 40px;'>";

document.getElementById("internaloutput").innerHTML="<ul id='myULs'>                                                                                                                                                                                                   <lis><iframe class='player' src='https://drive.google.com/file/d/1J_1aWE6KFu_pSciblFoCUpj9k7qE_9Jr/preview' title=' player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe><br><as href='#'>How to create webpage tutorial<br>by smarak</as></lis>                                                                                                                             <lis><iframe class='player' src='https://drive.google.com/file/d/1SDymxp48N1hVoHnsH5Q_J7JybLQUBjTB/preview' title=' player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe><br><as href='#'>Warshalls Algorithm solved Example <br>in Discrete Mathematics in Hindi <br> Discrete Mathematics Lectures</as></lis>                                                                                                                     <lis><iframe class='player' src='https://drive.google.com/file/d/1E1LQ-LGoLQufhzR4zdOCOHWPu3OtG3x5/preview' title=' player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe><br><as href='#'>Lec-22 Finding Closure of Functional <br> dependency in DBMS Easiest Simplest<br>way</as></lis>                                                                                                                                                                                                                                                                                                                                                             </ul>";
}
