<script type='text/javascript'>
var auth = {
  "key":"pFAlT3tiXn5hsmhCp1uHDcOAKpDxM1u1xVdgOxoBKjJ2vQuLHOjbQXBrd5PPWaHj",
  "user_id":2
};

var ARIS = {};
//ARIS.dataCacheEnabled = true;
ARIS.ready = function()
{
  document.getElementById("ready").innerHTML = "ready";

  ARIS.callService("triggers.getTriggersForGame",  {"game_id":1082}, auth, receivedTriggers);

  /*
     var item_id = 38055;
     document.getElementById("content").innerHTML = ARIS.cache.getGameItemCount(item_id);
     ARIS.giveGameItemCount(item_id,1);
   */
}

function receivedTriggers(r)
{
  document.getElementById("ready").innerHTML += "recvd";
  for(var i = 0; i < r.data.length; i++)
  {
    var t = r.data[i];
    t.latitude  = Number(t.latitude)+(Math.random()*0.2)-0.1;
    t.longitude = Number(t.longitude)+(Math.random()*0.2)-0.1;
    ARIS.callService("triggers.updateTrigger", t, auth, function(x){document.getElementById("ready").innerHTML += "done";});
    document.getElementById("ready").innerHTML += "sent";
  }
}
</script>
<div style="height:5000px;">
<div id="ready">
not ready
</div>
<div id="content">
</div>
<div id="debug" style="word-wrap:break-word; width:200px; height:1000px;">
</div>
