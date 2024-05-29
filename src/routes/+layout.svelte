<script>
    import { page } from '$app/stores';
    import { base } from '$app/paths';
    import { onMount } from 'svelte';

    import InstagramIcon from '$lib/icons/instagram.svg';
    import GithubIcon from '$lib/icons/github.svg';
    import EmailIcon from '$lib/icons/email.svg';
    import ExpandIcon from '$lib/icons/expand.svg';
    import HamburgerHalfIcon from '$lib/icons/hamburger-half.svg';
    import CrossIcon from '$lib/icons/cross.svg';
    import PhoneIcon from '$lib/icons/phone.svg';

    function toggleFullScreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        }

        var elem = document.body;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        }
    }

    function openMainNavigationBar() {
        var mainNavigationBar = document.getElementById("mainNavigationBar");
        var mainNavigationBarBackground = document.getElementById("mainNavigationBarBackground");

        mainNavigationBar.style.right = 0;
        mainNavigationBarBackground.style.opacity = 1;
        mainNavigationBarBackground.style.zIndex = 1;
    }

    function closeMainNavigationBar() {
        var mainNavigationBar = document.getElementById("mainNavigationBar");

        mainNavigationBar.style.right = "-70%";
        mainNavigationBarBackground.style.opacity = 0;
        mainNavigationBarBackground.style.zIndex = -1;
    }

</script>

<div class="layout">
    <aside class="sidebar">
        <a class="home-icon" href="/">KY.</a>
        <div class="contact desktop-only">
            <a href="https://www.instagram.com/not_kok_young/" target="_blank">
                <img src={InstagramIcon} alt="instagram" />
            </a>
            <a href="https://github.com/hohkokyoung" target="_blank">
                <img src={GithubIcon} alt="github" />
            </a>
            <a href="mailto:kelvinhoh1520@hotmail.com">
                <img src={EmailIcon} alt="email" />
            </a>
        </div>
        <button class="expand-icon desktop-only" on:click={toggleFullScreen}>
            <img src={ExpandIcon} alt="expand" />
        </button>
    </aside>
    <button type="button" on:click={openMainNavigationBar} class="expand-navigation mobile-only">
        <img src={HamburgerHalfIcon} alt="hamburger half menu icon" />
    </button>
    <div id="mainNavigationBarBackground" class="main-navigation-bar-background mobile-only"></div>
    <nav id="mainNavigationBar" class="navigation-bar main-navigation-bar">
        <button type="button" on:click={closeMainNavigationBar} class="contract-navigation mobile-only">
            <img src={CrossIcon} alt="cross icon" />
        </button>
        <div class="navigation-bar-container">
            <a href="{base}/" on:click={closeMainNavigationBar} aria-current={$page.url.pathname == "/"}>Home</a>
            <a href="{base}/education" on:click={closeMainNavigationBar} aria-current={$page.url.pathname == "/education"}>Education</a>
            <a href="{base}/experience" on:click={closeMainNavigationBar} aria-current={$page.url.pathname == "/experience"}>Experience</a>
            <a href="{base}/portfolio" on:click={closeMainNavigationBar} aria-current={$page.url.pathname == "/portfolio"}>Portfolio</a>
            <a href="{base}/certification" on:click={closeMainNavigationBar} aria-current={$page.url.pathname == "/certification"}>Certification</a>
        </div>
        <div class="mobile-only footer">
            <button class="expand-icon" on:click={toggleFullScreen}>
                <img src={ExpandIcon} alt="expand icon" />
            </button>
            <div class="contact">
                <a href="https://www.instagram.com/not_kok_young/" target="_blank">
                    <img src={InstagramIcon} alt="instagram" />
                </a>
                <a href="https://github.com/hohkokyoung" target="_blank">
                    <img src={GithubIcon} alt="github" />
                </a>
                <a href="mailto:kelvinhoh1520@hotmail.com">
                    <img src={EmailIcon} alt="email" />
                </a>
                <a class="phone" href="tel:+60123429617">
                    <img src={PhoneIcon} alt="phone" />
                </a>
            </div>
        </div>
    </nav>
    <p class="phone-number desktop-only">+60 123429617</p>
    <slot />
</div>