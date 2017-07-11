angular.module('snietApp').controller('consultaIncidentesCtrl', function($scope, $http){
    
	$scope.msg ='consultaIncidentesCtrl';
	$scope.incidentes= [];
	$scope.individuos= null;

	$scope.pontos = function(){
		var map = `<iframe src='${path.base}/map/maps.html' class="show-maps"></iframe>`;
		$('#mapa').empty().append(map);
	}

	$scope.ponto = function(id){
		var map = `<iframe src='${path.base}/map/map_one.html?individuoID=${id}' class="show-maps" ></iframe>`;
		$('#mapa').empty().append(map);
	}

	$scope.listarIncidentes = function(){

		$http.get(`${path.base}/servlet/incidents/`).then(function(response){
			$scope.incidentes = response.data;
			console.log($scope.incidentes);
		})
		.catch(function(e){
			console.log('Erro!');
			console.log(e);
		});
	}


	$scope.listarIndividuos = function(){

		$http.get(`${path.base}/servlet/incidents/all`).then(function(response){
			$scope.individuos = response.data;
			//console.log($scope.individuos);
		})
		.catch(function(e){
			console.log("Error!")
			console.log(e);
		});
	}

	$scope.dadosModal = function(incidente){

    	$scope.descricaoIncidente = incidente.descricaoIncidente;
		$scope.dataIncidente =incidente.dataIncidente;
		$scope.statusIncidente =incidente.statusIncidente;
		$scope.nomeLocal =incidente.nomeLocal;
		$scope.pais =incidente.pais;
		$scope.UF =incidente.UF;
		$scope.cidade =incidente.cidade;
		$scope.bairro =incidente.bairro;
		$scope.latitude =incidente.latitude;
		$scope.longitude =incidente.longitude;
		$scope.idade =incidente.idade;
		$scope.nome =incidente.nome;
		$scope.profissao =incidente.profissao;
		$scope.sexo =incidente.sexo;
		$scope.tipoPratica =incidente.tipoPratica;
		$scope.statusPratica =incidente.statusPratica;
		$scope.descricaoPratica =incidente.descricaoPratica;

	}

	$scope.editarIncidente = function(){

		var incidenteEdit ={	  
			incidente : {
				descIncidente: $scope.descricaoIncidente,
				dataIncidente: $scope.dataIncidente,
				status: $scope.statusIncidente,
				local: {
					nomeLocal: $scope.nomeLocal,
					pais: $scope.pais,
					uf: $scope.UF,
					cidade: $scope.cidade,
					bairro: $scope.bairro,
					latitude: $scope.latitude,
					longitude: $scope.longitude,
				},
			},
			individuo: {
				idade: $scope.idade,
				nome: $scope.nome,
				profissao: $scope.profissao,
				sex: $scope.sexo,
				pratica: {
					tipoPratica: $scope.tipoPratica,
					statusPratica: $scope.statusPratica,
					descPratica: $scope.descricaoPratica
				}
			}
		};

		var header = {
			headers : {'Content-Type' : 'application/json; charset=UTF-8'}
		};

		$http.put(`${path.base}/sniet_api/servlet/incidents/`, incidenteEdit, header).then(function(response){
			$scope.limparCampos();
			//$scope.listarIndividuos();
		});
	}
	
	$scope.listarIndividuos();

});