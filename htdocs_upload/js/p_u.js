$(function(){$('#rating a').each(function(){$(this).click(function(){var c=parseInt($(this).attr('title'));sliderConfirm({title:'你确定要给'+$('h3').html()+'评<span style="color:red">'+c+'</span>分吗？',action:function(){var s=0;$.ajax({url:'/rating',async:false,type:'post',data:{did:$('#did').val(),score:c}}).success(function(a){s=parseInt(a)});return s},callback:function(a,b){if(b==1){a.css('color','#007b09');a.html('投票成功')}else{a.css('color','red');if(b==2){a.html('一天只能对ta评分一次哦!')}else{a.html('投票失败')}}}})})})});