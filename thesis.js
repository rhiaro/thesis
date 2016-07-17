function toggle(ele){
    var elements = document.getElementsByClassName('notes')

    for (var i = 0; i < elements.length; i++){
        if(elements[i].style.display == "none"){
          elements[i].style.display = "block";
          ele.innerText = "Hide notes";
        }else{
          elements[i].style.display = "none";
          ele.innerText = "Show notes";
        }
    }
}

function init(chapter){
  var next = chapter + 1;
  var prev = chapter - 1;
  DO.U.showToC();
  var toc = document.getElementById("toc");
  var chapt = document.createElement("section");
  var title = document.querySelector("h1").innerText;
  var notes = document.createElement("button");
  notes.id = "notes-toggle";
  notes.innerText = "Hide notes";
  notes.addEventListener('click', function(e){
    e.preventDefault();
    toggle(this);
  });
  chapt.innerHTML = "<p><a href=\"chapter" + prev + ".html\">&lt; Chapter " + prev + " </a></p><h2>" + chapter + ". " + title + "</h2><p><a href=\"chapter" + next + ".html\">Chapter " + next + " &gt; </a></p>";
  toc.insertBefore(chapt, document.getElementById("table-of-contents-i"));
  toc.appendChild(notes);
}