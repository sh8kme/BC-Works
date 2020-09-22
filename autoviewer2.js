
 function mapFunction(e) {
    "remove" in Element.prototype || (Element.prototype.remove = function() {
        this.parentNode && this.parentNode.removeChild(this)
    }), mapboxgl.accessToken = "pk.eyJ1IjoicmFsaWNlIiwiYSI6ImNrYXBpazd6ajFmamoyem12ZDd4M2tiZW8ifQ.DGYdxYBP6f5vO6COIyN50g";
     t = new mapboxgl.Map({
        container: "map",
        zoom: 2,
        center: [12.5674, 41.8719],
        style: "mapbox://styles/ralice/ckb6yns0z45tk1ionw3zed5fp",
        scrollZoom: !1,
        attributionControl: !1
    });
   
 function i(e) {
        var i = document.getElementById(e),
            a = i.className.split(" "),
            n = {}; - 1 !== a.indexOf("collapsed") ? (a.splice(a.indexOf("collapsed"), 1), n[e] = 1e3, t.easeTo({
            padding: n,
            duration: 1e3
        })) : (n[e] = 0, a.push("collapsed"), t.easeTo({
            padding: n,
            duration: 1e3
        })), i.className = a.join(" ")
    }
    if (t.addControl(new mapboxgl.NavigationControl), e.features.forEach(function(e, t) {
            e.properties.id = t + "-" + e.properties.type
        }), t.on("load", function(i) {
            var s;
            t.addSource("places", {
                type: "geojson",
                data: e
            }), (s = e).features.forEach(function(e, t) {
                var i = e.properties,
                    r = document.getElementById("listings"),
                    o = document.getElementById("tslshow"),
                    l = document.getElementById("tslshowm"),
                    c = r.appendChild(document.createElement("div")),
                    o = o.appendChild(document.createElement("div")),
                    l = l.appendChild(document.createElement("div"));
                c.id = "listing-" + i.id, c.className = "item", o.className = "tblock", l.className = "tblock";
                var d = c.appendChild(document.createElement("a")),
                    m = o.appendChild(document.createElement("a")),
                    h = l.appendChild(document.createElement("a"));
                          d.href = "#", m.href = "#", h.href = "#", d.className = "item-title", d.id = "link-" + i.id, m.id = "listing-" + i.id, h.id = "listing-" + i.id, d.innerHTML += '<img class="mb-img" src="' + i.url + '"/><div class="slides" style="background-image:url(' + i.url + ')"></div><div class="hidden slides slide2" style="background-image:url(' + i.url2 + ')"></div>', d.innerHTML += "<h4>" + i.title + "</h4>", m.innerHTML = "<h6>" + i.timeline + "</h6>", m.innerHTML += "BLOCK " + t, h.innerHTML += i.title, i.wallet && (d.innerHTML += "<h5>ARTWORK ADDRESS</h5>", d.innerHTML += "<span>" + i.wallet + "</span>"), i.nft && (d.innerHTML += "<h5>NFT ADDRESS</h5>", d.innerHTML += "<span>" + i.nft + "</span>"), i.info && (d.innerHTML += "<h5>DATA</h5>", d.innerHTML += "<span>" + i.info + "</span>"), i.block && (d.innerHTML += "<h5>BLOCK HEIGHT</h5>", d.innerHTML += "<span>" + i.block + "</span>"), i.codebasestart && (d.innerHTML += "<h5>CODEBASE SECTION</h5>", d.innerHTML += "<span>" + i.codebasestart + " - " + i.codebaseend + "</span>"), i.notes && (d.innerHTML += "<h5>NOTES</h5>", d.innerHTML += "<span>" + i.notes + "</span>"), $("[id^=listing-0]").addClass("active"), d.addEventListener("click", function(e) {
				  for (var t = 0; t < s.features.length; t++)
                        if (this.id === "link-" + s.features[t].properties.id) {
                            var i = s.features[t];
                            a(i), n(i)
                        }
                    var r = document.getElementsByClassName("active");
                    r[0] && r[0].classList.remove("active"), this.parentNode.classList.add("active")
                }), m.addEventListener("click", function(e) {
                    for (var t = 0; t < s.features.length; t++)
                        if (this.id === "listing-" + s.features[t].properties.id) {
                            var i = s.features[t];
                            a(i), n(i)
                        }
                    var r = document.getElementsByClassName("active");
                    r[0] && r[0].classList.remove("active");
                    var o = document.getElementById(this.id);
                    o.classList.add("active")
                }), h.addEventListener("click", function(e) {
                    for (var t = 0; t < s.features.length; t++)
                        if (this.id === "listing-" + s.features[t].properties.id) {
                            var i = s.features[t];
                            a(i), n(i)
                        }
                    var r = document.getElementsByClassName("active");
                    r[0] && r[0].classList.remove("active");
                    var o = document.getElementById(this.id);
                    o.classList.add("active")
                })
               
            }), e.features.forEach(function(e) {
                var i = document.createElement("div");
                i.id = "marker-" + e.properties.id, i.className = "marker  rn-" + e.properties.range, new mapboxgl.Marker(i, {
                    offset: [0, 0]
                }).setLngLat(e.geometry.coordinates).addTo(t), i.addEventListener("click", function(t) {
                    i.classList.add("highlight"), a(e), n(e);
                    var s = document.getElementsByClassName("active");
                    t.stopPropagation(), s[0] && s[0].classList.remove("active");
                    var r = document.getElementById("listing-" + e.properties.id);
                    r.classList.add("active")
                       })
            })
        }), $(window).width() > 767)
 function a(e) {
  t.flyTo({
 center: e.geometry.coordinates,
zoom: 14,
	offset: [0, 100],  
        })
        console.log(e.properties.block);
    } else
    function a(e) {
        t.flyTo({
            center: e.geometry.coordinates,
            zoom: 14
        })
    }
 function n(e) {
        var a = document.getElementsByClassName("mapboxgl-popup");
        a[0] && a[0].remove();
        var n = new mapboxgl.Popup({
            closeOnClick: !1
        }).setLngLat(e.geometry.coordinates).setHTML('<a href="#"><span class="block"> ' + e.properties.title + "</span></a><h6>" + e.properties.constellation + "</h6><h6>" + e.properties.historical + '</h6><a href="#"><span class="block view-work">VIEW WORK</span></a>').addTo(t);
        $(window).width() > 767 && $("span.block").click(function() {
            $(".collapsed").length && i("left");
              $("#map .mapboxgl-popup").addClass("opacity-change");
        }), $(".filter-button, .mapboxgl-popup-close-button, .close").one("click", function() {
            n.remove(), $(".collapsed").length || i("left"), t.once("idle", () => {
                $(".marker.highlight").removeClass("highlight"), t.flyTo({
                   // center: e.geometry.coordinates,
                   center: [12.5674, 41.8719],
                    zoom: 2
                })
            })
        })
        $("span.numeral, .mapboxgl-popup-close-button").click(function(e) {
t.flyTo({
            center: [12.5674, 41.8719],
            zoom: 2
        })
 a[0] && a[0].remove();
 $(".marker.highlight").removeClass("highlight");
                });
    }
    t.on("idle", () => {
        $(".highlight")[0], $(".loader").fadeOut()
    })
}



$.ajax({
    url: "https://dl.dropbox.com/s/3ds0ujhq2yo2bs1/historical-map.geojson?dl=1",
    dataType: "json",
    success: function(e) {
        mapFunction(e), console.log(e)
  },
    error: function(e) {
        alert(e.statusText)
    }
});
var view = $("#tslshow"),
    move = "62px";
if ($(window).width() < 468) var sliderLimit = -15e3;
else if ($(window).width() < 767) sliderLimit = -3e4;
else sliderLimit = -2385;
$("#rightArrow").click(function() {
    parseInt(view.css("left")) >= sliderLimit && view.stop(!1, !0).animate({
        left: "-=" + move
    }, {
        duration: 400
    })
}), $("#leftArrow").click(function() {
    parseInt(view.css("left")) < 0 && view.stop(!1, !0).animate({
        left: "+=" + move
    }, {
        duration: 400
    })
});
var viewm = $("#tslshowm"),
    movem = "100vw";
$("#rightArrowm").click(function() {
    parseInt(viewm.css("left")) >= sliderLimit && viewm.stop(!1, !0).animate({
        left: "-=" + movem
    }, {
        duration: 400
    })
}), $("#leftArrowm").click(function() {
    parseInt(viewm.css("left")) < 0 && viewm.stop(!1, !0).animate({
        left: "+=" + movem
    }, {
        duration: 400
    })
}),  $("span.numeral.all").click(function() {
    $(".numeral").removeClass("highlight"), $(this).addClass("highlight"), $(".marker").show()
}), $("span.numeral.numi").click(function() {
    $(".numeral").removeClass("highlight"), $(this).addClass("highlight"), $(".marker").hide(), $(".marker.rn-1").show()
}), $("span.numeral.numii").click(function() {
    $(".numeral").removeClass("highlight"), $(this).addClass("highlight"), $(".marker").hide(), $(".marker.rn-2").show()
}), $("span.numeral.numiii").click(function() {
    $(".numeral").removeClass("highlight"), $(this).addClass("highlight"), $(".marker").hide(), $(".marker.rn-3").show()
}), $("span.numeral.numiv").click(function() {
    $(".numeral").removeClass("highlight"), $(this).addClass("highlight"), $(".marker").hide(), $(".marker.rn-4").show()
}), $("span.numeral.numv").click(function() {
    $(".numeral").removeClass("highlight"), $(this).addClass("highlight"), $(".marker").hide(), $(".marker.rn-5").show()
}); 
var check = function(){
$("#tslshow").append('<div id="unveil" class="tblock unmarked"><a href="#"><h6>∞</h6>BLOCK 39</a></div>');
}
setTimeout(check, 7000);

   




function AV1() {
 $('#marker-38-undefined')[0].click();
	
	var content = 'TO BE REVEALED: The precise geo-coordinates of Hal Finney at the time of the first BTC transaction from Satoshi Nakamoto. Never before publicly disclosed, R Alice would like to thank Fran Finney for her support. Robert Alice is a proud patron of ALS Assoc. Golden West Chapter.';
	var ele = '<span>' + content.split('').join('</span><span>') + '</span>';
setTimeout(
  function() 
  {
if ($(window).width() < 768) { 
                $('<div class="type-bg">').insertBefore('.history.mb');
		$('<h6 class="typer">').prependTo('.type-bg');
	} else {
$('<h6 class="typer">').appendTo('.mapboxgl-popup-content');
	}
	 
$(ele).hide().appendTo('.typer').each(function (i) {
    $(this).delay(50 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});
 }, 1500);  	
 var timer = setTimeout(function() {
AV2();
 	  }, 20000);

 $(".view-work").click(function(){
            clearTimeout(timer);
	
	 
	 
          $(".close").click(function(){
          	setTimeout(
  function() 
  {
    AV2(); 
   
  }, 1500); 
	
  });
    });
}

function AV2() {
	$( ".close" ).unbind();
	$( ".type-bg" ).remove();
 $('#marker-30-undefined')[0].click();
	var content = 'The precise location that Adam Back coded and developed Hash Cash in 1997. Hashcash was one of only a few select projects directly referenced by Satoshi Nakamoto in his Bitcoin whitepaper.';
	var ele = '<span>' + content.split('').join('</span><span>') + '</span>';
setTimeout(
  function() 
  {
	if ($(window).width() < 768) { 
		   $('<div class="type-bg">').insertBefore('.history.mb');
		$('<h6 class="typer">').prependTo('.type-bg');
	} else {
$('<h6 class="typer">').appendTo('.mapboxgl-popup-content');
	}
$(ele).hide().appendTo('.typer').each(function (i) {
    $(this).delay(50 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});
 }, 2000);  	
 var timer = setTimeout(function() {
AV3();
 	  }, 20000);

 $(".view-work").click(function(){
            clearTimeout(timer);
	
 $(".close").click(function(){
          	setTimeout(
  function() 
  {
    AV3(); 
   
  }, 1500); 
	
  });
    });
}

function AV3() {
	$( ".close" ).unbind();
	$( ".type-bg" ).remove();
 $('#marker-28-undefined')[0].click();
	var content = 'The precise location that Phil Zimmerman wrote the iconic encryption programme, Pretty Good Privacy. The early history of PGP, and the US states attempts at blocking the public’s use of military grade encryption, stands as a lightening rod for the cypherpunk community.';
	var ele = '<span>' + content.split('').join('</span><span>') + '</span>';
setTimeout(
  function() 
  {
if ($(window).width() < 768) { 
	   $('<div class="type-bg">').insertBefore('.history.mb');
		$('<h6 class="typer">').prependTo('.type-bg');
	} else {
$('<h6 class="typer">').appendTo('.mapboxgl-popup-content');
	}
	 
$(ele).hide().appendTo('.typer').each(function (i) {
    $(this).delay(50 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});
 }, 2000);  
	
 var timer = setTimeout(function() {
AV4();
 	  }, 20000);

 $(".view-work").click(function(){
            clearTimeout(timer);
	
 $(".close").click(function(){
          	setTimeout(
  function() 
  {
    AV4(); 
   
  }, 1500); 
	
  });
    });
}


function AV4() {
	$( ".close" ).unbind();
	$( ".type-bg" ).remove();
 $('a#listing-23-undefined')[0].click();
	var content = 'The epicentre of cryptographic and computational disruption, Hut 8 at Bletchley Park, the workplace of Alan Turing during the Second World War.';
	var ele = '<span>' + content.split('').join('</span><span>') + '</span>';
setTimeout(
  function() 
  {
if ($(window).width() < 768) { 
	   $('<div class="type-bg">').insertBefore('.history.mb');
		$('<h6 class="typer">').prependTo('.type-bg');
	} else {
$('<h6 class="typer">').appendTo('.mapboxgl-popup-content');
	}
	 
$(ele).hide().appendTo('.typer').each(function (i) {
    $(this).delay(50 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});
 }, 2000);  
 var timer = setTimeout(function() {
AV5();
 	  }, 20000);

 $(".view-work").click(function(){
            clearTimeout(timer);
         
  
       $(".close").click(function(){
          	setTimeout(
  function() 
  {
    AV5(); 
   
  }, 1500); 
	
  });
    });
}


function AV5() {
	$( ".close" ).unbind();
	$( ".type-bg" ).remove();
 $('a#listing-21-undefined')[0].click();
	var content = 'Namesaked university memoralising Louis Brandeis, author of The Right to Privacy (1890), and the single most important early advocate for the protection of the individual over the supervision of the state';
	var ele = '<span>' + content.split('').join('</span><span>') + '</span>';
setTimeout(
  function() 
  {
if ($(window).width() < 768) { 
	   $('<div class="type-bg">').insertBefore('.history.mb');
		$('<h6 class="typer">').prependTo('.type-bg');
	} else {
$('<h6 class="typer">').appendTo('.mapboxgl-popup-content');
	}
	 
$(ele).hide().appendTo('.typer').each(function (i) {
    $(this).delay(50 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});
 }, 2000);  
 var timer = setTimeout(function() {
AV6();
 	  }, 20000);

 $(".view-work").click(function(){
            clearTimeout(timer);
      
$(".close").click(function(){
          	setTimeout(
  function() 
  {
    AV6(); 
   
  }, 1500); 
	
  });
    });
}


function AV6() {
	$( ".close" ).unbind();
	$( ".type-bg" ).remove();
 $('a#listing-14-undefined')[0].click();
	var content = 'No architectural design captures the perils of extreme centralisation more than the Palace of Versailles, with the Sun King’s bedchamber sitting at the centre of all axes. 70 years following its creation, the French Revolutionaries stormed the palace and a republic was born.';
	var ele = '<span>' + content.split('').join('</span><span>') + '</span>';
setTimeout(
  function() 
  {
if ($(window).width() < 768) { 
	   $('<div class="type-bg">').insertBefore('.history.mb');
		$('<h6 class="typer">').prependTo('.type-bg');
	} else {
$('<h6 class="typer">').appendTo('.mapboxgl-popup-content');
	}
	 
$(ele).hide().appendTo('.typer').each(function (i) {
    $(this).delay(50 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});
 }, 2000);  
 var timer = setTimeout(function() {
AV7();
 	  }, 20000);

 $(".view-work").click(function(){
            clearTimeout(timer);
	
$(".close").click(function(){
          	setTimeout(
  function() 
  {
    AV7(); 
   
  }, 1500); 
	
  });
    });
}

function AV7() {
	$( ".close" ).unbind();
	$( ".type-bg" ).remove();
	 $('#Tour.play').removeClass('play')
 $('a#listing-1-undefined')[0].click();
var content = 'Ground zero for the development of libertarianism is Laozi - the semi-legendary Chinese philosopher and founder of much of its ideological framework, cast in rock at Mount Quingyuan.';
	var ele = '<span>' + content.split('').join('</span><span>') + '</span>';
setTimeout(
  function() 
  {
if ($(window).width() < 768) { 
	   $('<div class="type-bg">').insertBefore('.history.mb');
		$('<h6 class="typer">').prependTo('.type-bg');
	} else {
$('<h6 class="typer">').appendTo('.mapboxgl-popup-content');
	}
	 
$(ele).hide().appendTo('.typer').each(function (i) {
    $(this).delay(50 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});
 }, 2000);  
  setTimeout(() => { 
    $('.mapboxgl-popup-close-button')[0].click();
	  $( ".type-bg" ).remove();
    }, 20000);
	
   $('#Tour').removeClass('play').addClass('ready');
	
}


$(document).ready(function() {
    $(document).on('click', '#Tour.ready, #takeTour', function(event) {
        //event.preventDefault();
	 $('#Tour.ready').addClass('play').removeClass('ready');
	  //  if($('#Tour.play').length) {
       AV1();
	  //  }
    });
});
