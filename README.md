# Redux_Learning
Creating Basic Todo React app with use  of Redux.
In this application first we have created 3 components. Addtodo,displaytodo,displaytodo count,
we are getting data from form and displaying in main page only.we are aldo siplaying count on front page.
component creation and diplay is basix thing.
steps for redux setup:
1.create actions  (create action_type file , todo.js) files where all kind of operation written addtodo, deletetodo , updatetodo. these function return type and payload.
2.create reducers (contain state ,actions) . logic is written by checking type. if additon load through payload.if deletion delete through payload.
3.create store where state are store standard syntax using create store function.
4.In addtodo we need to connect mapStateToProps,mapDispatchToProps (props with actions) check code for this.
