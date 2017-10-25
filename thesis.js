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

function number_from_id(lis, id){
  for(var i=0; i<lis.length; i=i+1){
    if("#"+lis[i].id == id){
      return i+1;
    }
  }
}

function http_get_async(theUrl, callback)
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
          callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous 
  xmlHttp.send(null);
}

function get_refs(){
  // var file = "appendices.html";
  var file = "https://rhiaro.github.io/thesis/appendices";
  http_get_async(file, number_citations);
}

function get_refs_list(html){
  var tmp = document.createElement('div');
  tmp.innerHTML = html;
  var ol = tmp.querySelector("#references-list");
  return ol;
}

function number_citations(html){

  var ol = get_refs_list(html);
  var lis = ol.querySelectorAll("li");

  var cs = document.querySelectorAll('a');
  cs.forEach(function(c){
    var i = c.href.indexOf("#ref-", 0);
    if(i > 0){
      var id = c.href.substr(i);
      // console.log(id);
      var num = number_from_id(lis, id);
      // console.log(num);
      c.innerText = num;
    }
  });
}


// function init(chapter){
//   var next = chapter + 1;
//   var prev = chapter - 1;
//   DO.U.showToC();
//   var toc = document.getElementById("toc");
//   var chapt = document.createElement("section");
//   var title = document.querySelector("h1").innerText;
//   var notes = document.createElement("button");
//   notes.id = "notes-toggle";
//   notes.innerText = "Hide notes";
//   notes.addEventListener('click', function(e){
//     e.preventDefault();
//     toggle(this);
//   });
//   chapt.innerHTML = "<p><a href=\"index.html\">Home</a></p>";
//   if(prev > 0){
//     chapt.innerHTML += "<p><a href=\"chapter" + prev + ".html\">&lt; Chapter " + prev + " </a></p>";
//   }
//   if(next < 7){
//     chapt.innerHTML += "<p><a href=\"chapter" + next + ".html\">Chapter " + next + " &gt; </a></p>";
//   }
//   chapt.innerHTML += "<h2>" + chapter + ". " + title + "</h2>";
//   toc.insertBefore(chapt, document.getElementById("table-of-contents-i"));
//   toc.appendChild(notes);
// }