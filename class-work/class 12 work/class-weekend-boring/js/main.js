document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
  if(day === "Tuesday" || day === "Thursday"){
    console.log('Class Day!')
  }else if(day === "Saturday" || day === "Sunday"){
    console.log('weekend!')
  }else{
    console.log('BORRRRRINNNNNGGGGG!!!')
  }


}
