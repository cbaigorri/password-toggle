###
Author: Chris Baigorri - @cbaigorri
###

$ = jQuery

# class definition

Mask = (element, options) ->
  @$element = $(element)
  @options = $.extend({}, $.fn.mask.defaults, options)
  @$element.attr('checked', false)
  return

Mask::toggle = () ->
  $el = this.$element
  data = $el.data()
  $field = $('#' + data.toggle)
  $field.attr('type', (if ($field.attr('type') is 'text') then 'password' else 'text'))
  return


# plugin definition

$.fn.mask = (option) ->
  @each ->
    $this = $(this)
    data = $this.data('mask')
    options = typeof option == 'object' && option
    if  not data then $this.data 'mask', (data = new Mask(this, options))
    if option is 'toggle' then data.toggle()
    return

$.fn.mask.defaults = {}

$.fn.mask.Constructor = Mask

# data api

$(document).on 'click.mask.data-api', '[data-toggle]', (e) ->
  $checkbox = $(e.target)
  $checkbox.mask('toggle')
  return
