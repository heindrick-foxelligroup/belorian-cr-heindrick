/* Do not edit this file to avoid losing your changes when upgrade the theme */
theme.footer={},theme.FooterSection=function(e){var t=this.wrap=$(e),o=t.attr("data-section-id"),n=this.obj="#"+o;0<$(".social-app").length&&$(".social-app").each(function(){var c=$(this),e="social_app_"+c.attr("data-block-id");BT.initScrollingWindowTriggerOnce(c,e,-270,function(){if(c.hasClass("social-app--fb")){var e=c.attr("data-app-id");if(e){var t="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId="+e;n=document,a="script",i="facebook-jssdk",s=n.getElementsByTagName(a)[0],n.getElementById(i)||((r=n.createElement(a)).id=i,r.src=t,s.parentNode.insertBefore(r,s))}}else{var o=document.createElement("script");o.src="//platform.twitter.com/widgets.js",o.charset="utf-8",o.async=!0,document.getElementsByTagName("head")[0].appendChild(o)}var n,a,i,r,s;setTimeout(function(){c.removeClass("loading")},1e3)})}),0<t.find(".pcol__items").length&&(Shopify.designMode?BT.addProductMetaData(t,!1):(t.addClass("load-product-columns-ajax"),BT.loadProductColumnsAjax(t))),theme.newsTerms&&0<t.find(".newsletter--footer").length&&t.find(".newsletter--footer").each(function(){BT.initNewsTerms("#"+$(this).attr("id"))}),theme.footer[n]="#"+t.attr("id")},theme.FooterSection.prototype=_.assignIn({},theme.FooterSection.prototype,{onLoad:function(e){BT.reLoadReview(this.wrap),BT.convertCurrencySilence(this.wrap.find("span.money"))},onUnload:function(){delete theme.footer[this.obj]}}),theme.sections.constructors.footer=theme.FooterSection;