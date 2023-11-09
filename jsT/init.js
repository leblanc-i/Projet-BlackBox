(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
      $('.scrollspy').scrollSpy();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// scrollAnimation
window.addEventListener("scroll", () => {
  let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  console.log(scrollValue);

  if (scrollValue > 0.09179727254223488) {
    document.querySelector(".text-propos").classList.add("gDAnim");
    document.querySelector(".img-propos").classList.add("dGAnim");
  }
  if (scrollValue > 0.15367392631793203) {
    document.querySelector(".text-parcours").classList.add("bHAnim");
  }
  if (scrollValue > 0.18900874732056533) {
    document.querySelector(".img-propos-2").classList.add("gDAnim");
    document.querySelector(".text-propos-2").classList.add("dGAnim");
  }
  if (scrollValue > 0.24925706810216516) {
    document.querySelector(".text-Choisir").classList.add("bHAnim");
  }
  if (scrollValue > 0.28548747722082995) {
    document.querySelector(".text-presentation").classList.add("gDAnim");
  }
  if (scrollValue > 0.32766131667578363) {
    document.querySelector(".img-presentation").classList.add("dGAnim");
  }
  if (scrollValue > 0.40093811340766845) {
    document.querySelector(".Text-securite").classList.add("bHAnim");
  }
  if (scrollValue > 0.46435986656097344) {
    document.querySelector(".service1").classList.add("gDAnim");
  }
  if (scrollValue > 0.4931813555872176) {
    document.querySelector(".service2").classList.add("dGAnim");
  }
  if (scrollValue > 0.5224913494809689) {
    document.querySelector(".service3").classList.add("bHAnim");
  }
  if (scrollValue > 0.5513942601261959) {
    document.querySelector(".service4").classList.add("bHAnim");
  }
  if (scrollValue > 0.580622857247354) {
    document.querySelector(".service5").classList.add("gDAnim");
  }
  if (scrollValue > 0.6096071646651741) {
    document.querySelector(".service6").classList.add("dGAnim");
  }
  if (scrollValue > 0.6400570115319052) {
    document.querySelector(".service7").classList.add("bHAnim");
  }
  if (scrollValue > 0.7288011597102076) {
    document.querySelector(".img-reservation").classList.add("gDAnim");
    document.querySelector(".text-reservation").classList.add("dGAnim");
  }
  if (scrollValue > 0.7975982287108182) {
    document.querySelector(".text-gardien-virtuel").classList.add("bHAnim");
  }
  if (scrollValue > 0.8824343379490637) {
    document.querySelector(".carte").classList.add("bHAnim");
  }
  if (scrollValue > 0.9238754325259516) {
    document.querySelector(".form").classList.add("bHAnim");
  }
  // Parallax
  if (scrollValue > 0.6801139634324751) {
    document.querySelector("#fontArriere1").classList.add("aVAnim");
  }
  if (scrollValue > 0.8370038573523051) {
    document.querySelector("#fontArriere2").classList.add("aVAnim");
  }
})
