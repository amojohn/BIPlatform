define(["url"],function(a){var b=Backbone.Model.extend({defaults:{},initialize:function(){},getCompAxis:function(b){var c=this;$.ajax({url:a.getCompAxis(this.get("reportId"),this.get("compId")),success:function(a){c.getTextAlignList(a.data,b)}})},getTextAlignList:function(b,c){var d=this;$.ajax({url:a.getTextAlignList(d.get("reportId"),d.get("compId")),type:"get",success:function(a){var d=a.data,e={options:{left:"居左",center:"居中",right:"居右"},indList:{}},f=b.yAxis;if(f)for(var g=0,h=f.length;h>g;g++){var i=f[g].name;e.indList[i]={},e.indList[i].caption=f[g].caption,e.indList[i].align=d&&d.indList&&d.indList.hasOwnProperty(i)?d.indList[i]:"left"}c(e)}})},saveTextAlignInfo:function(b,c){var d=this.get("compId"),e={areaId:d,textFormat:JSON.stringify(b)};$.ajax({url:a.getTextAlignList(this.get("reportId"),d),type:"POST",data:e,success:function(){c()}})}});return b});