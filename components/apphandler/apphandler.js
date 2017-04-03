var appHandlerViewModel = can.Map.extend({
	init: function() {
		this.attr('showNamePage', true);
		this.attr('questions', QuestionsModel.getQuestions());
	}
});

can.Component.extend({
  tag: 'st-apphandler',
  viewModel: appHandlerViewModel,
  template: can.view('components/apphandler/apphandler.stache'),
  events : {
  	'inserted': function() {
  		
  	},

  	' namereceived': function(el, ev, data) {
  		this.viewModel.attr('showNamePage', false);
      this.viewModel.attr('name', data.name);
  		this.viewModel.attr('showQuestions', true);
  	},

  	' questionsanswered': function(el, ev) {
  		this.viewModel.attr('showQuestions', false);
  		this.viewModel.attr('showResults', true);
  	}
  }
});
