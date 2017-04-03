var QuestionsModel = {
	getQuestions : function () {
		return new can.List([
				new can.Map({
					'id': 1,
					'description': 'What is the name of Jon Snow\'s Direwolf?',
					'answers' : new can.List([
							'Grey Wind', 
							'Graham', 
							'Ghost', 
							'Gargamel'
						]),
					'selected': -1,
					'answer' : 3
				}),

				new can.Map({
					'id': 2,
					'description': 'What is Chandler Bing\'s job?',
					'answers' : new can.List([
						'Executive', 
						'Statistical Analysis and Data Reconfiguration',
						'Transponster', 
						'Making Jokes in Awkward Situations'
						]),
					'selected': -1,
					'answer' : 2
				}),

				new can.Map({
					'id': 3,
					'description': 'Elon Musk has been a citizen of three countries. Name those countries',
					'answers' : new can.List([
							'South Africa, Canada, the United States',
							'Chad, Canada, the United States',
							'South Africa, Switzerland, the United States',
							'Canada, Switzerland, the United States'
						]),
					'selected': -1,
					'answer' : 1
				}),

				new can.Map({
					'id': 4,
					'description': 'At which venue did MS Dhoni made his daunting 183 not out?',
					'answers' : new can.List([
							'Ahmedabad',
							'Hyderabad',
							'Chennai',
							'Jaipur'
						]),
					'selected': -1,
					'answer' : 4
				}),

				new can.Map({
					'id': 5,
					'description': 'Are you calling me for next round?',
					'answers' : new can.List([
						'Yes',
						'No'
						]),
					'selected': -1,
					'answer' : 1
				}),
			]);
	}
};