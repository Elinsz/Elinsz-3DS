/*******************************************************************************
 *
 * class UI.Menuinput
 * Based on Textbox -- BoxUp
 ******************************************************************************/


Menuinput.prototype = new Control();
Menuinput.prototype.constructor = Menuinput;

function Menuinput( jquery_element ) {
  Control.call( this, jquery_element );
}

UI.Menuinput = Menuinput;

Menuinput.add = function( properties ) {
  // Build DOM objects.
  // (i) <SELECT> element needs to be wrapped to ensure consistent sizing.
  var $control = $('<div/>');
  $control.addClass('control control-menuinput');
  var $menuinput = $('<input type="text" />');
  $menuinput.attr('id', properties.ui_id + '_ui');
  $menuinput.addClass('menu-selected focus-target');
  $menuinput.appendTo( $control );
  // Initialize wrapper.
  var control = new Menuinput( $control );
  control.update( properties );
  // Set up events.
  UI.add_event( 'change', $control, $menuinput );
  // Attach to document.
  control.attach();
  return control;
}

Menuinput.prototype.set_value = function( value ) {
  $menuinput = this.control.children('input');
  $menuinput.val( value );
  return value;
};

Menuinput.prototype.set_readonly = function( value ) {
  $menuinput = this.control.children('input');
  $menuinput.prop( 'readonly', value );
  return value;
};

