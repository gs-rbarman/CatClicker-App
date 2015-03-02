// var cat1_name = 'Ruby';
// var cat2_name = 'Pussy'; 

// $('#name1').html(cat1_name);
// $('#name2').html(cat2_name);

// $('.image').on('click', function() {
// 	var x = $(this).parents('div').find('h1');
// 	console.log(x);
// 	var y = x.html();
// 	if ( y == "") {
// 		y = 0;
// 	};
// 	var y = 1 + parseInt(y);
// 	x.html(y);

// });
// clear the screen for testing
////////////////////////////////////////////////////////////////////////////////////////
// document.body.innerHTML = '';
// document.body.style.background="white";

// var nums = [1,2,3];

// // Let's loop over the numbers in our array
// for (var i = 0; i < nums.length; i++) {

//     // This is the number we're on...
//     var num = nums[i];

//     // We're creating a DOM element for the number
//     var elem = document.createElement('div');
//     elem.textContent = num;

//     // ... and when we click, alert the value of `num`
//     elem.addEventListener('click', (function(numC) {
//     	return function(){
//     		console.log(numC);	
//     	}
        
//     } )(num) );

//     // finally, let's add this element to the document
//     document.body.appendChild(elem);
// };
////////////////////////////////////////////////////////////////////////////////////////////
var data = [{

	name: "pussy",
	url: "images/cat1.jpg",
	count: 0
},{
	name: "ruby",
	url: "images/cat2.jpg",
	count: 0
},{
	name: "minni",
	url: "images/cat3.jpg",
	count: 0
},{
	name: "cathie",
	url: "images/cat4.jpg",
	count: 0
},{
	name: "meuie",
	url: "images/cat5.jpg",
	count: 0
}];

for ( d in data ) {

	$('.catNamesListContainer .cat_names').append('<li>'+data[d].name+'</li>');
}

$('.cat_names li').on('click', function(){
	var x = $(this).html();
	var c, u;
	for ( d in data) {
		if ( data[d].name == x) {
			c = data[d].count;
			u = data[d].url;
		}
	}
	if (c == 0) $('.catPicAndCountContainer .catClick_count').html(""); 
	else $('.catPicAndCountContainer .catClick_count').html(c);

	$('.catPicAndCountContainer .cat_images').attr('src', u);	
});