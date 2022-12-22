$(document).ready(function () {
  $(document).on('click', '.number-trigger', function(){
    let numberval = $(this).text();
    $('.dispaly-result').append(numberval);
  });

  $(document).on('click', '.clear-trigger', function(){
    $('.dispaly-result').text('');
  });
});