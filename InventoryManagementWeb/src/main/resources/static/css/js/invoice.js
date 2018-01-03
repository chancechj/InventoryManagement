function init() {
    $("#selectedProduct").chosen();
    $(".add-row").click(function () {
        var product = $("#selectedProduct").val();
        var quantity = $("#quantity").val();
        var markup = "<tr class='table_body'>"
            + "<td ><input class='delete_button' type='button' value='Delete' onclick='$(this).parent().parent().remove();'/></td>"
            + "<td>" + product + "</td>"
            + "<td>" + quantity + "</td>"
            + "</tr>";
        $("table tbody").append(markup);
    });
};
