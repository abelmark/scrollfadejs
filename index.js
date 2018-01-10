document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
  ColorFadeJS.init();
});

var s,
ColorFadeJS = {

  settings: {
    colors: [
      'red', 
      'green', 
      'blue',
      'orange',
      'purple'
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