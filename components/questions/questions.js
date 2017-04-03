var questionsViewModel = can.Map.extend({
  currentQueIndex: 0,

	init: function() {
      this.attr('currentQuestion', this.attr('questions')[this.attr('currentQueIndex')]);
	}
});

can.Component.extend({
  tag: 'st-questions',
  viewModel: questionsViewModel,
  template: can.view('components/questions/questions.stache'),
  events : {
  	'inserted': function() {
  		
  	},

    '.option click' : function(el, ev) {
      var currentQueIndex = this.viewModel.attr('currentQueIndex'),
          appHandler,
          posX = el.offset().left,
          posY = el.offset().top,
          buttonWidth = el.width(),
          buttonHeight =  el.height(),
          x,y;

      $(".ripple").remove();  
      el.prepend("<span class='ripple'></span>");

      if(buttonWidth >= buttonHeight) {
        buttonHeight = buttonWidth;
      } else {
        buttonWidth = buttonHeight; 
      }
      
      x = ev.pageX - posX - buttonWidth / 2;
      y = ev.pageY - posY -buttonHeight / 2;
      
      // Add the ripples CSS and start the animation
      $(".ripple").css({
          width: buttonWidth,
          height: buttonHeight,
          top: y + 'px',
          left: x + 'px'
        }).addClass("rippleEffect");

      setTimeout(this.proxy(function() {
          this.viewModel.attr('currentQuestion.selected', this.getAnswerIndex(el.text()));
          if (currentQueIndex < 4) {
              this.viewModel.attr('currentQueIndex', ++currentQueIndex);
              this.viewModel.attr('currentQuestion', this.viewModel.attr('questions')[currentQueIndex]);
          } else {
            appHandler = $('st-appHandler');
            if (appHandler) {
              can.trigger(appHandler, 'questionsanswered');
            }
          }
      }), 1000);
    },

    getAnswerIndex: function(selectedOption) {
      var answerIndex = -1;
      can.each(this.viewModel.attr('currentQuestion.answers'), function(answer, index) {
        if (answer === selectedOption) {
          answerIndex = index + 1;
          return false;
        }
      });

      return answerIndex;
    }
  }
});
