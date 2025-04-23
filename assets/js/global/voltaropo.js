window.onscroll = function () {
    let botao = document.getElementById("btnTopo")
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      botao.style.display = "block";
    }
    else {
      botao.style.display = "none";
    };
  }
  
  function voltarTopo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }