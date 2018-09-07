ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
            center: [56.151362, 101.634080],// Москва
            zoom: 5,
            controls: ['smallMapDefaultSet']
        }),

        myPlacemark03330 = new ymaps.Placemark([58.7338888888889, 116.809444444444], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            iconContent: "03330"},{
            
            balloonPanelMaxMapArea: 0,
            preset: "islands#blueStretchyIcon",
            draggable: "true",
            openEmptyBalloon: true

            //balloonContentHeader: "Балун метки",
            //balloonContentBody: "Содержимое <em>балуна</em> метки",
            //balloonContentFooter: "Подвал",
            //hintContent: "Хинт метки"
        });
        
        
        myPlacemark03248 = new ymaps.Placemark([58.6641666666667, 117.056388888889], {
            iconContent: "03248"},{
            
            balloonPanelMaxMapArea: 0,
            preset: "islands#blueStretchyIcon",
            draggable: "true",
            openEmptyBalloon: true
        });
        
        myPlacemark03016 = new ymaps.Placemark([58.072222, 113.483333], {
            iconContent: "03016"},{
            
            balloonPanelMaxMapArea: 0,
            preset: "islands#blueStretchyIcon",
            draggable: "true",
            openEmptyBalloon: true
        });
        myPlacemark03007 = new ymaps.Placemark([58.7275, 116.870278], {
            iconContent: "03007"},{
            
            balloonPanelMaxMapArea: 0,
            preset: "islands#blueStretchyIcon",
            draggable: "true",
            openEmptyBalloon: true
        });
        myPlacemark03006 = new ymaps.Placemark([58.721389, 116.559167], {
            iconContent: "03006"},{
            
            balloonPanelMaxMapArea: 0,
            preset: "islands#blueStretchyIcon",
            draggable: "true",
            openEmptyBalloon: true
        });

        myMap.geoObjects.add(myPlacemark03330);
        myMap.geoObjects.add(myPlacemark03248);
        myMap.geoObjects.add(myPlacemark03016);
        myMap.geoObjects.add(myPlacemark03007);
        myMap.geoObjects.add(myPlacemark03006);

        
        kmlKemButton = $('.load-kml-kem'), //загрузка Кемеровских лицензий

        kmlMagButton = $('.load-kml-mag'); //загрузка Магаданских лицензий

        kmlIrkButton = $('.load-kml-irk'); //загрузка Иркутских лицензий

        kmlOtherButton = $('.load-kml-other'); //загрузка Прочие лицензий

        kmlOtherButton2 = $('.load-kml-other2'); //загрузка зон и дорог 
    // Отключение кеширования атрибута disabled в Firefox.

    //земельные отводы


    
    kmlKemButton.get(0).disabled = false;
    kmlMagButton.get(0).disabled = false;
    kmlIrkButton.get(0).disabled = false;
    kmlOtherButton.get(0).disabled = false;
    kmlOtherButton2.get(0).disabled = false;
    // При нажатии на кнопку загружаем соответствующий XML-файл
    // и отображаем его данные на карте.
    
    kmlKemButton.click(function (e) {
        
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/00527.kml')    
            .then(onGeoXmlLoad);
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/00527_1.kml')    
            .then(onGeoXmlLoad); 
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/00527_2.kml')    
            .then(onGeoXmlLoad);
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/00527_3.kml')    
            .then(onGeoXmlLoad);
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/00527_4.kml')    
            .then(onGeoXmlLoad);
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/01633.kml')    
            .then(onGeoXmlLoad);
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/01633_2.kml')    
            .then(onGeoXmlLoad); 
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/01869.kml')    
            .then(onGeoXmlLoad);  
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/01762.kml')    
            .then(onGeoXmlLoad);
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/02074_.kml')    
            .then(onGeoXmlLoad);
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/02035.kml')    
            .then(onGeoXmlLoad);
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/02033_.kml')    
            .then(onGeoXmlLoad);
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/02073-1.kml')    
            .then(onGeoXmlLoad);
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/02073-2.kml')    
            .then(onGeoXmlLoad);
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/02073-3.kml')    
            .then(onGeoXmlLoad);
                    ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/02073-4.kml')    
            .then(onGeoXmlLoad);
                    ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/02073-5.kml')    
            .then(onGeoXmlLoad);
                    ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/02073-6.kml')    
            .then(onGeoXmlLoad);
                    ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/02073-7.kml')    
            .then(onGeoXmlLoad);
                    ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/02073-8.kml')    
            .then(onGeoXmlLoad);
                    ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/02073-9.kml')    
            .then(onGeoXmlLoad);
                    ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/02073-10.kml')    
            .then(onGeoXmlLoad);


        e.target.disabled = true;
    });

    kmlMagButton.click(function (e) {
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/02220.kml')
            .then(onGeoXmlLoad);
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/02548.kml')
            .then(onGeoXmlLoad);
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/04202.kml')
            .then(onGeoXmlLoad);
         ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/04426.kml')
            .then(onGeoXmlLoad);
         ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/04461.kml')
            .then(onGeoXmlLoad);
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/04663.kml')
            .then(onGeoXmlLoad);
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/04697.kml')
            .then(onGeoXmlLoad);                      

        e.target.disabled = true;

    });


 kmlIrkButton.click(function (e) {
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/03007.kml')
            .then(onGeoXmlLoad);
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/03006.kml')
            .then(onGeoXmlLoad);
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/03248.kml')
            .then(onGeoXmlLoad);
         ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/03330.kml')
            .then(onGeoXmlLoad);
         ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/03016.kml')
            .then(onGeoXmlLoad);
                     

        e.target.disabled = true;

    });


  kmlOtherButton.click(function (e) {
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/00730.kml')
            .then(onGeoXmlLoad);
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/01715.kml')
            .then(onGeoXmlLoad);
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/lic/00447.kml')
            .then(onGeoXmlLoad);

                     

        e.target.disabled = true;

    });

    kmlOtherButton2.click(function (e) {
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/road_033.kml')
            .then(onGeoXmlLoad);
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/zemli004.kml')
            .then(onGeoXmlLoad);
        ymaps.geoXml.load('http://raw.githubusercontent.com/alexeypoley/googlemaps/master/poly/zoone4.kml')
            .then(onGeoXmlLoad);
        e.target.disabled = true;

    });

    // Обработчик загрузки XML-файлов.
    function onGeoXmlLoad(res) {
        myMap.geoObjects.add(res.geoObjects);
        if (res.mapState) {
            res.mapState.applyToMap(myMap);
        }
        else {
            myMap.setBounds(res.geoObjects.getBounds());
        }
    }
}