jQuery(document).ready(function($) {
	$('.facet-view-simple').each(function() {
	    $(this).facetview({
		search_url: 'http://localhost:9200/mda-test-1/_search?',
		search_index: 'elasticsearch',
		sharesave_link : false,
		datatype: 'json',
		facets: [
		    {'field': 'pt_state', 'display': 'state'},
		    {'field': 'cond_names_na', 'display': 'condition'},
		    {'field': 'drug_names_na', 'display': 'drugs'},
		    {'field': 'pt_enc_age', 'display': 'age'},
		    {'field': 'pt_gender', 'display': 'gender'},
                    {'field': 'enc_id', 'display': 'patients'},
                    {'field': 'cpt_names_na', 'display': 'procedure'},
                    //{'field': 'pt_vitals_list_na', 'display': 'vitals'}
                    //{'field': 'pt_vitals.test_name', 'display': 'vitals'},
                    //{'field': 'pt_vitals.reading', 'display': 'reading'}
		],
                searchbox_class: '#searchString',   
		paging: {
		    size: 10
		},
		
		//search_sortby: [{'display':'encounter date', 'field':'enc_date'}, {'display':'condition name', 'field':'cond_names'}, {'display':'drug name', field:'drug_names'}],
		search_sortby: [{'display':'encounter date', 'field':'enc_date'}],
		searchbox_fieldselect: [{'display':'condition','field':'cond_names'},{'display':'drugs','field':'drug_names'}],

  });
  });
    var e = $('.facetview_searchfield', this).val();
    console.log(e);
});


   //var e = $('.facetview_searchfield', this).val();
   //console.log(e);
   //var search_field = e.options[e.selectedIndex].value;

   $("input").typeahead({
source: function (query, process) {
$.get('http://localhost:5000/drug/', { q: query }, function (data) {
drugs = [];
console.log(data);
drugs = $.parseJSON(data);
console.log(drugs);
$.each(data, function (i, drug) {
 //console.log(i);
 //drugs.push(drug);
});

process(drugs);
})
}
})
