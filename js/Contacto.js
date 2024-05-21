const phoneIcons = document.querySelectorAll('.phone-icon');

phoneIcons.forEach((icon) => {
  icon.addEventListener('mouseover', () => {
    icon.classList.add('animate');
  });

  icon.addEventListener('mouseout', () => {
    icon.classList.remove('animate');
  });
});
function openEmail(emailAddress){
  var malitoLinck = 'malito'+emailAddress;
  window.location.href=malitoLinck;
}