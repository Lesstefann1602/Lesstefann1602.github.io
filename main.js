let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #E0497F;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #E0497F;">Soy diseñadora UX/UI actualmente desarrollando habilidades en la creación de sitios web de diversos giros.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
