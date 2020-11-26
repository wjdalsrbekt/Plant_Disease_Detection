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
					alert("사과의 붉은 곰팡이 병입니다. 살충제가 필요합니다. ");
				else if (al=="Apple___Black_rot")
					alert("사과의 부패병 입니다. 습도와 햇빛을 확인해보세요. ");
				else if (al=="Apple___Cedar_apple_rust")
					alert("사과의 녹병 입니다. 습도와 햇빛을 확인해보세요. ");
				else if (al=="Apple___healthy")
					alert("사과가  건강합니다. 지금 습도와 햇빛을 유지하세요. ");
				else if (al=="Blueberry___healthy")
					alert("블루베리가  건강합니다. 지금 습도와 햇빛을 유지하세요.");
				else if (al=="Cherry_(including_sour)___Powdery_mildew")
					alert("체리의 흰곰팡이 병입니다. 살충제가 필요합니다.");
				else if (al=="Cherry_(including_sour)___healthy")
					alert("체리가 건강합니다. 지금 습도와 햇빛을 유지하세요.");
				else if (al=="Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot")
					alert("옥수수의 회색잎 반점 입니다. 영양제가 필요합니다.");
				else if (al=="Corn_(maize)___Common_rust_")
					alert("옥수수의 녹병 입니다. 습도와 햇빛을 확인해보세요");
				else if (al=="Corn_(maize)___Northern_Leaf_Blight")
					alert("옥수수의 북부 잎 마름병 입니다. 습도와 햇빛을 확인해보세요.");
				else if (al=="Corn_(maize)___healthy")
					alert("옥수수가 건강합니다. 지금 습도와 햇빛을 유지하세요.");
				else if (al=="Grape___Black_rot")
					alert("포도의 부패병입니다. 습도를 확인해보세요. 심각합니다.");
				else if (al=="Grape___Esca_(Black_Measles)")
					alert("포도의 검은 흑진병입니다. 습도와 햇빛을 확인하셔야됩니다.");
				else if (al=="Grape___Leaf_blight_(Isariopsis_Leaf_Spot)")
					alert("포도의 잎 마름병입니다. 습도와 햇빛을 확인 후, 조치를 취하세요.");
				else if (al=="Grape___healthy")
					alert("포도가 건강합니다. 지금 습도와 햇빛을 유지하세요.");
				else if (al=="Orange___Haunglongbing_(Citrus_greening)")
					alert("오렌지의 녹병입니다. 녹병은 보통 물 주기 때문입니다.");
				else if (al=="Peach___Bacterial_spot")
					alert("복숭아의 박테리아 병입니다. 살충제를 준비하세요.");
				else if (al=="Peach___healthy")
					alert("복숭아가  건강합니다. 지금 습도와 햇빛을 유지하세요.");
				else if (al=="Pepper,_bell___Bacterial_spot")
					alert("후추의 박테리아 병입니다. 살충제 혹은 농약을 준비하세요.");
				else if (al=="Pepper,_bell___healthy")
					alert("후추가 건강합니다. 지금 습도와 햇빛을 유지하세요.");
				else if (al=="Potato___Early_blight")
					alert("감자가 마름병 초기 증상입니다. 양분과 습도를 확인해보세요.");
				else if (al=="Potato___Late_blight")
					alert("감자가 마름병 말기 증상입니다. 너무 늦은 것 같습니다.");
				else if (al=="Potato___healthy")
					alert("감자가  건강합니다.  지금 습도와 햇빛을 유지하세요.");
				else if (al=="Raspberry___healthy")
					alert("산딸기가 건강합니다. 지금 습도와 햇빛을 유지하세요.");
				else if (al=="Soybean___healthy")
					alert("콩이 건강합니다. 지금 습도와 햇빛을 유지하세요.")
				else if (al=="Squash___Powdery_mildew")
					alert("호박의 가루 곰팡이입니다. 살충제가 필요합니다.");
				else if (al=="Strawberry___Leaf_scorch")
					alert("딸기의 누른 잎입니다. 물을 조금 덜 줘보세요.");
				else if (al=="Strawberry___healthy")
					alert("딸기가 건강합니다. 지금 습도와 햇빛을 유지하세요.");
				else if (al=="Tomato___Bacterial_spot")
					alert("토마토의 박테리아 병 입니다. 습도와 햇빛을 확인하고 살충제가 필요합니다.");
				else if (al=="Tomato___Early_blight")
					alert("토마토의 마름병 초기입니다. 아직 살릴 수 있습니다. 수분이 필요합니다.");
				else if (al=="Tomato___Late_blight")
					alert("토마토의 마름병 말기입니다. 조금 늦은 것 같습니다.");
				else if (al=="Tomato___Leaf_Mold")
					alert("토마토의 잎 곰팡이 병입니다. 햇빛과 농약이 필요합니다.");
				else if (al=="Tomato___Septoria_leaf_spot")
					alert("토마토의 잎 얼룩 병입니다. 습도와 햇빛을 확인해보세요.");
				else if (al=="Tomato___Spider_mites Two-spotted_spider_mite")
					alert("토마토의 거미 진드기 병입니다. 농약을 준비하세요....");
				else if (al=="Tomato___Target_Spot")
					alert("토마토의 얼룩병입니다. 습도를 확인해보세요.");
				else if (al=="Tomato___Tomato_Yellow_Leaf_Curl_Virus")
					alert("토마토의 노랑 잎 미생물 바이러스입니다. 농약을 준비하세요. 아직 살릴 수 있습니다.");
				else if (al=="Tomato___Tomato_mosaic_virus")
					alert("토마토의 모자이크 바이러스입니다. 농약을 준비해주세요. 살리셔야됩니다.");
				else if (al=="Tomato___healthy")
					alert("토마토가 건강합니다. 지금 습도와 햇빛을 유지하세요.");
				else if (al=="background")
					alert("식물이 아닙니다. 식물의 잎을 향하여 찍어주세요.");
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




