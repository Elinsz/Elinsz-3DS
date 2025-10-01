/*******************************************************************************
 *
 * class UI.Tagsbox
 *
 * As Listbox, but adds an extra class to identifiy it as a tagbox in jQuery
 ******************************************************************************/


Tagsbox.prototype = new Control();
Tagsbox.prototype.constructor = Tagsbox;

function Tagsbox( jquery_element ) {
  Control.call( this, jquery_element );
}

UI.Tagsbox = Tagsbox;

Tagsbox.add = function( properties ) {
  // Build DOM objects.
  // (i) <SELECT> element needs to be wrapped to ensure consistent sizing.
  var $control = $('<div/>')
  $control.addClass('control control-tagsbox');
  var $select = $('<select/>');
  $select.attr('id', properties.ui_id + '_ui');
  $select.addClass('tagsbox focus-target');
  $select.appendTo( $control );
  // Initialize wrapper.
  var control = new Tagsbox( $control );
  control.update( properties );
  // Set up events.
  $select.change( function() {
    var $this = $(this);
    var list_control = UI.get_control( $this.parent() );
    list_control.callback( 'change', $this.val() );
  } );
  // Attach to document.
  control.attach();
  return control;
};

Tagsbox.add_item = function( ui_id, value, index ) {
  $control = $('#' + ui_id);
  $select = $control.children('select');
  $items = $select.children('option');
  $item = $('<option/>');
  $item.text( value );
  $item.val( value );
  if ( typeof index === 'undefined' || index < 0 || index >= $items.length ) {
    $item.appendTo( $select );
  } else {
    $index_item = $items.eq( index );
    $item.insertBefore( $index_item );
  }
  return value;
};

Tagsbox.clear = function( ui_id ) {
  $control = $('#' + ui_id);
  $select = $control.children('select');
  $items = $select.children('option');
  $items.detach();
  return;
};

Tagsbox.remove_item = function( ui_id, index ) {
  $control = $('#' + ui_id);
  $select = $control.children('select');
  $items = $select.children('option');
  $items.eq(index).detach();
  return index;
};

Tagsbox.rename = function( ui_id, index, value ) {
  $control = $('#' + ui_id);
  $select = $control.children('select');
  $items = $select.children('option');
  $items.eq(index).text(value);
  return;
};

Tagsbox.prototype.set_items = function( value ) {
  $select = this.control.children('select');
  $select.empty();
  for ( i in value ) {
    $item = $('<option/>');
    $item.text( value[i] );
    $item.val( value[i] );
    $item.appendTo( $select );
  }
  return value;
};

Tagsbox.prototype.set_multiple = function( value ) {
  $select = this.control.children('select');
  $select.prop( 'multiple', value );
  return value;
};

Tagsbox.prototype.set_size = function( value ) {
  $select = this.control.children('select');
  $select.attr( 'size', value )
  return value;
};

Tagsbox.prototype.set_value = function( value ) {
  $select = this.control.children('select');
  $select.val( value );
  return value;
};
