document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
  ColorFadeJS.init();
});

var s,
ColorFadeJS = {

  settings: {
    colors: [
      '#F68383', 
      '#f8c881', 
      '#f7fa7c',
      '#c2fa7c',
      '#7cfa83'
    ],
    containerName: 'colorfade'
  },

  init: function() {
    s = this.settings;
    this.setInitialColor();
    this.scrollListener();
  },

  setInitialColor: function(){
    document.body.style.backgroundColor = s.colors[0];
    document.body.style.transition = "background 1.5s"
  },

  scrollListener: function() {
    window.addEventListener("scroll", () =>{
      Array.from(document.getElementsByClassName(s.containerName)).forEach((container, index) => {
        if(container.offsetTop < window.pageYOffset + 100 && container.offsetTop > window.pageYOffset - 100){
          console.log(true)
          return document.querySelector('body').style.background = s.colors[index];
        }
     });
    })
  }
}