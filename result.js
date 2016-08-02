function getKirkOrSpock(path) { 
  var val = Math.floor(Math.random() * 2);
  var name = ["Spock", "Captain Kirk"][val];
  var img = ["spock-smile.jpg", "james_t.png"][val];
  var header = '<h1 id="success-header">Congratulations, you got ' + name + '!' + '</h1>'
  var imgStr = '<img id="success-image" src="' + path + img + '" alt="" />';
  document.write(header)
  document.write(imgStr); 
  document.close();
}
getKirkOrSpock('');
