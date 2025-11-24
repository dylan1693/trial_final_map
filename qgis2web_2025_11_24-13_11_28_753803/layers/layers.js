var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Countries_1 = new ol.format.GeoJSON();
var features_Countries_1 = format_Countries_1.readFeatures(json_Countries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Countries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Countries_1.addFeatures(features_Countries_1);
var lyr_Countries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Countries_1, 
                style: style_Countries_1,
                popuplayertitle: 'Countries',
                interactive: true,
                title: '<img src="styles/legend/Countries_1.png" /> Countries'
            });
var format_Global_REE_Facilities_2 = new ol.format.GeoJSON();
var features_Global_REE_Facilities_2 = format_Global_REE_Facilities_2.readFeatures(json_Global_REE_Facilities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Global_REE_Facilities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Global_REE_Facilities_2.addFeatures(features_Global_REE_Facilities_2);
var lyr_Global_REE_Facilities_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Global_REE_Facilities_2, 
                style: style_Global_REE_Facilities_2,
                popuplayertitle: 'Global_REE_Facilities',
                interactive: true,
                title: '<img src="styles/legend/Global_REE_Facilities_2.png" /> Global_REE_Facilities'
            });
var format_Exploration_Stage_3 = new ol.format.GeoJSON();
var features_Exploration_Stage_3 = format_Exploration_Stage_3.readFeatures(json_Exploration_Stage_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Exploration_Stage_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Exploration_Stage_3.addFeatures(features_Exploration_Stage_3);
var lyr_Exploration_Stage_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Exploration_Stage_3, 
                style: style_Exploration_Stage_3,
                popuplayertitle: 'Exploration_Stage',
                interactive: true,
                title: '<img src="styles/legend/Exploration_Stage_3.png" /> Exploration_Stage'
            });
var format_Processing_Facilities_4 = new ol.format.GeoJSON();
var features_Processing_Facilities_4 = format_Processing_Facilities_4.readFeatures(json_Processing_Facilities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Processing_Facilities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Processing_Facilities_4.addFeatures(features_Processing_Facilities_4);
var lyr_Processing_Facilities_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Processing_Facilities_4, 
                style: style_Processing_Facilities_4,
                popuplayertitle: 'Processing_Facilities',
                interactive: true,
                title: '<img src="styles/legend/Processing_Facilities_4.png" /> Processing_Facilities'
            });
var format_Mining_Facilities_5 = new ol.format.GeoJSON();
var features_Mining_Facilities_5 = format_Mining_Facilities_5.readFeatures(json_Mining_Facilities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mining_Facilities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mining_Facilities_5.addFeatures(features_Mining_Facilities_5);
var lyr_Mining_Facilities_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mining_Facilities_5, 
                style: style_Mining_Facilities_5,
                popuplayertitle: 'Mining_Facilities',
                interactive: true,
                title: '<img src="styles/legend/Mining_Facilities_5.png" /> Mining_Facilities'
            });
var format_Mineral_Deposits_6 = new ol.format.GeoJSON();
var features_Mineral_Deposits_6 = format_Mineral_Deposits_6.readFeatures(json_Mineral_Deposits_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mineral_Deposits_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mineral_Deposits_6.addFeatures(features_Mineral_Deposits_6);
var lyr_Mineral_Deposits_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mineral_Deposits_6, 
                style: style_Mineral_Deposits_6,
                popuplayertitle: 'Mineral_Deposits',
                interactive: true,
                title: '<img src="styles/legend/Mineral_Deposits_6.png" /> Mineral_Deposits'
            });
var group_Latin_America = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Latin_America'});
var group_Southwest_Asia = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Southwest_Asia'});
var group_INDOPAC = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'INDOPAC'});
var group_Africa = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Africa'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Countries_1.setVisible(true);lyr_Global_REE_Facilities_2.setVisible(true);lyr_Exploration_Stage_3.setVisible(true);lyr_Processing_Facilities_4.setVisible(true);lyr_Mining_Facilities_5.setVisible(true);lyr_Mineral_Deposits_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Countries_1,lyr_Global_REE_Facilities_2,lyr_Exploration_Stage_3,lyr_Processing_Facilities_4,lyr_Mining_Facilities_5,lyr_Mineral_Deposits_6];
lyr_Countries_1.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'Export Restrictions': 'Export Restrictions', });
lyr_Global_REE_Facilities_2.set('fieldAliases', {'fid': 'fid', 'site_name': 'site_name', 'country': 'country', 'latitude': 'latitude', 'longitude': 'longitude', 'com_type': 'com_type', 'commod1': 'commod1', 'commod2': 'commod2', 'commod3': 'commod3', 'oper_type': 'oper_type', 'dep_type': 'dep_type', 'dev_stat': 'dev_stat', 'ore': 'ore', 'orebody_fm': 'orebody_fm', 'work_type': 'work_type', 'model': 'model', 'alteration': 'alteration', 'conc_proc': 'conc_proc', 'hrock_unit': 'hrock_unit', 'hrock_type': 'hrock_type', 'arock_unit': 'arock_unit', 'arock_type': 'arock_type', 'structure': 'structure', 'tectonic': 'tectonic', });
lyr_Exploration_Stage_3.set('fieldAliases', {'fid': 'fid', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Country': 'Country', 'ADM1': 'ADM1', 'FeatureName': 'FeatureName', 'Status': 'Status', 'Primary Element': 'Primary Element', 'Secondary Element1': 'Secondary Element1', 'Secondary Element2': 'Secondary Element2', 'OperateNam': 'OperateNam', 'OwnerName1': 'OwnerName1', 'OwnerName2': 'OwnerName2', 'OwnerName3': 'OwnerName3', 'Region': 'Region', });
lyr_Processing_Facilities_4.set('fieldAliases', {'fid': 'fid', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Country': 'Country', 'ADM1': 'ADM1', 'FeatureNam': 'FeatureNam', 'Primary Element': 'Primary Element', 'Secondary Element': 'Secondary Element', 'Secondary Element2': 'Secondary Element2', 'Status': 'Status', 'OperateNam': 'OperateNam', 'OwnerName1': 'OwnerName1', 'OwnerName2': 'OwnerName2', 'OwnerName3': 'OwnerName3', 'Region': 'Region', });
lyr_Mining_Facilities_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Country': 'Country', 'ADM1': 'ADM1', 'Primary Element': 'Primary Element', 'Secondary Element1': 'Secondary Element1', 'Secondary Element2': 'Secondary Element2', 'Status': 'Status', 'OperateName': 'OperateName', 'OwnerName1': 'OwnerName1', 'OwnerName2': 'OwnerName2', 'Region': 'Region', });
lyr_Mineral_Deposits_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FeatureUID': 'FeatureUID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Country': 'Country', 'ADM1': 'ADM1', 'FeatureNam': 'FeatureNam', 'Primary Resource': 'Primary Resource', 'Secondary Resource1': 'Secondary Resource1', 'Secondary Resource2': 'Secondary Resource2', 'Secondary Resource3': 'Secondary Resource3', 'Secondary Resource4': 'Secondary Resource4', 'Secondary Resource5': 'Secondary Resource5', 'Type of Deposit': 'Type of Deposit', 'Region': 'Region', });
lyr_Countries_1.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'Export Restrictions': 'TextEdit', });
lyr_Global_REE_Facilities_2.set('fieldImages', {'fid': 'TextEdit', 'site_name': 'TextEdit', 'country': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'com_type': 'TextEdit', 'commod1': 'TextEdit', 'commod2': 'TextEdit', 'commod3': 'TextEdit', 'oper_type': 'TextEdit', 'dep_type': 'TextEdit', 'dev_stat': 'TextEdit', 'ore': 'TextEdit', 'orebody_fm': 'TextEdit', 'work_type': 'TextEdit', 'model': 'TextEdit', 'alteration': 'TextEdit', 'conc_proc': 'TextEdit', 'hrock_unit': 'TextEdit', 'hrock_type': 'TextEdit', 'arock_unit': 'TextEdit', 'arock_type': 'TextEdit', 'structure': 'TextEdit', 'tectonic': 'TextEdit', });
lyr_Exploration_Stage_3.set('fieldImages', {'fid': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Country': 'TextEdit', 'ADM1': 'TextEdit', 'FeatureName': 'TextEdit', 'Status': 'TextEdit', 'Primary Element': 'TextEdit', 'Secondary Element1': 'TextEdit', 'Secondary Element2': 'TextEdit', 'OperateNam': 'TextEdit', 'OwnerName1': 'TextEdit', 'OwnerName2': 'TextEdit', 'OwnerName3': 'TextEdit', 'Region': 'TextEdit', });
lyr_Processing_Facilities_4.set('fieldImages', {'fid': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Country': 'TextEdit', 'ADM1': 'TextEdit', 'FeatureNam': 'TextEdit', 'Primary Element': 'TextEdit', 'Secondary Element': 'TextEdit', 'Secondary Element2': 'TextEdit', 'Status': 'TextEdit', 'OperateNam': 'TextEdit', 'OwnerName1': 'TextEdit', 'OwnerName2': 'TextEdit', 'OwnerName3': 'TextEdit', 'Region': 'TextEdit', });
lyr_Mining_Facilities_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Country': 'TextEdit', 'ADM1': 'TextEdit', 'Primary Element': 'TextEdit', 'Secondary Element1': 'TextEdit', 'Secondary Element2': 'TextEdit', 'Status': 'TextEdit', 'OperateName': 'TextEdit', 'OwnerName1': 'TextEdit', 'OwnerName2': 'TextEdit', 'Region': 'TextEdit', });
lyr_Mineral_Deposits_6.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'FeatureUID': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Country': 'TextEdit', 'ADM1': 'TextEdit', 'FeatureNam': 'TextEdit', 'Primary Resource': 'TextEdit', 'Secondary Resource1': 'TextEdit', 'Secondary Resource2': 'TextEdit', 'Secondary Resource3': 'TextEdit', 'Secondary Resource4': 'TextEdit', 'Secondary Resource5': 'TextEdit', 'Type of Deposit': 'TextEdit', 'Region': 'TextEdit', });
lyr_Countries_1.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'Export Restrictions': 'no label', });
lyr_Global_REE_Facilities_2.set('fieldLabels', {'fid': 'hidden field', 'site_name': 'inline label - always visible', 'country': 'inline label - always visible', 'latitude': 'inline label - always visible', 'longitude': 'inline label - always visible', 'com_type': 'inline label - always visible', 'commod1': 'inline label - always visible', 'commod2': 'inline label - always visible', 'commod3': 'inline label - always visible', 'oper_type': 'inline label - always visible', 'dep_type': 'inline label - always visible', 'dev_stat': 'inline label - always visible', 'ore': 'inline label - always visible', 'orebody_fm': 'inline label - always visible', 'work_type': 'inline label - always visible', 'model': 'inline label - always visible', 'alteration': 'inline label - always visible', 'conc_proc': 'inline label - always visible', 'hrock_unit': 'inline label - always visible', 'hrock_type': 'inline label - always visible', 'arock_unit': 'inline label - always visible', 'arock_type': 'inline label - always visible', 'structure': 'inline label - always visible', 'tectonic': 'inline label - always visible', });
lyr_Exploration_Stage_3.set('fieldLabels', {'fid': 'hidden field', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Country': 'inline label - always visible', 'ADM1': 'inline label - always visible', 'FeatureName': 'inline label - always visible', 'Status': 'inline label - always visible', 'Primary Element': 'inline label - always visible', 'Secondary Element1': 'inline label - always visible', 'Secondary Element2': 'inline label - always visible', 'OperateNam': 'inline label - always visible', 'OwnerName1': 'inline label - always visible', 'OwnerName2': 'inline label - always visible', 'OwnerName3': 'inline label - always visible', 'Region': 'inline label - always visible', });
lyr_Processing_Facilities_4.set('fieldLabels', {'fid': 'hidden field', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Country': 'inline label - always visible', 'ADM1': 'inline label - always visible', 'FeatureNam': 'inline label - always visible', 'Primary Element': 'inline label - always visible', 'Secondary Element': 'inline label - always visible', 'Secondary Element2': 'inline label - always visible', 'Status': 'inline label - always visible', 'OperateNam': 'inline label - always visible', 'OwnerName1': 'inline label - always visible', 'OwnerName2': 'inline label - always visible', 'OwnerName3': 'inline label - always visible', 'Region': 'inline label - always visible', });
lyr_Mining_Facilities_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Country': 'inline label - always visible', 'ADM1': 'inline label - always visible', 'Primary Element': 'inline label - always visible', 'Secondary Element1': 'inline label - always visible', 'Secondary Element2': 'inline label - always visible', 'Status': 'inline label - always visible', 'OperateName': 'inline label - always visible', 'OwnerName1': 'inline label - always visible', 'OwnerName2': 'inline label - always visible', 'Region': 'inline label - always visible', });
lyr_Mineral_Deposits_6.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'FeatureUID': 'hidden field', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Country': 'inline label - always visible', 'ADM1': 'inline label - always visible', 'FeatureNam': 'inline label - always visible', 'Primary Resource': 'inline label - always visible', 'Secondary Resource1': 'inline label - always visible', 'Secondary Resource2': 'inline label - always visible', 'Secondary Resource3': 'inline label - always visible', 'Secondary Resource4': 'inline label - always visible', 'Secondary Resource5': 'inline label - always visible', 'Type of Deposit': 'inline label - always visible', 'Region': 'inline label - always visible', });
lyr_Mineral_Deposits_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});