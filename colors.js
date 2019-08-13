var Body = {
  setBackgroundColor : function (color){
    $('Body').css("backgroundColor", color);
  },
  setColor : function (color){
    $('Body').css("color", color);
  }
}
var Links = {
  setColor : function (color){
    $('a').css("color", color);
  }
}
function Switch(self) {
  if (self.value === 'Dark'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    Links.setColor('white');
    self.value = 'light'
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    Links.setColor('black');
    self.value = 'Dark';
  }
}
