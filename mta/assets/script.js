// Todo:
// - CSS width for mobile etc
// - Text wrong size mobile?
// - Add dropdown
// - Fix tram / cloud positioning
// Data:
// - Figure out what live data is possible to access and include (Today)
// - Review all code / math
// - Add site info / data disclaimer dropdown (estimated from ...) and info on updating (most recent data from mta sets fetch daily at https://gunthern.pythonanywhere.com/, most recent update xxxxxx)
// CSS / HTML:
// - Create CSS for live data (old style LCD cells)
// - Increase min panel etc. width (for mobile displays and 1920p or smaller screens)
// - Adjust font / footer / logo image size for different resolutions
// JS functionality:
// - Fix issue with tram / cloud height on different screen heights, make sure it works after implementing info / data disclaimer dropdown
// - Write script for subway cars, buses, combination scroll animation (like the tramway)
// - Test on mobile
// - Do a pass for various screen widths, browsers, general functionality

window.addEventListener("load", init, false);

function init() {

    // Get data from web app
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        const response = JSON.parse(this.responseText);
        const dateMostRecent = response.dateMostRecent;
        const dateWeekStart = response.dateWeekStart;
        const dateYearStart = response.dateYearStart;

        document.getElementById('weekdaterange').innerHTML = dateWeekStart + ' - ' + dateMostRecent;
        document.getElementById('weekdaterangetram0').innerHTML = dateWeekStart + ' - ' + dateMostRecent;
        document.getElementById('weekdaterangetram1').innerHTML = dateWeekStart + ' - ' + dateMostRecent;
        document.getElementById('weekdaterangesubway0').innerHTML = dateWeekStart + ' - ' + dateMostRecent;
        document.getElementById('weekdaterangesubway1').innerHTML = dateWeekStart + ' - ' + dateMostRecent;
        document.getElementById('weekdaterangesubway2').innerHTML = dateWeekStart + ' - ' + dateMostRecent;
        document.getElementById('weekdaterangesubway3').innerHTML = dateWeekStart + ' - ' + dateMostRecent;
        document.getElementById('weekdaterangebus0').innerHTML = dateWeekStart + ' - ' + dateMostRecent;
        document.getElementById('weekdaterangebus1').innerHTML = dateWeekStart + ' - ' + dateMostRecent;
        document.getElementById('weekdaterangebus2').innerHTML = dateWeekStart + ' - ' + dateMostRecent;
        document.getElementById('weekdaterangebus3').innerHTML = dateWeekStart + ' - ' + dateMostRecent;
        document.getElementById('yeardaterange0').innerHTML = dateYearStart + ' - ' + dateMostRecent;
        document.getElementById('yeardaterange1').innerHTML = dateYearStart + ' - ' + dateMostRecent;
        document.getElementById('yeardaterange2').innerHTML = dateYearStart + ' - ' + dateMostRecent;
        document.getElementById('yeardaterange3').innerHTML = dateYearStart + ' - ' + dateMostRecent;
        document.getElementById('yeardaterange4').innerHTML = dateYearStart + ' - ' + dateMostRecent;

        document.getElementById('tramweeklyridership').innerHTML = response.tramWeeklyRidership.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('trammaxdailyridership').innerHTML = response.tramMaxDailyRidershipWeekly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('trammaxdailydate').innerHTML = response.tramMaxDailyDateWeekly.slice(0, -6);;

        document.getElementById('subwayweeklyridership').innerHTML = response.subwayWeeklyRidership.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('subwaymaxdailyridership0').innerHTML = response.subwayMaxDailyRidershipWeekly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('subwaymaxdailyridership1').innerHTML = response.subwayMaxDailyRidershipWeekly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('subwaymaxdailycars').innerHTML = (response.subwayMaxDailyRidershipWeekly / 200).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('subwaymaxdailydate').innerHTML = response.subwayMaxDailyDateWeekly.slice(0, -6);

        let subwayMaxBoroughId = 'subwayweekly';
        let subwayMaxBorough = response.subwayStationMaxRidershipWeeklyBorough[0];
        if (subwayMaxBorough == 'Bronx') {
            subwayMaxBoroughId += 'bronx';
            subwayMaxBorough = 'The Bronx';
        }
        else if (subwayMaxBorough == 'Brooklyn') subwayMaxBoroughId += 'brooklyn';
        else if (subwayMaxBorough == 'Manhattan') subwayMaxBoroughId += 'manhattan';
        else if (subwayMaxBorough == 'Queens') subwayMaxBoroughId += 'queens';
        else if (subwayMaxBorough == 'Staten Island') subwayMaxBoroughId += 'staten';
        document.getElementById(subwayMaxBoroughId).hidden = true;
        document.getElementById(subwayMaxBoroughId + 'icons').hidden = true;

        let nameIds = idsNameSplit(response.subwayStationMaxRidershipWeeklyStation[0].toString());
        lineIconsFromIds(nameIds[0], 'subwaystationweekmaxstationserviceicons', 0);
        document.getElementById('subwaystationweekmaxstation0').innerHTML = nameIds[1];
        document.getElementById('subwaystationweekmaxstation1').innerHTML = nameIds[1];
        document.getElementById('subwaystationweekmaxborough').innerHTML = subwayMaxBorough;
        document.getElementById('subwaystationweekmaxcount').innerHTML = response.subwayStationMaxRidershipWeeklyCount[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        if (subwayMaxBorough != 'The Bronx') {
            let bronxMaxStationIndex;
            for (let i=0; i<response.subwayStationMaxRidershipWeeklyBorough.length; i++) {
                if (response.subwayStationMaxRidershipWeeklyBorough[i] == 'Bronx') {
                    bronxMaxStationIndex = i;
                    break;
                }
            }
            nameIds = idsNameSplit(response.subwayStationMaxRidershipWeeklyStation[bronxMaxStationIndex].toString());
            lineIconsFromIds(nameIds[0], 'subwayweeklybronxicons', 0);
            document.getElementById('subwaybronxweekmaxstation0').innerHTML = nameIds[1];
            document.getElementById('subwaybronxweekmaxstation1').innerHTML = nameIds[1];
            document.getElementById('subwaybronxweekmaxcount').innerHTML = response.subwayStationMaxRidershipWeeklyCount[bronxMaxStationIndex].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        if (subwayMaxBorough != 'Brooklyn') {
            let brooklynMaxStationIndex;
            for (let i=0; i<response.subwayStationMaxRidershipWeeklyBorough.length; i++) {
                if (response.subwayStationMaxRidershipWeeklyBorough[i] == 'Brooklyn') {
                    brooklynMaxStationIndex = i;
                    break;
                }
            }
            nameIds = idsNameSplit(response.subwayStationMaxRidershipWeeklyStation[brooklynMaxStationIndex].toString());
            lineIconsFromIds(nameIds[0], 'subwayweeklybrooklynicons', 0);
            document.getElementById('subwaybrooklynweekmaxstation0').innerHTML = nameIds[1];
            document.getElementById('subwaybrooklynweekmaxstation1').innerHTML = nameIds[1];
            document.getElementById('subwaybrooklynweekmaxcount').innerHTML = response.subwayStationMaxRidershipWeeklyCount[brooklynMaxStationIndex].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        if (subwayMaxBorough != 'Manhattan') {
            let manhattanMaxStationIndex;
            for (let i=0; i<response.subwayStationMaxRidershipWeeklyBorough.length; i++) {
                if (response.subwayStationMaxRidershipWeeklyBorough[i] == 'Manhattan') {
                    manhattanMaxStationIndex = i;
                    break;
                }
            }
            nameIds = idsNameSplit(response.subwayStationMaxRidershipWeeklyStation[manhattanMaxStationIndex].toString());
            lineIconsFromIds(nameIds[0], 'subwayweeklymanhattanicons', 0);
            document.getElementById('subwaymanhattanweekmaxstation0').innerHTML = nameIds[1];
            document.getElementById('subwaymanhattanweekmaxstation1').innerHTML = nameIds[1];
            document.getElementById('subwaymanhattanweekmaxcount').innerHTML = response.subwayStationMaxRidershipWeeklyCount[manhattanMaxStationIndex].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        if (subwayMaxBorough != 'Queens') {
            let queensMaxStationIndex;
            for (let i=0; i<response.subwayStationMaxRidershipWeeklyBorough.length; i++) {
                if (response.subwayStationMaxRidershipWeeklyBorough[i] == 'Queens') {
                    queensMaxStationIndex = i;
                    break;
                }
            }
            nameIds = idsNameSplit(response.subwayStationMaxRidershipWeeklyStation[queensMaxStationIndex].toString());
            lineIconsFromIds(nameIds[0], 'subwayweeklyqueensicons', 0);
            document.getElementById('subwayqueensweekmaxstation0').innerHTML = nameIds[1];
            document.getElementById('subwayqueensweekmaxstation1').innerHTML = nameIds[1];
            document.getElementById('subwayqueensweekmaxcount').innerHTML = response.subwayStationMaxRidershipWeeklyCount[queensMaxStationIndex].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        if (subwayMaxBorough != 'Staten Island') {
            let statenMaxStationIndex;
            for (let i=0; i<response.subwayStationMaxRidershipWeeklyBorough.length; i++) {
                if (response.subwayStationMaxRidershipWeeklyBorough[i] == 'Staten Island') {
                    statenMaxStationIndex = i;
                    break;
                }
            }
            nameIds = idsNameSplit(response.subwayStationMaxRidershipWeeklyStation[statenMaxStationIndex].toString());
            lineIconsFromIds(nameIds[0], 'subwayweeklystatenicons', 0);
            document.getElementById('subwaystatenweekmaxstation0').innerHTML = nameIds[1];
            document.getElementById('subwaystatenweekmaxstation1').innerHTML = nameIds[1];
            document.getElementById('subwaystatenweekmaxcount').innerHTML = response.subwayStationMaxRidershipWeeklyCount[statenMaxStationIndex].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        let subwayWeeklyTableHtmlString = "<thead class='paneltablehead'><tr><th><text>Rank</text></th><th><text>Subway Station / Service</text></th><th><text>Borough</text></th><th><text>Ridership (week)</text></th></tr></thead><tbody class='paneltablebody'>";
        for (let i=0; i<response.subwayStationMaxRidershipWeeklyStation.length; i++) {
            const nameIds = idsNameSplit(response.subwayStationMaxRidershipWeeklyStation[i].toString());
            let idsImgString = '<br/>';
            for (let j=0; j<nameIds[0].length; j++) {
                idsImgString += '<img src="./assets/subway' + nameIds[0][j] + '.png" alt="Subway ' + nameIds[0][j] + ' line logo"/>';
            }
            let tableString = "<tr><th><text>" + (i+1) + "</text></th><th><text>" + nameIds[1] + "</text>" + idsImgString + "</th>";
            tableString += "<th><text>" + response.subwayStationMaxRidershipWeeklyBorough[i] + "</text></th>";
            tableString += "<th><text>" + response.subwayStationMaxRidershipWeeklyCount[i].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</text></th></tr>";
            subwayWeeklyTableHtmlString += tableString;
        }
        document.getElementById('subwayweeklytable').innerHTML = subwayWeeklyTableHtmlString + '</tbody>';

        document.getElementById('busweeklyridership').innerHTML = response.busWeeklyRidership.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('busmaxdailyridership0').innerHTML = response.busMaxDailyRidershipWeekly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('busmaxdailyridership1').innerHTML = response.busMaxDailyRidershipWeekly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('busmaxdailybuses').innerHTML = (response.busMaxDailyRidershipWeekly / 200).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('busmaxdailydate').innerHTML = response.busMaxDailyDateWeekly.slice(0, -6);

        let busMaxBoroughId = 'busweekly';
        let busMaxBorough = response.busRouteMaxRidershipWeeklyBorough[0];
        if (busMaxBorough == 'Bronx') {
            busMaxBoroughId += 'bronx';
            busMaxBorough = 'The Bronx';
        }
        else if (busMaxBorough == 'Brooklyn') busMaxBoroughId += 'brooklyn';
        else if (busMaxBorough == 'Manhattan') busMaxBoroughId += 'manhattan';
        else if (busMaxBorough == 'Queens') busMaxBoroughId += 'queens';
        else if (busMaxBorough == 'Staten Island') busMaxBoroughId += 'staten';
        document.getElementById(busMaxBoroughId).hidden = true;
        document.getElementById('busrouteweekmaxroute0').innerHTML = response.busRouteMaxRidershipWeeklyRoute[0].toString();
        document.getElementById('busrouteweekmaxroute1').innerHTML = response.busRouteMaxRidershipWeeklyRoute[0].toString();
        document.getElementById('busrouteweekmaxservice').innerHTML = busMaxBorough;
        document.getElementById('busrouteweekmaxcount').innerHTML = response.busRouteMaxRidershipWeeklyCount[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        if (busMaxBorough != 'The Bronx') {
            let bronxMaxRouteIndex;
            for (let i=0; i<response.busRouteMaxRidershipWeeklyBorough.length; i++) {
                if (response.busRouteMaxRidershipWeeklyBorough[i] == 'Bronx' ||
                    response.busRouteMaxRidershipWeeklyBorough[i] == 'Bronx - Manhattan Express'
                ) {
                    bronxMaxRouteIndex = i;
                    break;
                }
            }
            document.getElementById('busbronxweekmaxroute0').innerHTML = response.busRouteMaxRidershipWeeklyRoute[bronxMaxRouteIndex];
            document.getElementById('busbronxweekmaxroute1').innerHTML = response.busRouteMaxRidershipWeeklyRoute[bronxMaxRouteIndex];
            document.getElementById('busbronxweekmaxcount').innerHTML = response.busRouteMaxRidershipWeeklyCount[bronxMaxRouteIndex].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        if (busMaxBorough != 'Brooklyn') {
            let brooklynMaxRouteIndex;
            for (let i=0; i<response.busRouteMaxRidershipWeeklyBorough.length; i++) {
                if (response.busRouteMaxRidershipWeeklyBorough[i] == 'Brooklyn' ||
                    response.busRouteMaxRidershipWeeklyBorough[i] == 'Brooklyn - Manhattan Express'
                ) {
                    brooklynMaxRouteIndex = i;
                    break;
                }
            }
            document.getElementById('busbrooklynweekmaxroute0').innerHTML = response.busRouteMaxRidershipWeeklyRoute[brooklynMaxRouteIndex];
            document.getElementById('busbrooklynweekmaxroute1').innerHTML = response.busRouteMaxRidershipWeeklyRoute[brooklynMaxRouteIndex];
            document.getElementById('busbrooklynweekmaxcount').innerHTML = response.busRouteMaxRidershipWeeklyCount[brooklynMaxRouteIndex].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        if (busMaxBorough != 'Manhattan') {
            let manhattanMaxRouteIndex;
            for (let i=0; i<response.busRouteMaxRidershipWeeklyBorough.length; i++) {
                if (response.busRouteMaxRidershipWeeklyBorough[i] == 'Manhattan') {
                    manhattanMaxRouteIndex = i;
                    break;
                }
            }
            document.getElementById('busmanhattanweekmaxroute0').innerHTML = response.busRouteMaxRidershipWeeklyRoute[manhattanMaxRouteIndex];
            document.getElementById('busmanhattanweekmaxroute1').innerHTML = response.busRouteMaxRidershipWeeklyRoute[manhattanMaxRouteIndex];
            document.getElementById('busmanhattanweekmaxcount').innerHTML = response.busRouteMaxRidershipWeeklyCount[manhattanMaxRouteIndex].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        if (busMaxBorough != 'Queens') {
            let queensMaxRouteIndex;
            for (let i=0; i<response.busRouteMaxRidershipWeeklyBorough.length; i++) {
                if (response.busRouteMaxRidershipWeeklyBorough[i] == 'Queens' ||
                    response.busRouteMaxRidershipWeeklyBorough[i] == 'Queens - Manhattan Express'
                ) {
                    queensMaxRouteIndex = i;
                    break;
                }
            }
            document.getElementById('busqueensweekmaxroute0').innerHTML = response.busRouteMaxRidershipWeeklyRoute[queensMaxRouteIndex];
            document.getElementById('busqueensweekmaxroute1').innerHTML = response.busRouteMaxRidershipWeeklyRoute[queensMaxRouteIndex];
            document.getElementById('busqueensweekmaxcount').innerHTML = response.busRouteMaxRidershipWeeklyCount[queensMaxRouteIndex].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        if (busMaxBorough != 'Staten Island') {
            let statenMaxRouteIndex;
            for (let i=0; i<response.busRouteMaxRidershipWeeklyBorough.length; i++) {
                if (response.busRouteMaxRidershipWeeklyBorough[i] == 'Staten Island' ||
                    response.busRouteMaxRidershipWeeklyBorough[i] == 'Staten Island - Manhattan Express'
                ) {
                    statenMaxRouteIndex = i;
                    break;
                }
            }
            document.getElementById('busstatenweekmaxroute0').innerHTML = response.busRouteMaxRidershipWeeklyRoute[statenMaxRouteIndex];
            document.getElementById('busstatenweekmaxroute1').innerHTML = response.busRouteMaxRidershipWeeklyRoute[statenMaxRouteIndex];
            document.getElementById('busstatenweekmaxcount').innerHTML = response.busRouteMaxRidershipWeeklyCount[statenMaxRouteIndex].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        let busWeeklyTableHtmlString = "<thead class='paneltablehead'><tr><th><text>Rank</text></th><th><text>Bus Route</text></th><th><text>Service</text></th><th><text>Ridership (week)</text></th></tr></thead><tbody class='paneltablebody'>";
        for (let i=0; i<response.busRouteMaxRidershipWeeklyRoute.length; i++) {
            const nameIds = idsNameSplit(response.busRouteMaxRidershipWeeklyRoute[i].toString());
            let tableString = "<tr><th><text>" + (i+1) + "</text></th><th><text>" + nameIds[1] + "</text></th>";
            tableString += "<th><text>" + response.busRouteMaxRidershipWeeklyBorough[i] + "</text></th>";
            tableString += "<th><text>" + response.busRouteMaxRidershipWeeklyCount[i].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</text></th></tr>";
            busWeeklyTableHtmlString += tableString;
        }
        document.getElementById('busweeklytable').innerHTML = busWeeklyTableHtmlString + '</tbody>';

        document.getElementById('subwaymaxannualdate').innerHTML = response.subwayMaxAnnualDate;
        document.getElementById('subwaymaxannualdateridership').innerHTML = response.subwayMaxAnnualDateRidership.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
        document.getElementById('subwayminannualdate').innerHTML = response.subwayMinAnnualDate;
        document.getElementById('subwayminannualdateridership').innerHTML = response.subwayMinAnnualDateRidership.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
        document.getElementById('subwaymaxannualday').innerHTML = response.subwayMaxAnnualDay;
        document.getElementById('subwaymaxannualdaymean').innerHTML = response.subwayMaxMeanDayRidership.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('subwayminannualday').innerHTML = response.subwayMinAnnualDay;
        document.getElementById('subwayminannualdaymean').innerHTML = response.subwayMinMeanDayRidership.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('subwayyearlyridership').innerHTML = response.subwayYearlyRidership.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('subwaydailyridershipavg').innerHTML = (response.subwayYearlyRidership / 365.0).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        
        document.getElementById('busmaxannualdate').innerHTML = response.busMaxAnnualDate;
        document.getElementById('busmaxannualdateridership').innerHTML = response.busMaxAnnualDateRidership.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
        document.getElementById('busminannualdate').innerHTML = response.busMinAnnualDate;
        document.getElementById('busminannualdateridership').innerHTML = response.busMinAnnualDateRidership.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
        document.getElementById('busmaxannualday').innerHTML = response.busMaxAnnualDay;
        document.getElementById('busmaxannualdaymean').innerHTML = response.busMaxMeanDayRidership.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('busminannualday').innerHTML = response.busMinAnnualDay;
        document.getElementById('busminannualdaymean').innerHTML = response.busMinMeanDayRidership.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('busyearlyridership').innerHTML = response.busYearlyRidership.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('busdailyridershipavg').innerHTML = (response.busYearlyRidership / 365.0).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        
        document.getElementById('tramweeklyridershiphourly').setAttribute('src', 'https://gunthern.pythonanywhere.com/weeklytramridership?dummy' + Date.now())
        document.getElementById('subwayweeklyridershiphourly').setAttribute('src', 'https://gunthern.pythonanywhere.com/weeklysubwayridership?dummy' + Date.now())
        document.getElementById('subwayweeklystationcomparison').setAttribute('src', 'https://gunthern.pythonanywhere.com/weeklystationcomparison?dummy' + Date.now())
        document.getElementById('busweeklyridershiphourly').setAttribute('src', 'https://gunthern.pythonanywhere.com/weeklybusridership?dummy' + Date.now())
        document.getElementById('busweeklyroutecomparison').setAttribute('src', 'https://gunthern.pythonanywhere.com/weeklyroutecomparison?dummy' + Date.now())
        document.getElementById('meandayofweekcomparison').setAttribute('src', 'https://gunthern.pythonanywhere.com/meandayofweekcomparison?dummy' + Date.now())
        document.getElementById('subwayyearlyridershipdaily').setAttribute('src', 'https://gunthern.pythonanywhere.com/yearlysubwayridership?dummy' + Date.now())
        document.getElementById('busyearlyridershipdaily').setAttribute('src', 'https://gunthern.pythonanywhere.com/yearlybusridership?dummy' + Date.now())

        updateScrollValues();
    }
    xhttp.open("GET", "https://gunthern.pythonanywhere.com/");
    xhttp.send();

    // Extract subway line identifiers from station name
    function idsNameSplit(nameIds) {

        const regex = /\(([^)]+)\)/g;
        let match;
        const result = [];
        let name = nameIds;
        while ((match = regex.exec(nameIds)) !== null) {
            const r = match[1].split(',');
            let matchFound = false;
            for (let i=0; i<r.length; i++) {
                if (r[i].length == 1 || r[i] == 'SIR') {
                    result.push(r[i]);
                    matchFound = true;
                }
            }
            if (matchFound) {
                name = name.replace(match.toString().match(/\([^)]*\)/g), '').trim();
            }
        }
        return [result, name]

    }

    // Create HTML for subway line icons from line ids
    function lineIconsFromIds(id, element, scale) {

        // Create html string
        let htmlString = '';
        let logoScale = ['sublogo'];
        for (let i=0; i<id.length; i++) {
            htmlString += '<img class="' + logoScale[scale] + '" ';
            if (i==0) htmlString += 'style="margin-left: 10px;" ';
            htmlString += 'src = "./assets/subway' + id[i].toString() + '.png" alt="Subway ' + id[i].toString() + ' line logo"/>';
        }
        
        // Update html
        document.getElementById(element).innerHTML = htmlString;
    }

    // Scrolling effects
    let lastKnownScrollPosition = 0;
    window.addEventListener("scroll", function() {
        lastKnownScrollPosition = window.scrollY;
        cloudPositioner(lastKnownScrollPosition);
        tramPositioner(lastKnownScrollPosition);
    });
    
    let tramStart;
    function updateScrollValues() {
        lastKnownScrollPosition = window.scrollY;
        tramStart = sky.getBoundingClientRect().top + window.scrollY;
    }
    updateScrollValues();

    // Parallax scroll for clouds
    const clouds = document.getElementsByClassName('cloud');
    let cloudPosY = [];
    for (let i=0; i<clouds.length; i++) {
        cloudPosY.push(parseFloat(clouds[i].style.marginTop.slice(0, -1)));
    }
    const cloudScrollYSpeed = 0.5;

    function cloudPositioner(offset) {
        for (let i=0; i<clouds.length; i++) {
            const pos = cloudPosY[i] - tramStart + 1500 + offset * cloudScrollYSpeed;
            clouds[i].style.transform = 'translateY(' + pos + 'px)';
        }
    }
    cloudPositioner(lastKnownScrollPosition);

    // Scroll animation for tram
    const tramRigX = document.getElementById('tramrigx');
    const tramRigY = document.getElementById('tramrigy');
    const tramPosY = 600;
    const tramScrollLock = tramStart;
    const tramScrollUnlock = tramScrollLock + 2000;
    const tramScrollXSpeed = 0.7;
    const tramScrollYSpeed = 0.9;
    function tramPositioner(offset) {
        const pos = offset * tramScrollXSpeed;
        const offsetX = (tramStart / 100) * 2.75;
        tramRigX.style.transform = 'translateX(' + (pos/20 - offsetX) + '%)';
        if (offset > tramScrollLock) {
            if (offset < tramScrollUnlock) {
                tramRigY.style.transform = 'translateY(' + (tramPosY + (offset - tramScrollLock) * tramScrollYSpeed) + 'px)';
            }
            else {
                tramRigY.style.transform = 'translateY(' + (tramPosY + (tramScrollUnlock - tramScrollLock) * tramScrollYSpeed) + 'px)';
            }
        }
        else {
            tramRigY.style.transform = 'translateY(' + tramPosY + 'px)';
        }
    }
    tramPositioner(lastKnownScrollPosition);

    // Autoscroll
    const footermiddle = document.getElementById('footermiddle');
    const footerleft = document.getElementById('footerleft');
    const pageTop = document.getElementById('top');
    footermiddle.addEventListener('click', function() { window.scrollTo({ top: pageTop.scrollTop, behavior: 'smooth'}) });
    footerleft.addEventListener('click', function() { window.scrollTo({ top: pageTop.scrollTop, behavior: 'smooth'}) });
}