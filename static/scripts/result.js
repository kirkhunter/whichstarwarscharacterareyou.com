function getKirkOrSpock(path) { 
  var val = Math.floor(Math.random() * 2);
  var name = ["Spock", "Captain Kirk"][val];
  var img = ["spock-smile.jpg", "james_t.png"][val];
  var header = '<h1 id="success-header">Congratulations, you got ' + name + '!' + '</h1>';
  var imgStr = '<img src="' + path + img + '" alt="" />';
  var imgContainer = '<div id="image-container">';
  document.write(header);
  document.write(imgContainer);
  document.write(imgStr); 
  document.write('</div>');
  document.close();
}

getKirkOrSpock('static/images/');
