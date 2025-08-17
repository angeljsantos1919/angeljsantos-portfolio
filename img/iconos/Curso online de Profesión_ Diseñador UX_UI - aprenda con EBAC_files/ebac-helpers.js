//(function(a,m,o,c,r,m){a[m]={id:"55739",hash:"1ff7300d2677990955830635bd87352e4d8646284065bebd0d2b4738baf4a888",locale:"en",inline:true,setMeta:function(p){this.params=(this.params||[]).concat([p])}};a[o]=a[o]||function(){(a[o].q=a[o].q||[]).push(arguments)};var d=a.document,s=d.createElement('script');s.async=true;s.id=m+'_script';s.src='https://gso.amocrm.com/js/button.js?1630666958';d.head&&d.head.appendChild(s)}(window,0,'amoSocialButton',0,0,'amo_social_button'));

var style_rules = [];
style_rules.push(".amo-button-holder { z-index: 10000 !important; } ");
var style = '<style type="text/css">' + style_rules.join("\n") + "</style>";
$("head").append(style);

$(document).ready(function () {
  try {
    if (window.location.hostname === 'ebac.mx') {
      console.info('MX');
    } else {
      console.info('NON MX', window.location.hostname);
      $('a[href*="//ebac.mx"]').each(function () {
        var originalHref = $(this).attr('href');
        var newHref = originalHref.replace('ebac.mx', window.location.hostname);
        $(this).attr('href', newHref);
        // console.info(`$(this).href()`, $(this).attr('href'));
      });

      $('a[href="tel:+52 (55) 8526-5654"], a[href="tel:+525585265654"], .tn-elem__3174043041591535045654, .tn-elem__3174043041591535018286, a[href="https://wa.me/5215585265654"]').each(function () {
        $(this).hide();
      });
    }
  } catch (error) {
    console.error(error);
  }
});

(function () {
  const style = document.createElement('style');

  style.innerHTML = `
    .students-count-wrapper,
    .students-count-dot-wrapper {
        width: auto !important;
    }
  `;

  document.head.appendChild(style);
})();

var urlAlphabet = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW';

var customAlphabet = function customAlphabet(alphabet, size) {
  return function () {
    var id = '';
    // A compact alternative for `for (var i = 0; i < step; i++)`.
    var i = size;
    while (i--) {
      // `| 0` is more compact and faster than `Math.floor()`.
      id += alphabet[Math.random() * alphabet.length | 0];
    }
    return id;
  };
};

var nanoid = function nanoid() {
  var size = arguments.length <= 0 || arguments[0] === undefined ? 21 : arguments[0];

  var id = '';
  // A compact alternative for `for (var i = 0; i < step; i++)`.
  var i = size;
  while (i--) {
    // `| 0` is more compact and faster than `Math.floor()`.
    id += urlAlphabet[Math.random() * 64 | 0];
  }
  return id;
};

// window.client_order_id = nanoid();

function setClickCookie(name, value, days) {
  var date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  var expires = "; expires=" + date.toGMTString();
  document.cookie = name + "=" + value + expires + ";path=/";
  // document.cookie = name + "=" + value + ";path=/";
}
function getClickParam(p) {
  var match = RegExp('[?&]' + p + '=([^&]*)').exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
var gclid = getClickParam('gclid');
if (gclid) {
  setClickCookie('gclid', gclid, 360);
}
var fbclid = getClickParam('fbclid');
if (fbclid) {
  const epoch = new Date().valueOf();
  //console.info('fbclid', `fb.1.${epoch}.${fbclid}`);
  setClickCookie('fbclid', `fb.1.${epoch}.${fbclid}`, 360);
}

function getJsonFromUrl(url) {
  if (!url) url = location.href;
  var question = url.indexOf("?");
  var hash = url.indexOf("#");
  if (hash == -1 && question == -1) return {};
  if (hash == -1) hash = url.length;
  var query = question == -1 || hash == question + 1 ? url.substring(hash) :
    url.substring(question + 1, hash);
  var result = {};
  query.split("&").forEach(function (part) {
    if (!part) return;
    part = part.split("+").join(" "); // replace every + with space, regexp-free version
    var eq = part.indexOf("=");
    var key = eq > -1 ? part.substr(0, eq) : part;
    var val = eq > -1 ? decodeURIComponent(part.substr(eq + 1)) : "";
    var from = key.indexOf("[");
    if (from == -1) result[decodeURIComponent(key)] = val;
    else {
      var to = key.indexOf("]", from);
      var index = decodeURIComponent(key.substring(from + 1, to));
      key = decodeURIComponent(key.substring(0, from));
      if (!result[key]) result[key] = [];
      if (!index) result[key].push(val);
      else result[key][index] = val;
    }
  });
  return result;
}

function getCookie(name) {
  var value = `; ${document.cookie}`;
  var parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function getGAValue() {
  var match = document.cookie.match('(?:^|;)\\s*_ga=([^;]*)'),
    raw = match ? decodeURIComponent(match[1]) : null;
  if (raw) {
    match = raw.match(/(\d+\.\d+)$/)
  }
  return (match) ? match[1] : null;
}
function addAnyFormFields(counter, sendFormSource) {
  counter++;
  if (counter > 200) {
    return;
  }

  var formSelector = $('form:not(.js-fields-populated)');

  if (!formSelector || formSelector.length <= 0) {

    setTimeout(function () {
      addAnyFormFields(counter, sendFormSource);
    }, 500);
    return;
  }

  try {
    $.get('https://www.cloudflare.com/cdn-cgi/trace', function (data) {
      var ipList = data.match(/ip=.*/gm);
      formSelector.append('<input type="hidden" name="ClientIP" value="' + (ipList && ipList[0]) + '">');
    })
  } catch (e) {
    console.error(e);
  }

  try {
    formSelector.append('<input type="hidden" name="window_height" value="' + window.innerHeight + '">');
    formSelector.append('<input type="hidden" name="window_width" value="' + window.innerWidth + '">');
    formSelector.append('<input type="hidden" name="Referrer" value="' + document.referrer + '">');
    formSelector.append('<input type="hidden" name="PageUrl" value="' + window.location.toString() + '">');
    formSelector.append('<input type="hidden" name="UserTimestamp" value="' + (new Date()) + '">');
    formSelector.append('<input type="hidden" name="UserDate" value="' + (new Date().toLocaleDateString('pt-br') + ' ' + new Date().toLocaleTimeString('pt-br')) + '">');
    formSelector.append('<input type="hidden" name="UserAgent" value="' + window.navigator.userAgent + '">');


    // ga(function(tracker) {
    //   var clientId = tracker.get('clientId');
    // });

    try {
      var clientId = null;
      if (typeof ga === "function" && typeof ga.getAll === "function") {
        console.info('SCRIPT');
        clientId = ga.getAll()[0].get('clientId')
        formSelector.append('<input type="hidden" name="ga_cid" value="' + ga.getAll()[0].get('clientId') + '">');
      }

      var gaUserId = getGAValue();
      if (!clientId && gaUserId) {
        console.info('COOKIE');
        formSelector.append('<input type="hidden" name="ga_cid" value="' + gaUserId + '">');
      }
    } catch (e) {

    }

    var gaData = window.gaData;

    if (gaData && gaData["UA-165354511-2"] && gaData["UA-165354511-2"].experiments) {
      formSelector.append('<input class="ga_experiments" type="hidden" name="experiments" value="">');
      $('.ga_experiments').val(JSON.stringify(gaData["UA-165354511-2"].experiments));
    }

    var last_schedule_event = getCookie("last_schedule_event");
    if (last_schedule_event) {
      formSelector.append('<input type="hidden" name="last_schedule_event" value="' + last_schedule_event + '">');
    }

    var last_blog_article_visited = getCookie("last_blog_article_visited");
    if (last_blog_article_visited) {
      formSelector.append('<input type="hidden" name="last_blog_article_visited" value="' + last_blog_article_visited + '">');
    }

    var _fbp = getCookie("_fbp");
    if (_fbp) {
      formSelector.append('<input type="hidden" name="_fbp" value="' + _fbp + '">');
    }

    // if(window.client_order_id) {
    //   formSelector.append('<input type="hidden" name="client_order_id" value="'+window.client_order_id+'">');
    // }
  } catch (e) {
    console.error(e);
  }

  var currentUrl = window.location.toString(), currentParams = getJsonFromUrl(currentUrl), hiddenFields = [];
  if (typeof sbjs === "object" && sbjs.get && sbjs.get.current && sbjs.get.current.typ) {

    if (sbjs.get.current.src) {
      if (sbjs.get.current.src === '(none)') {
        currentParams['utm_source'] = 'not_set';
      } else {
        currentParams['utm_source'] = sbjs.get.current.src;
      }
    } else {
      currentParams['utm_source'] = 'not_set';
    }

    if (sbjs.get.current.mdm) {
      if (sbjs.get.current.mdm === '(none)') {
        currentParams['utm_medium'] = 'not_set';
      } else {
        currentParams['utm_medium'] = sbjs.get.current.mdm;
      }
    } else {
      currentParams['utm_medium'] = 'not_set';
    }

    if (sbjs.get.current.cmp) {
      if (sbjs.get.current.cmp === '(none)') {
        currentParams['utm_campaign'] = 'not_set';
      } else {
        currentParams['utm_campaign'] = sbjs.get.current.cmp;
      }
    } else {
      currentParams['utm_campaign'] = 'not_set';
    }

    if (sbjs.get.current.cnt) {
      if (sbjs.get.current.cnt === '(none)') {
        currentParams['utm_content'] = 'not_set';
      } else {
        currentParams['utm_content'] = sbjs.get.current.cnt;
      }
    } else {
      currentParams['utm_content'] = 'not_set';
    }

    if (sbjs.get.current.trm) {
      if (sbjs.get.current.trm === '(none)') {
        currentParams['utm_term'] = 'not_set';
      } else {
        currentParams['utm_term'] = sbjs.get.current.trm;
      }
    } else {
      currentParams['utm_term'] = 'not_set';
    }

    if (sbjs.get.session.cpg) {
      if (sbjs.get.session.cpg === '(none)') {
        currentParams['current_page'] = 'not_set';
      } else {
        currentParams['current_page'] = sbjs.get.session.cpg;
      }
    } else {
      currentParams['current_page'] = 'not_set';
    }

    if (sbjs.get.current_add.rf) {
      if (sbjs.get.current_add.rf === '(none)') {
        currentParams['referrer_url'] = 'not_set';
      } else {
        currentParams['referrer_url'] = sbjs.get.current_add.rf;
      }
    } else {
      currentParams['referrer_url'] = 'not_set';
    }

    if (sbjs.get.current_add.ep) {
      if (sbjs.get.current_add.ep === '(none)') {
        currentParams['entrance_point'] = 'not_set';
      } else {
        currentParams['entrance_point'] = sbjs.get.current_add.ep;
      }
    } else {
      currentParams['entrance_point'] = 'not_set';
    }
    if (sbjs.get.udata.vst) {
      if (sbjs.get.udata.vst === '(none)') {
        currentParams['visits_count'] = 'not_set';
      } else {
        currentParams['visits_count'] = sbjs.get.udata.vst;
      }
    } else {
      currentParams['visits_count'] = 'not_set';
    }

  }

  if (currentParams && Object.keys(currentParams).length > 0) {
    Object.keys(currentParams).filter(key => key != 'fbclid').map(key => {
      hiddenFields[key] = currentParams[key];
      formSelector.append('<input type="hidden" name="' + key + '" value="' + currentParams[key] + '">');
    });
  }

  if (currentParams && currentParams['gclid']) {// todo
  } else {
    var gclid = getCookie("gclid");
    if (gclid) {
      formSelector.append('<input type="hidden" name="gclid" value="' + gclid + '">');
    }
  }

  if (currentParams && currentParams['fbclid']) {
    var fbclid = getCookie("fbclid");
    if (fbclid) {
      formSelector.append('<input type="hidden" name="fbclid" value="' + fbclid + '">');
    }
  } else {
    var fbclid = getCookie("fbclid");
    if (fbclid) {
      formSelector.append('<input type="hidden" name="fbclid" value="' + fbclid + '">');
    }
  }

  try {
    if (currentParams && currentParams['promo']) {
      formSelector.find('input[name="promo_code"]:not(.t-input_has-content):not(.js-coupon-populated)').val(currentParams['promo']).addClass('t-input_has-content').addClass('js-coupon-populated');
    }
  } catch (e) {
    console.error(e);
  }

  formSelector.addClass('js-fields-populated');
  try {
    var source_id = parseInt($('[name=source_id]')[0].value);
    if (!sendFormSource && source_id && [1, 8, 33, 34, 48, 66, 87, 88, 59, 58].indexOf(source_id) === -1) {
      if (dataLayer) dataLayer.push({ 'event': 'CoursePageView', 'source_id': source_id });
      sendFormSource = true;
    }
  } catch (e) {
    // console.info(e);
  }

  setTimeout(function () {
    addAnyFormFields(counter, sendFormSource);
  }, 500);
}

$(document).ready(function () {
  if (typeof sbjs === "object" && typeof sbjs.init === "function") {
    sbjs.init();
  } else {
    console.info(`no sbjs`);
  }
  var counter = 1;
  var sendFormSource = false;
  addAnyFormFields(counter, sendFormSource);
});

$(document).ready(function () {
  try {
    $("a:contains('+52 (55) 8526-5654')").each(function (index) {
      $(this).text('+52 (55) 9225-2629');
      $(this).attr('href', 'tel:+525592252629');
    })
    $("a:contains('+52 55 8526-5654')").each(function (index) {
      $(this).text('+52 55 9225-2629');
      $(this).attr('href', 'tel:+525592252629');
    })
    $("a:contains('+52 1 55 8526-5654')").each(function (index) {
      $(this).text('+52 55 9225-2629');
      $(this).attr('href', 'https://wa.me/525592252629');
    })
  } catch (e) {

  }

  $('.students-count-dot-wrapper .tn-atom').html('145 mil');
  $('.students-count-wrapper .tn-atom').html('145 mil');

  var monthName = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
  ];

  function endOfWeek(date) {
    var lastday = date.getDate() - (date.getDay() - 1) + 7;
    return new Date(date.setDate(lastday));
  }

  var nextEndDate = endOfWeek(new Date());
  var nextEndDateText = nextEndDate.getDate() + ' de ' + monthName[nextEndDate.getMonth()];
  //$('div[field=tn_text_1591544363643]').html(nextEndDateText);
  $('.course-start-date-wrapper .tn-atom').html(nextEndDateText);
  $('.course-start-date').html(nextEndDateText);


  function nextDate(dayIndex) {
    var today = new Date();
    today.setDate(today.getDate() + (dayIndex - 1 - today.getDay() + 7) % 7 + 1);
    return today;
  }

  try {
    var day = (new Date).getDay();
    var nextSaleEndDate = null;
    var nextSaleEndDateText = null;

    // Monday-Wednesday
    // Thursday-Friday
    // Saturday-Sunday
    switch (day) {
      case 1: nextSaleEndDate = nextDate(3); break; // MON
      case 2: nextSaleEndDate = nextDate(3); break; // TUE
      case 3: nextSaleEndDate = new Date(); break; // WED
      case 4: nextSaleEndDate = nextDate(5); break; // THU
      case 5: nextSaleEndDate = new Date(); break; // FRI
      case 6: nextSaleEndDate = nextDate(0); break; // SAT
      case 0: nextSaleEndDate = new Date(); break; // SUN
    }

    // Tuesday-Friday
    // Saturday-Monday
    // switch (day) {
    //   case 0: nextSaleEndDate = nextDate(1); break; // SUN
    //   case 1: nextSaleEndDate = new Date(); break; // MON
    //   case 2: nextSaleEndDate = nextDate(5); break; // TUE
    //   case 3: nextSaleEndDate = nextDate(5); break; // WED
    //   case 4: nextSaleEndDate = nextDate(5); break; // THU
    //   case 5: nextSaleEndDate = new Date(); break; // FRI
    //   case 6: nextSaleEndDate = nextDate(1); break; // SAT
    // }

    // if(day < 2 || day > 5) {
    //   nextSaleEndDate = nextDate(2);
    // } else {
    //   nextSaleEndDate = nextDate(5);
    // }

    var nextSaleEndDateText = 'hasta el <strong>' + nextSaleEndDate.getDate() + ' de ' + monthName[nextSaleEndDate.getMonth()] + '</strong>';
    // console.info('nextSaleEndDate', nextSaleEndDateText);

    $('.course-start-date-wrapper-2 .tn-atom').html(nextSaleEndDateText);
    $('.course-start-date-2').html(nextSaleEndDateText);
    $('.ebac-timer-date-previous .tn-atom').html('<strong>' + nextSaleEndDate.getDate() + ' de ' + monthName[nextSaleEndDate.getMonth()] + '</strong>');
    $('.start-date-wrap div').html(nextSaleEndDateText);

  } catch (e) {
    console.info(e);
  }
});

$(document).ready(function () {
  var paymentButtonSelector = '.thankyou-payment-button-wrapper a';
  if ($(paymentButtonSelector).length > 0) {

    if (window.location.hostname !== 'ebac.mx') {
      $(paymentButtonSelector).hide();
      return;
    }

    var originalText = $(paymentButtonSelector).text();
    var originalHref = $(paymentButtonSelector).attr("href");
    try {
      var currentUrl = window.location.toString(), currentParams = getJsonFromUrl(currentUrl);
      if (currentParams && currentParams.context) {
        if (typeof dataLayer !== "undefined") dataLayer.push({ 'client_order_id': currentParams.context });
        $(paymentButtonSelector).addClass('disabled-button');
        $(paymentButtonSelector).text('Generación de pagos...');
        var counter = 1;

        function getBillingLink() {
          counter++;

          if (counter > 1000) {
            $(paymentButtonSelector).removeClass('disabled-button');
            $(paymentButtonSelector).text(originalText);
            $(paymentButtonSelector).attr("href", originalHref);
            return;
          }

          var paymentLink = $.ajax({
            url: 'https://billing.ebac.app/offer/detail-with-links/' + currentParams.context,
            method: "GET",
            dataType: "json",
          }).always(function (data) {
            if (data && data.result && data.result.links && data.result.links[0] && data.result.links[0].originalLink
            ) {
              $(paymentButtonSelector).removeClass('disabled-button');
              $(paymentButtonSelector).text(originalText);
              $(paymentButtonSelector).attr("href", data.result.links[0].originalLink);

              if (data && data.result && dataLayer) {
                var result = data.result;
                var product = result.products && result.products[0];

                var orderData = {
                  event: 'Order',
                  source_id: result.sourceId,
                  client_order_id: currentParams.context,
                  promocode: result.appliedCoupon,
                  total_price: result.total || 0,
                };

                if (product && product.studentEmail) {
                  orderData.user_email = product.studentEmail
                }
                if (product && product.studentPhone) {
                  orderData.user_phone = product.studentPhone
                }
                if (product && product.courseName) {
                  orderData.course_name = product.courseName
                  orderData.product_name = product.courseName
                }

                dataLayer.push(orderData);
              }

              if (window.$meter) {
                try {
                  window.$meter.event({ name: 'customOrder' });
                } catch (e) {
                  console.error(e);
                }
              }

            } else {
              setTimeout(function () { getBillingLink(); }, 2000);
            }
          });
        }
        getBillingLink();

        /*
        if(currentParams && currentParams.aws) {
        } else {
          function getLink(){
            counter++;

            if(counter > 100) {
              $(paymentButtonSelector).removeClass('disabled-button');
              $(paymentButtonSelector).text(originalText);
              $(paymentButtonSelector).attr("href", originalHref);
              return;
            }

            var paymentLink = $.ajax({
              url: 'https://ebac.mx/api/subscriptions/getPaymentLink',
              data: {
                context: currentParams.context
              },
              method: "POST",
              dataType: "json",
            }).always(function(data){
              if(!data || !data.payment_link) {
                setTimeout(function(){getLink();}, 2000);
              } else {
                $(paymentButtonSelector).removeClass('disabled-button');
                $(paymentButtonSelector).text(originalText);
                $(paymentButtonSelector).attr("href", data.payment_link);
              }
            });
          }
          getLink();
        }
        */
      }
    } catch (error) {
      console.error(error);
      $(paymentButtonSelector).removeClass('disabled-button');
      $(paymentButtonSelector).text(originalText);
      $(paymentButtonSelector).attr("href", originalHref);
    }
  }
});

$(document).ready(function () {
  try {
    let timerEnd = null;
    function nextTimerDate(dayIndex) {
      let today = new Date();
      today.setDate(today.getDate() + (dayIndex - 1 - today.getDay() + 7) % 7 + 1);
      return today;
    }

    // Monday-Wednesday
    // Thursday-Friday
    // Saturday-Sunday
    switch ((new Date).getDay()) {
      case 1: timerEnd = nextTimerDate(3); break;// MON
      case 2: timerEnd = nextTimerDate(3); break;// TUE
      case 3: timerEnd = new Date(); break;// WED
      case 4: timerEnd = nextTimerDate(5); break;// THU
      case 5: timerEnd = new Date(); break;// FRI
      case 6: timerEnd = nextTimerDate(0); break;// SAT
      case 0: timerEnd = new Date(); break;// SUN
    }

    // Tuesday-Friday
    // Saturday-Monday
    // switch ((new Date).getDay()) {
    //   case 0: // SUN
    //   case 6: timerEnd = nextTimerDate(1); break; // SAT
    //   case 1: // MON
    //   case 5: timerEnd = new Date(); break; // FRI
    //   case 2: // TUE
    //   case 3: // WED
    //   case 4: timerEnd = nextTimerDate(5); break; // THU
    // }

    timerEnd.setDate(timerEnd.getDate() + 1);
    timerEnd.setHours(0, 0, 0, 0);

    let $days = $('.ebac-timer-days-wrapper').length ? $('.ebac-timer-days-wrapper').find('.tn-atom') : false,
      $hours = $('.ebac-timer-hours-wrapper').length ? $('.ebac-timer-hours-wrapper').find('.tn-atom') : false,
      $minutes = $('.ebac-timer-minutes-wrapper').length ? $('.ebac-timer-minutes-wrapper').find('.tn-atom') : false,
      $seconds = $('.ebac-timer-seconds-wrapper').length ? $('.ebac-timer-seconds-wrapper').find('.tn-atom') : false,
      tzScript = (timerEnd.getTimezoneOffset() / 60) - 6,
      diffTZ = tzScript <= 0 ? true : false,
      offsetTZUser = diffTZ ? 0 - tzScript : 0 + tzScript;
    function showTimer() {
      return diffTZ ? (Date.parse(timerEnd) - (Date.now() - offsetTZUser * 60 * 60 * 1000)) / 1000 > 0 : (Date.parse(timerEnd) - (Date.now() + offsetTZUser * 60 * 60 * 1000)) / 1000 > 0
    }

    if (showTimer()) {
      setInterval(timer, 1e3);
      timer();

      function timer() {
        let timeLeft = diffTZ ? parseInt((Date.parse(timerEnd) - (Date.now() - offsetTZUser * 60 * 60 * 1000)) / 1000) : parseInt((Date.parse(timerEnd) - (Date.now() + offsetTZUser * 60 * 60 * 1000)) / 1000),
          days = Math.floor(timeLeft / 86400),
          hours = Math.floor((timeLeft - (days * 86400)) / 3600),
          minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60),
          seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        let hoursB = hours,
          minutesB = minutes,
          secondsB = seconds;
        if (hours < "10") {
          hours = "0" + hours;
        }
        if (minutes < "10") {
          minutes = "0" + minutes;
        }
        if (seconds < "10") {
          seconds = "0" + seconds;
        }
        if (!showTimer()) {
          days = hours = minutes = seconds = hoursB = minutesB = secondsB = 0;
        }
        if ($days) $days.text(days);
        if ($hours) $hours.text(hours);
        if ($minutes) $minutes.text(minutes);
        if ($seconds) $seconds.text(seconds);
      }
    } else {
      if ($days) $days.text('0');
      if ($hours) $hours.text('00');
      if ($minutes) $minutes.text('00');
      if ($seconds) $seconds.text('00');
    }

  } catch (e) {
    console.info(e);
  }
});
