AOS.init();
var pdfReader = document.createElement("iframe");
pdfReader.id = "magazine";
pdfReader.style = "width:100%;height:90vh";
pdfReader.setAttribute("seamless", "seamless");
pdfReader.setAttribute("scrolling", "no");
pdfReader.setAttribute("frameborder", "0");
pdfReader.setAttribute("allowtransparency", "true");
pdfReader.setAttribute("allowfullscreen", "true");
var x = window.matchMedia("(max-width: 600px)");
if (x.matches) {
  pdfReader.src = "https://online.fliphtml5.com/cwbhw/kmca/"; //lite
} else {
  pdfReader.src = "https://online.fliphtml5.com/cwbhw/kgcb/"; //hi-res
}
document.getElementById("pdf-reader").appendChild(pdfReader);
