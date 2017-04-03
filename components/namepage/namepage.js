var namePageViewModel = can.Map.extend({
	
});

can.Component.extend({
  tag: 'st-namepage',
  viewModel: namePageViewModel,
  template: can.view('components/namepage/namepage.stache'),
  events : {
  	'inserted': function() {

  	},

  	'.namebox keydown' : function(el, ev) {
  		var nameText = el.val(),
  			appHandler;
  		if (ev.which === 13) {
  			// Enter Key pressed
  			if (!nameText) {
  				alert('Please Enter Valid Name');
  				return;
  			}

  			appHandler = $('st-appHandler');
  			if (appHandler) {
  				can.trigger(appHandler, 'namereceived', {name: nameText});
  			}
  		}
  	}
  }
});
