$.sidebarMenu=function(e){var i=".sidebar-submenu";$(e).on("click","li a",function(e){var s=$(this),n=s.next();if(n.is(i)&&n.is(":visible"))n.slideUp(300,function(){n.removeClass("menu-open")}),n.parent("li").removeClass("active");else if(n.is(i)&&!n.is(":visible")){var a=s.parents("ul").first();a.find("ul:visible").slideUp(300).removeClass("menu-open");var l=s.parent("li");n.slideDown(300,function(){n.addClass("menu-open"),a.find("li.active").removeClass("active"),l.addClass("active")})}n.is(i)&&e.preventDefault()})};