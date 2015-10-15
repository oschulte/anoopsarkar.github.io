bibtex_reader = new BibtexDisplay()
constraints = {};
/// Add always constrains here like constrains['AUTHOR']='Anoop Sarkar'

//constraints['AUTHOR']='Anoop Sarkar';

function get_years(){
  years = bibtex_reader.get_years($("#bibtex_input").val(),constraints);
  // years = [{"year":"2014","value":"1"},{"year":"2013","value":"2"}]
  $.each(years, function (key, value) {
    $('.years').append('<button class="btn years_btn btn-primary" type="button" value=\''+key+'\' > '+key+' (<span class="badge">'+value+'</span>)</button> ');
  });
  $('.years_btn').click(function() {
              $(".bibtex_template").hide();
              constraints['YEAR']=$(this).val();
              (new BibtexDisplay()).displayBibtex($("#bibtex_input").val(), $("#bibtex_display"),constraints);
        });

  $('.allyears').click(function() {
    $(".bibtex_template").hide();
    delete constraints['YEAR'];
    (new BibtexDisplay()).displayBibtex($("#bibtex_input").val(), $("#bibtex_display"),constraints);
    });
}

function bibtex_js_draw() {
  year="all"
  $(".bibtex_template").hide();
  bibtex_reader.displayBibtex($("#bibtex_input").val(), $("#bibtex_display"),constraints);
}

function mytoggle(name){
    //this.parent.parent.$(".bibtexdata").first()
    // alert(item);
    $("#"+name).toggle( "drop" );
}

$(document).ready( function() {
  // $('.years').append('<button class="btn btn-primary" type="button" value=\'2012\' onclick="bibtex_js_draw()"> 2012 </button> ');
 // $("#bibtex_input").load( "publications.bib",   bibtex_js_draw );
//  $("#bibtex_input").load( "publications.bib",   get_years );
  $(".bibtexdata").hide();
  $(".abstractdata").hide();
  $("#bibtex_input").load( "http://127.0.0.1:4000/public/bibtex/anoopsarkar.bib", bibtex_js_draw );  
  $("#bibtex_input").load( "http://127.0.0.1:4000/public/bibtex/anoopsarkar.bib", get_years );  
} );

