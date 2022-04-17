function start(){
    $(".start").hide();
    $(".question").show();
}

$("#A").click(function(){
    let type = $("#type").val();
    $("#"+type).val(parseInt($("#"+type).val())+1);
});