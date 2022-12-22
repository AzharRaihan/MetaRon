var categoryList = [{"label":"Test","value":"1"},{"label":"New","value":"2"},{"label":"New 2","value":"3"}] ; 

CTchange = function(event, ui){
	$(this).data("autocomplete").menu.activeMenu.children(":first-child").trigger("click");
}
    function allcategoryList() {
      
        $( ".categorySelection" ).autocomplete(
		{
            source: categoryList,
			delay:300,
			focus: function(event, ui) {
				$(this).parent().find(".autocomplete_hidden_value2").val(ui.item.value);
				$(this).val(ui.item.label);
				return false;
			},
			select: function(event, ui) {
				$(this).parent().find(".autocomplete_hidden_value2").val(ui.item.value);
				$(this).val(ui.item.label);
				$(this).unbind("change");
				return false;
			}
		});
			$( ".categorySelection" ).focus(function(){
				$(this).change(CTchange);
			
			});
    }
    


