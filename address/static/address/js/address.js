$(function(){
  $('input.address').each(function(){
    var self = $(this);
    var cmps = $('#' + self.attr('name') + '_components');
    var fmtd = $('input[name="' + self.attr('name') + '_formatted"]');
    self.geocomplete({
      details: cmps,
      detailsAttribute: 'data-geo'
    }).bind('geocode:error', function() {
      self.val('');
    }).bind('geocode:result', function () {
      self.val(fmtd.val());
    }).blur(function () {
      self.val(fmtd.val());
    });
  });
});
