
(function() {
  // This program sets a random timeout and redirects you somewhere whenever you use facebook
  setTimeout(function(){ 
    window.location.href = getRandomWebsite();
  }, 3000);
})();

function getRandomWebsite(){
  var placesOtherThanFacebook = [
    'https://youtu.be/dQw4w9WgXcQ',
    'https://youtu.be/U5I5H7EeC8k',
    'http://i.imgur.com/M3DdpnN.jpg',
    'https://youtu.be/sSkJZNY1D3Q',
    'https://youtu.be/-GDraOBPmP4',
    'https://youtu.be/COGehsaDkM0',
    'http://imgur.com/gallery/4XiFgJp',
    'http://i.imgur.com/YTYCE37.gifv',
    'http://dn.ht/picklecat/',
    'http://i.imgur.com/BALT0No.gifv',
    'https://youtu.be/G4qVF1cTqdk'
  ];
  var index = getRandomInt(0, placesOtherThanFacebook.length - 1);
  return placesOtherThanFacebook[index];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}