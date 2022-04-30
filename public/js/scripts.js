
  $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });


// Products appears with input select
  

let all = document.getElementById('all')
let dogs = document.getElementById('dogs')
let cats = document.getElementById('cats')

let paizao = document.getElementById('paizao')


const selecter = document.getElementById('opt')

selecter.addEventListener("change",function (e){
  console.log(e.target.value);
  if (e.target.value == 1 ) {
      paizao.style.opacity = 1;
      all.style.display = "flex";
      dogs.style.display = 'none';
      cats.style.display = 'none'; 
  }
  if (e.target.value == 2) {
      paizao.style.opacity = 1;
      all.style.display = "none"
      dogs.style.display = "flex";
      cats.style.display = "none";
  }
  if (e.target.value == 3) {
      paizao.style.opacity = 1;
      all.style.display = "none";
      dogs.style.display = "none";
      cats.style.display = "flex";
  }

});
