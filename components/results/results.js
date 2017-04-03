var resultsViewModel = can.Map.extend({
  correctCount: function() {
    return this.getCorrectCount();
  },

  incorrectCount: function() {
    return this.attr('questions.length') - this.getCorrectCount();
  },

  getCorrectCount: function() {
    var correctCount = 0;

    can.each(this.attr('questions'), function(question) {
      if (question.attr('selected') === question.attr('answer')) {
        correctCount++;
      }
    });

    return correctCount;
  },


});

can.Component.extend({
  tag: 'st-results',
  viewModel: resultsViewModel,
  template: can.view('components/results/results.stache'),
  events : {
    'inserted': function() {
      this.displayResults();
    },

    displayResults: function() {
      var correctanswers = this.viewModel.getCorrectCount(),
          correctwidth,
          correctbarElement = this.element.find('.correctbar'),
          incorrectbarElement = this.element.find('.incorrectbar');

      correctwidth = (correctanswers / 5);

      if (correctbarElement.length && correctwidth <= 1) {
        correctbarElement[0].style.width = correctwidth * 600 + 'px';
      }

      if (incorrectbarElement.length && correctwidth <= 1) {
        incorrectbarElement[0].style.width = (1 - correctwidth) * 600 + 'px';
      }
    }
  },

  helpers: {
    getCorrectAnswer: function(context, options) {
      return context.attr('answers')[context.attr('answer') - 1];
    },

    getSelectedAnswer: function(context, options) {
      return context.attr('answers')[context.attr('selected') - 1];
    },

    isCorrectAnswer: function(context, options) {
      return context.attr('answer') === context.attr('selected') ? 'correctanswer' : 'wronganswer';
    }
  }
});
