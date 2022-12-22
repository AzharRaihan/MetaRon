var productList = [{"label":"Demo","value":"1"},{"label":"Demo2","value":"2"},{"label":"Dosa","value":"7"},{"label":"Dosa2","value":"8"},{"label":"Chiken fry","value":"9"},{"label":"Chiken Kebab","value":"10"}] ; 

APchange = function(event, ui){
	$(this).data("autocomplete").menu.activeMenu.children(":first-child").trigger("click");
}
    function producstList() {
      
        $( ".productSelection" ).autocomplete(
		{
            source: productList,
			delay:300,
			focus: function(event, ui) {
				$(this).parent().find(".autocomplete_hidden_value").val(ui.item.value);
				$(this).val(ui.item.label);
				return false;
			},
			select: function(event, ui) {
				$(this).parent().find(".autocomplete_hidden_value").val(ui.item.value);
				$(this).val(ui.item.label);
				$(this).unbind("change");
				return false;
			}
		});
			$( ".productSelection" ).focus(function(){
				$(this).change(APchange);
			
			});
    }
    


