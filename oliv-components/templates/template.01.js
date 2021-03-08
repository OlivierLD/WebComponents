/*
 * From https://www.w3schools.com/howto/howto_html_include.asp
 * Seems to work... So-so.
 * JavaScript in the template is not available, it has to be copied here
 * in this file...
 */

function includeHTML() {
    // console.log("Fetching!");
    let z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /* search for elements with a certain attribute: */
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {  // No arrow function here?
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}


function simulateAstroData(wcId) {
    document.getElementById(wcId).setUserPosition({latitude: 37.7489, longitude: -122.507});
    document.getElementById(wcId).positionLabel = "San Francisco";
    // Sun and Moon are both visible in this one:
    let astroData = {
        "epoch": 1519606316000,
        "deltaT": 68.8033,
        "sun": {"decl": -8.80369392469079, "gha": 189.74510851158544},
        "moon": {"decl": 20.031121542217928, "gha": 64.87581519128405},
        "wanderingBodies": [{"name": "aries", "decl": 0.0, "gha": 168.81145235471575}, {
            "name": "venus",
            "decl": -5.708634118883802,
            "gha": 178.5167888059167
        }, {"name": "mars", "decl": -22.609275055780387, "gha": 271.2920087353893}, {
            "name": "jupiter",
            "decl": -17.389913790354832,
            "gha": 297.8681603803369
        }, {"name": "saturn", "decl": -22.37067643000216, "gha": 251.13894507473975}],
        "stars": [{"name": "Acamar", "decl": -40.23965134765464, "gha": 124.0795053990083}, {
            "name": "Achenar",
            "decl": -57.15135874579861,
            "gha": 144.2253051997917
        }, {"name": "Acrux", "decl": -63.19641507525372, "gha": 341.8960931385428}, {
            "name": "Adhara",
            "decl": -29.002916833877897,
            "gha": 63.974586016730555
        }, {"name": "Aldebaran", "decl": 16.541838209547738, "gha": 99.57302296474417}, {
            "name": "Alioth",
            "decl": 55.85926248005606,
            "gha": 335.1031652653319
        }, {"name": "Alkaid", "decl": 49.22051250121005, "gha": 321.7468590007491}, {
            "name": "Al Na\u0027ir",
            "decl": -46.87395876994698,
            "gha": 196.48212796657924
        }, {"name": "Alnilam", "decl": -1.1956972105269195, "gha": 84.52868675270379}, {
            "name": "Alphard",
            "decl": -8.740424542103334,
            "gha": 26.688892535484882
        }, {"name": "Alphecca", "decl": 26.652395411564527, "gha": 294.94891848050355}, {
            "name": "Alpheratz",
            "decl": 29.188644117555658,
            "gha": 166.48639988493207
        }, {"name": "Altair", "decl": 8.915745866651445, "gha": 230.9011765756152}, {
            "name": "Ankaa",
            "decl": -42.21258849087763,
            "gha": 162.02762752552937
        }, {"name": "Antares", "decl": -26.468237813985514, "gha": 281.18410368600985}, {
            "name": "Arcturus",
            "decl": 19.0870743536425,
            "gha": 314.6892274318808
        }, {"name": "Atria", "decl": -69.05225930073725, "gha": 276.1678005777659}, {
            "name": "Avior",
            "decl": -59.57238351259452,
            "gha": 43.080497098994684
        }, {"name": "Bellatrix", "decl": 6.361315511029723, "gha": 87.2865128308031}, {
            "name": "Betelgeuse",
            "decl": 7.40584191530587,
            "gha": 79.77350156223707
        }, {"name": "Canopus", "decl": -52.71267187902738, "gha": 72.71905563803281}, {
            "name": "Capella",
            "decl": 46.01496278460079,
            "gha": 89.30508834424242
        }, {"name": "Deneb", "decl": 45.343343689932546, "gha": 218.30639957498286}, {
            "name": "Denebola",
            "decl": 14.469150692296047,
            "gha": 351.31359094202014
        }, {"name": "Diphda", "decl": -17.89178538909356, "gha": 157.69439296354005}, {
            "name": "Dubhe",
            "decl": 61.65137013574815,
            "gha": 2.5984456564377467
        }, {"name": "Elnath", "decl": 28.619849100655326, "gha": 86.9528906420138}, {
            "name": "Eltanin",
            "decl": 51.48402471963076,
            "gha": 259.5592909119797
        }, {"name": "Enif", "decl": 9.956594437579376, "gha": 202.54994605046517}, {
            "name": "Fomalhaut",
            "decl": -29.528714149243246,
            "gha": 184.15899812681127
        }, {"name": "Gacrux", "decl": -57.211796409760694, "gha": 340.758037383663}, {
            "name": "Gienah",
            "decl": -17.642446966555035,
            "gha": 344.62342881780194
        }, {"name": "Hadar", "decl": -60.45481496377333, "gha": 317.5268530084984}, {
            "name": "Hamal",
            "decl": 23.545343422779965,
            "gha": 136.76697696953948
        }, {"name": "Kaus Australis", "decl": -34.37199446757743, "gha": 252.47461277676763}, {
            "name": "Kochab",
            "decl": 74.07797751385316,
            "gha": 306.1406394762737
        }, {"name": "Markab", "decl": 15.30064945958933, "gha": 182.40263522634615}, {
            "name": "Menkar",
            "decl": 4.1560939092294795,
            "gha": 123.0084447625847
        }, {"name": "Menkent", "decl": -36.45557560833293, "gha": 316.8709178514965}, {
            "name": "Miaplacidus",
            "decl": -69.79447656413869,
            "gha": 30.445948843859583
        }, {"name": "Mirfak", "decl": 49.924875512537064, "gha": 117.40919187820732}, {
            "name": "Nunki",
            "decl": -26.27135363834146,
            "gha": 244.72149804965767
        }, {"name": "Peacock", "decl": -56.673724673476265, "gha": 222.05794427691785}, {
            "name": "Polaris",
            "decl": 89.34349590949962,
            "gha": 125.32780545512433
        }, {"name": "Pollux", "decl": 27.979676964109853, "gha": 52.20455947085804}, {
            "name": "Procyon",
            "decl": 5.174462198545926,
            "gha": 53.74765016917812
        }, {"name": "Rasalhague", "decl": 12.546707663328352, "gha": 264.8714224549913}, {
            "name": "Regulus",
            "decl": 11.876146278739915,
            "gha": 16.475100265387255
        }, {"name": "Rigel", "decl": -8.186652149065996, "gha": 89.96014542099147}, {
            "name": "Rigil Kent",
            "decl": -60.90406832882255,
            "gha": 308.59749156776263
        }, {"name": "Sabik", "decl": -15.744623199165556, "gha": 270.9607428858249}, {
            "name": "Schedar",
            "decl": 56.63653703103642,
            "gha": 158.43288646026613
        }, {"name": "Shaula", "decl": -37.112108069418596, "gha": 265.1065703286518}, {
            "name": "Sirius",
            "decl": -16.74681085026377,
            "gha": 67.32378015154717
        }, {"name": "Spica", "decl": -11.255040519262243, "gha": 327.272430813009}, {
            "name": "Suhail",
            "decl": -43.509410005672464,
            "gha": 31.639054103452423
        }, {"name": "Vega", "decl": 38.798497977791165, "gha": 249.42856084942983}, {
            "name": "Zubenelgenubi",
            "decl": -16.114787819631754,
            "gha": 305.8406942548137
        }],
        "eclipticObliquity": 23.436930407657115,
        "from": {"latitude": 37.7489, "longitude": -122.507},
        "sunObs": {"alt": 12.04165159542332, "z": 248.71068926303712},
        "moonObs": {"alt": 37.40215187789581, "z": 92.67586514280083},
        "tPass": {"epoch": 0, "year": 0, "month": 0, "day": 0, "hour": 20, "min": 22, "sec": 59, "tz": "UTC"},
        "solarDate": {"epoch": 1519576137146, "year": 2018, "month": 2, "day": 25, "hour": 16, "min": 28, "sec": 57}
    };
    document.getElementById(wcId).setAstronomicalData(astroData);
    document.getElementById(wcId).repaint();
}

function setTransparency(wcId, cb) {
    document.getElementById(wcId).transparentGlobe = (cb.checked ? 'true' : 'false');
    document.getElementById(wcId).repaint();
}

function setSun(wcId, cb) {
    document.getElementById(wcId).withSun = (cb.checked ? 'true' : 'false');
    document.getElementById(wcId).repaint();
}

function setGrid(wcId, cb) {
    document.getElementById(wcId).withGrid = (cb.checked ? 'true' : 'false');
    document.getElementById(wcId).repaint();
}

function setMoon(wcId, cb) {
    document.getElementById(wcId).withMoon = (cb.checked ? 'true' : 'false');
    document.getElementById(wcId).repaint();
}

function setSunlight(wcId, cb) {
    document.getElementById(wcId).withSunlight = (cb.checked ? 'true' : 'false');
    document.getElementById(wcId).repaint();
}

function setMoonlight(wcId, cb) {
    document.getElementById(wcId).withMoonlight = (cb.checked ? 'true' : 'false');
    document.getElementById(wcId).repaint();
}

function setWanderingBodies(wcId, cb) {
    document.getElementById(wcId).withWanderingBodies = (cb.checked ? 'true' : 'false');
    document.getElementById(wcId).repaint();
}

function setStars(wcId, cb) {
    document.getElementById(wcId).withStars = (cb.checked ? 'true' : 'false');
    document.getElementById(wcId).repaint();
}

function setTropics(wcId, cb) {
    document.getElementById(wcId).withTropics = (cb.checked ? 'true' : 'false');
    document.getElementById(wcId).repaint();
}

let spinAnimationInterval;
let userLng;

function spin(wcId, inc) {
    if (spinAnimationInterval !== undefined) {
        window.clearInterval(spinAnimationInterval);
        spinAnimationInterval = undefined;
    } else {
        if (userLng === undefined) {
            userLng = -122.507;
        }
        document.getElementById(wcId).positionLabel = "";
        spinAnimationInterval = window.setInterval(function () {
            document.getElementById(wcId).setUserPosition({latitude: 37.7489, longitude: userLng});
            document.getElementById(wcId).repaint();
            userLng += inc;
            if (userLng > 180) {
                userLng -= 360;
            }
            if (userLng < -180) {
                userLng += 360;
            }
        }, 50);
    }
}

function setProjection(id, radio) {
    document.getElementById(id).projection = radio.value;
    document.getElementById(id).repaint();
}

// Example of callback on WorldMap
function callBefore(id) {
    document.getElementById(id).setDoBefore(function (worldMap, context) {
        context.fillStyle = 'pink';
        let fontBackup = context.font;
        context.font = "bold 48px Verdana";
        context.fillText('BEFORE', 10, 24 + (worldMap.height / 2));
        context.font = fontBackup;
    });
    document.getElementById(id).repaint();
}

// Depends on the user position... Would not turn with the globe.
const gpsSatelliteData = {
    "1": {
        "svID": 1,
        "elevation": 26,
        "azimuth": 316,
        "snr": 0
    },
    "3": {
        "svID": 3,
        "elevation": 4,
        "azimuth": 284,
        "snr": 0
    },
    "8": {
        "svID": 8,
        "elevation": 27,
        "azimuth": 251,
        "snr": 6
    },
    "10": {
        "svID": 10,
        "elevation": 43,
        "azimuth": 75,
        "snr": 0
    },
    "11": {
        "svID": 11,
        "elevation": 32,
        "azimuth": 303,
        "snr": 0
    },
    "14": {
        "svID": 14,
        "elevation": 84,
        "azimuth": 250,
        "snr": 0
    },
    "18": {
        "svID": 18,
        "elevation": 16,
        "azimuth": 92,
        "snr": 0
    },
    "22": {
        "svID": 22,
        "elevation": 22,
        "azimuth": 291,
        "snr": 0
    },
    "24": {
        "svID": 24,
        "elevation": 1,
        "azimuth": 33,
        "snr": 0
    },
    "27": {
        "svID": 27,
        "elevation": 16,
        "azimuth": 212,
        "snr": 6
    },
    "31": {
        "svID": 31,
        "elevation": 31,
        "azimuth": 157,
        "snr": 0
    },
    "32": {
        "svID": 32,
        "elevation": 69,
        "azimuth": 37,
        "snr": 0
    }
};

function plotSatellite(context, worldMap, userPos, satColor, name, satellite) {
    let sat = worldMap.getPanelPoint(satellite.lat, satellite.lng);
    let thisPointIsBehind = worldMap.isBehind(Math.toRadians(satellite.lat), Math.toRadians(satellite.lng - worldMap.globeViewLngOffset));
    if (!thisPointIsBehind || worldMap.transparentGlobe) {
        // Draw Satellite
        worldMap.plot(context, sat, satColor);
        context.fillStyle = satColor;
        context.fillText(name, Math.round(sat.x) + 3, Math.round(sat.y) - 3);
        // Arrow, to the satellite
        context.setLineDash([2]);
        context.strokeStyle = satColor;
        context.beginPath();
        context.moveTo(userPos.x, userPos.y);
        context.lineTo(sat.x, sat.y);
        context.stroke();
        context.closePath();
        context.setLineDash([0]); // Reset
        context.strokeStyle = satColor;
        let deltaX = sat.x - userPos.x;
        let deltaY = sat.y - userPos.y;
        context.beginPath();
        context.moveTo(sat.x, sat.y);
        context.lineTo(sat.x + deltaX, sat.y + deltaY);
        context.stroke();
        context.closePath();
        worldMap.fillCircle(context, {x: sat.x + deltaX, y: sat.y + deltaY}, 6, satColor);
    }
}

function getSNRColor(snr) {
    var c = 'lightGray';
    if (snr !== undefined && snr !== null) {
        if (snr > 0) {
            c = 'red';
        }
        if (snr > 10) {
            c = 'orange';
        }
        if (snr > 20) {
            c = 'yellow';
        }
        if (snr > 30) {
            c = 'lightGreen';
        }
        if (snr > 40) {
            c = 'green';
        }
    }
    return c;
}

// Example of callback on WorldMap
function callAfter(id) {
    document.getElementById(id).setDoAfter(function (worldMap, context) {
        if (Object.keys(worldMap.userPosition).length > 0) {
            let userPos = worldMap.getPanelPoint(worldMap.userPosition.latitude, worldMap.userPosition.longitude);
            /*
             * Display 4 geostationary satellites. Data provided by the user, below.
             */
            const sats = [
                {name: "I-4 F1 Asia-Pacific", lng: 143.5},
                {name: "I-4 F2 EMEA", lng: 63.0},
                {name: "I-4 F3 Americas", lng: -97.6},
                {name: "Alphasat", lng: 24.9}];
            let satColor = 'cyan';
            sats.forEach(gs => {
                plotSatellite(context, worldMap, userPos, satColor, gs.name, {lat: 0, lng: gs.lng});
            });

            // GPS Satellites in view
            for (var sat in gpsSatelliteData) {
                let satellite = gpsSatelliteData[sat];
                let satellitePosition = WorldMap.deadReckoningRadians({
                    lat: Math.toRadians(worldMap.userPosition.latitude),
                    lng: Math.toRadians(worldMap.userPosition.longitude)
                }, (90 - satellite.elevation) * 60, satellite.azimuth);
                plotSatellite(context, worldMap, userPos, getSNRColor(satellite.snr), sat, {
                    lat: Math.toDegrees(satellitePosition.lat),
                    lng: Math.toDegrees(satellitePosition.lng)
                });
            }
        }
    });
    document.getElementById(id).repaint();
}

function setSplitFlapValue(id, value) {
    let elem = document.getElementById(id);
    // Character by character, flap-flap-flap
    let original = elem.paddedValue;
    let newPaddedValue = elem.getPaddedValue(elem.cleanString(value));
    //	console.log("Old [%s], new [%s]", original, newPaddedValue);
    //	assert(old.length === new.length);

    // Flap-flap-flap
    function updateFlap(idx) { // THIS is balaise. Function in a function.
        if (original.charAt(idx).toUpperCase() !== newPaddedValue.charAt(idx).toUpperCase()) {
            setTimeout(() => {
                let next = elem.getNextChar(original.charAt(idx));
//					console.log("Updating %s with %s", original, next);
                elem.setCharAt(idx, next);
                original = elem.paddedValue;
                updateFlap(idx); // Recurse
            }, 50);
        }
    };

    for (let idx=0; idx<original.length; idx++) {
        updateFlap(idx);
    }
//		elem.value = value;
//		elem.repaint();
}

