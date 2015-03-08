(function($) {
  $.fn.extend({
    openModal: function(options) {
      $(this).addClass('modal_is-visible');
      $('body').addClass('modal-open');

      $(this).on('click', function(event){
        if( $(event.target).is('.modal__close') || $(event.target).is('.modal') ) {
          event.preventDefault();
          $(this).closeModal();
        }
      });
    }
  });

  $.fn.extend({
    closeModal: function() {
      $(this).removeClass('modal_is-visible');
      $('body').removeClass('modal-open');
    }
  })
})(jQuery);