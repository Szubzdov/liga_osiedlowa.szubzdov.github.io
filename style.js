<script>
    document.addEventListener("DOMContentLoaded", function () {
        const menuBtn = document.getElementById("menu_btn");
        const navList = document.getElementById("nav_list");

        menuBtn.addEventListener("click", function () {
            navList.classList.toggle("open");
        });
    });
</script>