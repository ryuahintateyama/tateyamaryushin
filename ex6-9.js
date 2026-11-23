
function changeImage(){
  if(document.getElementById('gazou').innerHTML.indexOf('hasiri.jpg') != -1){
    document.getElementById('gazou').innerHTML = '<img src="image/hasiru.jpg" width="300">';
  }else{
    document.getElementById('gazou').innerHTML = '<img src="image/hasiri.jpg" width="300">';
  }
}

