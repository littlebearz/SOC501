$('#definitions li').each(function(){
    var me = $(this);
    me.html( me.text().replace(/(^\w+)/,'<strong>$1</strong>') );
  });