###
Author: Chris Baigorri - @cbaigorri
###

$ = jQuery

# class definition

PasswordToggle = (element, options) ->
  @$element = $(element)
  @options = $.extend({}, $.fn.passwordToggle.defaults, options)
  @$element.attr('checked', false)
  return

PasswordToggle::toggle = () ->
  $el = this.$element
  data = $el.data()
  $field = $('#' + data.toggle)
  $field.attr('type', (if ($field.attr('type') is 'text') then 'password' else 'text'))
  return


# plugin definition

$.fn.passwordToggle = (option) ->
  @each ->
    $this = $(this)
    data = $this.data('passwordToggle')
    options = typeof option == 'object' && option
    if  not data then $this.data 'passwordToggle', (data = new PasswordToggle(this, options))
    if option is 'toggle' then data.toggle()
    return

$.fn.passwordToggle.defaults = {}

$.fn.passwordToggle.Constructor = PasswordToggle

# data api

$(document).on 'click.passwordToggle.data-api', '[data-toggle]', (e) ->
  $checkbox = $(e.target)
  $checkbox.passwordToggle('toggle')
  return
