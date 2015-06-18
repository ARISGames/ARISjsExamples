<script type='text/javascript'>
var ARIS = {};
ARIS.dataCacheEnabled = true;
ARIS.ready = function()
{
  document.getElementById("ready").innerHTML = "ready";
  ARIS.callService("triggers.getTriggersForGame",  {"game_id":1082}, ARIS.cache.player.auth, receivedTriggers);
}

function receivedTriggers(r)
{
  for(var i = 0; i < r.data.length; i++)
  {
    var t = r.data[i];
    t.latitude  = Number(t.latitude)+(Math.random()*0.2)-0.1;
    t.longitude = Number(t.longitude)+(Math.random()*0.2)-0.1;
    ARIS.callService("triggers.updateTrigger", t, ARIS.cache.player.auth, function(x){});
  }
}
</script>
<div id="ready" style="width:200px; height:1000px; word-wrap:break-word;">
not ready
</div>
