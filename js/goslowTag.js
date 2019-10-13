/*
  goslowTag v0.1
	(c) 2017 Isaac Oluwatemilorun
	updated: 2017-01-01
	license: MIT
*/

(function ($) {
	$.fn.goslowTag = function () {
		$(this).wrap('<div class="goslowTag"><div class="tagUp"></div></div>').unwrap().before('<div class="tagUp"></div>').wrap('<div class="typehead"></div></div>');
		$(this).addClass("tagSelect");
		$(this).on("keyup", function () {
			var getString = $(this).val();
			$(this).parent().parent().find(".tagUp").css("width", $(this).css("width"));
			if (!getString.match(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?#([a-zA-Z0-9]+)/g)) {
				if (!getString.match(/#([a-zA-Z0-9_]+)#/g)) {
					getString = getString.replace(/#([a-zA-Z0-9_]+)/g, '<span class="hashtag">#$1</span>');
				} else {
					getString = getString.replace(/#([a-zA-Z0-9_]+)#([a-zA-Z0-9_]+)/g, '<span class="hashtag">#$1</span>');
				}
			}
			$(this).parent().parent().find(".tagUp").html(getString);
		});
		$(this).parent().prev().on('click', function () {
			$(this).parent().find(".tagSelect").focus();
		});
	};
})(jQuery);
