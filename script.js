function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.66767774804736,
          lng: 135.43076145097373},
        zoom: 18,
        mapId:  "bf720d34f0baa04e"

      });
      const markers = [
        [
          "Yoshi's House",
          34.66669734177897,
          135.4309054875526,
          './img/yoshi_house.svg',
          38,
          31,
        ],
        [
          'You Are Here',
          34.66767112713121,
          135.4297887322531,
          './img/pointer.svg',
          30,
          47.8,
        ],
        [
          'Ghost House',
          34.66832715150856,
          135.43292762674864,
          './img/ghosthouse.svg',
          40,
          48,
        ],
        ['Castle', 34.66775608022106, 135.43139547897843, './img/castle.svg', 40, 53],
        ['Warp Pipe', 34.66739738878135, 135.43225049775214, './img/pipe.svg', 38, 42.5],
        ['Star World', 34.667959023359266, 135.42866400953733, './img/star.svg', 38, 38],
        [
          'Donut Plains',
          34.66830355359945,
          135.4320565322381,
          './img/hill_with_eyes.svg',
          50,
          60.7,
        ],
        [
          'Donut Plains',
          34.66829411443392,
          135.43231361996433,
          './img/hill_with_eyes.svg',
          50,
          60.7,
        ],
        [
          'Donut Plains',
          34.6683781779677,
          135.43217016043528,
          './img/hill_with_eyes.svg',
          50,
          60.7,
        ],
      ];
      
      for(let i =0;i<markers.length;i++){
        const currentMaker =markers[i];
      
        const marker= new google.maps.Marker({
          position:{lat:  currentMaker[1], lng:  currentMaker[2]},
          map,
          title:  currentMaker[0],  
          icon:{
              
            url:  currentMaker[3],
            scaledSize:new  google.maps.Size( currentMaker[4], currentMaker[5]),   
               animation: google.maps.Animation.DROP
          }
          
  
        });
        const infowindow = new google.maps.InfoWindow({
          content: currentMaker[0],
        });
        marker.addListener("click", () => {
          infowindow.open(map, marker);
        });
      }
      
}

// , 135.43001642983145


