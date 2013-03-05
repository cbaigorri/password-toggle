var should = chai.should();
var expect = chai.expect;


describe('password toggle plugin on one field', function () {

  var fieldRef, $field, $toggle;

  before(function () {
    $('<input/>', {'type':'password', 'id':'inputPassword'}).appendTo('body');
    $('<input/>', {'type': 'checkbox', 'class': 'input-mask', 'data-toggle': 'inputPassword'}).appendTo('body');
    
    fieldRef = $('.input-mask').data('toggle');
    $field = $('#' + fieldRef);
    $toggle = $('.input-mask');

    $('.input-mask').passwordToggle();
  });

  after(function () {
    $('#inputPassword').remove();
    $('.input-mask').remove();
  });

  it('should have data', function () {
    expect($('.input-mask').data('toggle')).to.not.equal('');
  });

  it('should be a string', function () {
    expect($('.input-mask').data('toggle')).to.be.a('string');
  });

  it('should reference a password field', function () {
    expect($field).to.be.a('object');
    expect($field).to.have.length(1);
    expect($field.attr('type')).to.equal('password');
  });

  it('should toggle to text field', function() {
    $toggle.trigger('click');
    expect($field.attr('type')).to.equal('text');
  });

  it('should toggle to password field', function() {
    $toggle.trigger('click');
    expect($field.attr('type')).to.equal('password');
  });

});

describe('password toggle plugin on multiple fields', function () {

  var fieldStr = [], $field, $toggle, data;

  before(function () {
    $('<input/>', {'type':'password', 'id':'inputGroup1'}).appendTo('body');
    $('<input/>', {'type':'password', 'id':'inputGroup2'}).appendTo('body');
    $('<input/>', {'type': 'checkbox', 'class': 'input-mask', 'data-toggle': '["inputGroup1", "inputGroup2"]'}).appendTo('body');
    
    $toggle = $('.input-mask');
    data = $('.input-mask').data();
    var _ref = data.toggle,
      selector;
    for (var i = 0; i < _ref.length; i++) {
      selector = _ref[i];
      fieldStr.push('#' + selector);
    }
    $field = $(fieldStr.join(', '));

    $('.input-mask').passwordToggle();
  });

  after(function () {
    $('#inputGroup1').remove();
    $('#inputGroup2').remove();
    $('.input-mask').remove();
  });

  it('should have data', function () {
    expect($('.input-mask').data('toggle')).to.not.equal('');
  });

  it('should be an array', function () {
    expect($('.input-mask').data('toggle')).to.be.a('array');
  });

  it('should be typeof object', function () {
    expect(typeof $('.input-mask').data('toggle')).to.equal('object');
  });

  it('should reference at least one field', function () {
    expect($field).to.be.a('object');
    expect($field.length).to.be.at.least(1);
  });

  it('should reference a password field', function () {
    expect($field.attr('type')).to.equal('password');
  });

  it('should toggle to text field', function() {
    $toggle.trigger('click');
    expect($field.attr('type')).to.equal('text');
  });

  it('should toggle to password field', function() {
    $toggle.trigger('click');
    expect($field.attr('type')).to.equal('password');
  });
  
});
