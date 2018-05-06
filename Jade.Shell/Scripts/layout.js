﻿$(function () {

    $(".page-container-wrap").on("click", ".nav-wrap>ul>li>a", function () {

        if ($(this).parents("li").hasClass("open")) {
            $(this).siblings("ul").slideUp("", function () {
                $(this).parents("li").removeClass("open");
                $(this).parents("li").find(".arrow").removeClass("fa fa-angle-down");
                $(this).parents("li").find(".arrow").addClass("fa fa-angle-right");
            });
            // $(this).siblings("ul").slideUp();

        } else {

            $(this).parents("li").siblings("li").each(function () {
                var li = $(this);
                if ($(this).find("ul")) {
                    $(this).find("ul").slideUp("", function () {
                        li.removeClass("open");
                        li.find(".arrow").removeClass("fa fa-angle-down");
                        li.find(".arrow").addClass("fa fa-angle-right");
                    });
                } else {

                }
            });


            $(this).siblings("ul").slideDown("", function () {
                $(this).parents("li").addClass("open");
                $(this).parents("li").find(".arrow").removeClass("fa fa-angle-right");
                $(this).parents("li").find(".arrow").addClass("fa fa-angle-down");
            });
        }

    });
});

//设置指定的Id为选中状态
function activeLeftMenuItem(ItemId) {

    if (ItemId) {
        var item = $("#" + ItemId);
            item.addClass("active");
                item.parents("ul").siblings("a").find(".arrow").removeClass("fa fa-angle-right");
            } else {
                item.parent("li").addClass("open");
            }
        }
    }
}