(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return

        if (!document.body.classList.contains('body--opened-memu')) {
            document.body.classList.add('body--opened-memu')
        } else {
            document.body.classList.remove('body--opened-memu')
        }

    }
    
})()