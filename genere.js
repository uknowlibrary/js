function mycourse() {
    var input, filter1, ul1, li1, a1, i1, txtValue1;
    input = document.getElementById("mycourse");
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


function genere(){
document.getElementById("internaloutput").innerHTML="<div id='gallery' class='gallery'>                                                                                                                                          <div class='image-item'><img src='https://newint.org/sites/default/files/d7/features/2016/09/20/01.10.2016-world-fiction-special-590.jpg' alt='FICTION' onclick='fiction();'> <p>FICTION</p></div>                                                                                                                                                                     <div class='image-item'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/1769_Laurence_Sterne_Tristram_Shandy_v6_p70.jpg/250px-1769_Laurence_Sterne_Tristram_Shandy_v6_p70.jpg' alt='NOVEL' onclick='novel();'> <p>NOVEL</p></div>                                                                                                                                                                                       </div>";
}
