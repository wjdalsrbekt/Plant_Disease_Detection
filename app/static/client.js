$(document).ready(function () {

	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function (e) {
				$('#selected_image')
					.attr('src', e.target.result)
					.width(176)
					.height(176);
			}
			reader.readAsDataURL(input.files[0]);
		}
	}

	$('#imagefile').change(function () {
		readURL(this);
	});


	$("form#analysis-form").submit(function (event) {
		event.preventDefault();

		var analyze_button = $("button#analyze-button");
		var imagefile = $('#imagefile')[0].files;

		if (!imagefile.length > 0) {
			alert("Please select a file to analyze!");
		}
		else {
			analyze_button.html("Analyzing..");
			analyze_button.prop("disabled", "true");

			var fd = new FormData();
			fd.append('file', imagefile[0]);

			var loc = window.location;

			$.ajax({
				method: 'POST',
				async: true,
				url: loc.protocol + '//' + loc.hostname + ':' + loc.port + '/analyze',
				data: fd,
				processData: false,
				contentType: false,
			}).done(function (data) {
				console.log("Done Request!");
				$("#result").html(/*"Result= "+ */data.result);
				var al=data.result;
				if (al=="Apple___Apple_scab")
					alert("사과 붉은 곰팡이 병");
				else if (al=="Apple___Black_rot")
					alert("사과 부패병");
				else if (al=="Apple___Cedar_apple_rust")
					alert("사과 녹병");
				else if (al=="Apple___healthy")
					alert("사과 건강");
				else if (al=="Blueberry___healthy")
					alert("블루베리 건강");
				else if (al=="Cherry_(including_sour)___Powdery_mildew")
					alert("체리 흰곰팡이");
				else if (al=="Cherry_(including_sour)___healthy")
					alert("체리 건강");
				else if (al=="Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot")
					alert("옥수수 회색잎 반점");
				else if (al=="Corn_(maize)___Common_rust_")
					alert("옥수수 녹병");
				else if (al=="Corn_(maize)___Northern_Leaf_Blight")
					alert("옥수수 북부 잎 마름병");
				else if (al=="Corn_(maize)___healthy")
					alert("옥수수 건강");
				else if (al=="Grape___Black_rot")
					alert("포도 부패병");
				else if (al=="Grape___Esca_(Black_Measles)")
					alert("포도 검은 흑진병");
				else if (al=="Grape___Leaf_blight_(Isariopsis_Leaf_Spot)")
					alert("포도 잎 마름병");
				else if (al=="Grape___healthy")
					alert("포도 건강");
				else if (al=="Orange___Haunglongbing_(Citrus_greening)")
					alert("오렌지 녹병");
				else if (al=="Peach___Bacterial_spot")
					alert("복숭아 박테리아 병");
				else if (al=="Peach___healthy")
					alert("복숭아 건강");
				else if (al=="Pepper,_bell___Bacterial_spot")
					alert("후추 박테리아 병");
				else if (al=="Pepper,_bell___healthy")
					alert("후추 건강");
				else if (al=="Potato___Early_blight")
					alert("감자 초기 병");
				else if (al=="Potato___Late_blight")
					alert("감자 말기 병");
				else if (al=="Potato___healthy")
					alert("감자 건강");
				else if (al=="Raspberry___healthy")
					alert("산딸기 건강");
				else if (al=="Soybean___healthy")
					alert("콩 건강")
				else if (al=="Squash___Powdery_mildew")
					alert("호박 가루 곰팡이");
				else if (al=="Strawberry___Leaf_scorch")
					alert("딸기 누름 잎");
				else if (al=="Strawberry___healthy")
					alert("딸기 건강");
				else if (al=="Tomato___Bacterial_spot")
					alert("토마토 박테리아 병");
				else if (al=="Tomato___Early_blight")
					alert("토마토 초기 병");
				else if (al=="Tomato___Late_blight")
					alert("토마토 말기 병");
				else if (al=="Tomato___Leaf_Mold")
					alert("토마토 잎 곰팡이 병");
				else if (al=="Tomato___Septoria_leaf_spot")
					alert("토마토 잎 얼룩 병");
				else if (al=="Tomato___Spider_mites Two-spotted_spider_mite")
					alert("토마토 거미 진드기 병");
				else if (al=="Tomato___Target_Spot")
					alert("토마토 얼룩");
				else if (al=="Tomato___Tomato_Yellow_Leaf_Curl_Virus")
					alert("토마토 노랑 잎 미생물 바이러스");
				else if (al=="Tomato___Tomato_mosaic_virus")
					alert("토마토 모자이크 바이러스");
				else if (al=="Tomato___healthy")
					alert("토마토 건강");
				else if (al=="background")
					alert("배경");
				alert(al);
			}).fail(function (e) {
				console.log("Fail Request!");
				console.log(e);
			});
		};

		analyze_button.prop("disabled", "");
		analyze_button.html("Analyze");
		console.log("Submitted!");
	});
});




