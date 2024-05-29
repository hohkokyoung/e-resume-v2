<script>
    import profileLandscape from '$lib/images/home/profile-landscape.jpg';
    import profilePortrait from '$lib/images/home/profile-portrait.jpg';
</script>

<div class="home-page">
    <img class="profile-wallpaper desktop-only" src={profileLandscape} alt="profile landscape" loading="lazy" />
    <img class="profile-wallpaper mobile-only" src={profilePortrait} alt="profile portrait" loading="lazy" />
    <div class="profile">
        <h2 class="profile-name">Kok <br class="desktop-only" />Young</h2>
        <p class="profile-title">Software Engineer</p>
    </div>
</div>

<style>
    @import './default.css';
</style>