(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// scrollAnimation
window.addEventListener("scroll", () => {
  let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  console.log(scrollValue);

  if (scrollValue > 0.0977835435070261) {
    document.querySelector(".text-propos").classList.add("gDAnim");
    document.querySelector(".img-propos").classList.add("dGAnim");
  }
  if (scrollValue > 0.1653367944866506) {
    document.querySelector(".text-parcours").classList.add("bHAnim");
  }
  if (scrollValue > 0.20261649908098173) {
    document.querySelector(".img-propos-2").classList.add("gDAnim");
    document.querySelector(".text-propos-2").classList.add("dGAnim");
  }
  if (scrollValue > 0.2648935020002162) {
    document.querySelector(".text-Choisir").classList.add("bHAnim");
  }
  if (scrollValue > 0.3017407340067169) {
    document.querySelector(".text-presentation").classList.add("gDAnim");
    document.querySelector(".img-presentation").classList.add("dGAnim");
  }
  if (scrollValue > 0.3778570709080036) {
    document.querySelector(".Text-securite").classList.add("bHAnim");
  }
  if (scrollValue > 0.43563627972449726) {
    document.querySelector(".service1").classList.add("gDAnim");
  }
  if (scrollValue > 0.46798571762825714) {
    document.querySelector(".service2").classList.add("dGAnim");
  }
  if (scrollValue > 0.49774030680681697) {
    document.querySelector(".service3").classList.add("bHAnim");
  }
  if (scrollValue > 0.528100324612796) {
    document.querySelector(".service4").classList.add("bHAnim");
  }
  if (scrollValue > 0.5595848305391123) {
    document.querySelector(".service5").classList.add("gDAnim");
  }
  if (scrollValue > 0.5916747650928479) {
    document.querySelector(".service6").classList.add("dGAnim");
  }
  if (scrollValue > 0.6240242293930425) {
    document.querySelector(".service7").classList.add("bHAnim");
  }
  if (scrollValue > 0.7168342523516056) {
    document.querySelector(".img-reservation").classList.add("gDAnim");
    document.querySelector(".text-reservation").classList.add("dGAnim");
  }
  if (scrollValue > 0.7880203159632122) {
    document.querySelector(".text-gardien-virtuel").classList.add("bHAnim");
  }
  if (scrollValue > 0.8768515515190831) {
    document.querySelector(".carte").classList.add("bHAnim");
  }
  if (scrollValue > 0.9207914263535247) {
    document.querySelector(".form").classList.add("bHAnim");
  }
  if (scrollValue > 0.9610985182519732) {
    document.querySelector(".page-footer").classList.add("dGAnim");
  }

  // Parallax
  if (scrollValue > 0.6632933078913936) {
    document.querySelector("#fontArriere1").classList.add("aVAnim");
  }
  if (scrollValue > 0.8285868848152503) {
    document.querySelector("#fontArriere2").classList.add("aVAnim");
  }
})
