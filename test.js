$(document).on('click', 'div li', function(){
  $(this).addClass('active').siblings().removeClass('active')
})
