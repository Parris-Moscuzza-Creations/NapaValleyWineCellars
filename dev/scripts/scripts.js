const hamFunction = function(){
	const nav = $('.active');
	const hamburgerIcon = $('.toggle-nav');
	const navSelection = $('.active li a ');
	let navOpenorClose = false;

	function openNav(){
		nav.css("right", "0px");
		hamburgerIcon.css("color", "black");
		navOpenorClose = true;
	};

	function closeNav(){
		nav.css("right", "-200px");
		hamburgerIcon.css("color", "white");
		navOpenorClose = false;
	};

	function toggleNav(){
		if(navOpenorClose === true){
			closeNav();
		}
		else{
			openNav();
		}
	};

	hamburgerIcon.on('click', function() {
		toggleNav();
	});

	navSelection.on('click', function(){
		closeNav();
	});
	
if(window.innerWidth > 768){

	hamburgerIcon.on('mouseenter', function(){
		openNav();
	});

	// navSelection.on('click', function(){
	// 	closeNav();
	// });

	nav.on('mouseleave', function(){
		closeNav();
	});
}

	window.onscroll = function(){
		closeNav();
	}
};

$(function(){
	hamFunction();
});