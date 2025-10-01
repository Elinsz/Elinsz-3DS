/*******************************************************************************
 *
 * class UI.ListboxImage
 * As Listbox, but adds an extra class to identifiy it as a listbox with image in jQuery
 ******************************************************************************/


ListboxImage.prototype = new Control();
ListboxImage.prototype.constructor = ListboxImage;

function ListboxImage( jquery_element ) {
  Control.call( this, jquery_element );
}

UI.ListboxImage = ListboxImage;

ListboxImage.add = function( properties ) {
  // Build DOM objects.
  // (i) <SELECT> element needs to be wrapped to ensure consistent sizing.
  var $control = $('<div/>')
  $control.addClass('control control-listboximage');
  var $select = $('<select/>');
  $select.attr('id', properties.ui_id + '_ui');
  $select.addClass('listboximage focus-target');
  $select.appendTo( $control );
  // Initialize wrapper.
  var control = new ListboxImage( $control );
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

ListboxImage.add_item = function( ui_id, value, index ) {
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

ListboxImage.clear = function( ui_id ) {
  $control = $('#' + ui_id);
  $select = $control.children('select');
  $items = $select.children('option');
  $items.detach();
  return;
};

ListboxImage.remove_item = function( ui_id, index ) {
  $control = $('#' + ui_id);
  $select = $control.children('select');
  $items = $select.children('option');
  $items.eq(index).detach();
  return index;
};

ListboxImage.rename = function( ui_id, index, value ) {
  $control = $('#' + ui_id);
  $select = $control.children('select');
  $items = $select.children('option');
  $items.eq(index).text(value);
  return;
};

ListboxImage.prototype.set_items = function( value ) {
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

ListboxImage.prototype.set_multiple = function( value ) {
  $select = this.control.children('select');
  $select.prop( 'multiple', value );
  return value;
};

ListboxImage.prototype.set_size = function( value ) {
  $select = this.control.children('select');
  $select.attr( 'size', value )
  return value;
};

ListboxImage.prototype.set_value = function( value ) {
  $select = this.control.children('select');
  $select.val( value );
  return value;
};
