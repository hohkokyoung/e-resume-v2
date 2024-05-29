import { c as create_ssr_component, a as add_attribute } from "../../chunks/ssr.js";
const profileLandscape = "/e-resume-v2/_app/immutable/assets/profile-landscape.C7JISX7R.jpg";
const profilePortrait = "/e-resume-v2/_app/immutable/assets/profile-portrait.Bgi8ZXk4.jpg";
const css = {
  code: "@import './default.css';",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import profileLandscape from '$lib/images/home/profile-landscape.jpg';\\n    import profilePortrait from '$lib/images/home/profile-portrait.jpg';\\n<\/script>\\n\\n<div class=\\"home-page\\">\\n    <img class=\\"profile-wallpaper desktop-only\\" src={profileLandscape} alt=\\"profile landscape\\" loading=\\"lazy\\" />\\n    <img class=\\"profile-wallpaper mobile-only\\" src={profilePortrait} alt=\\"profile portrait\\" loading=\\"lazy\\" />\\n    <div class=\\"profile\\">\\n        <h2 class=\\"profile-name\\">Kok <br class=\\"desktop-only\\" />Young</h2>\\n        <p class=\\"profile-title\\">Software Engineer</p>\\n    </div>\\n</div>\\n\\n<style>\\n    @import './default.css';\\n</style>"],"names":[],"mappings":"AAeI,QAAQ,eAAe"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="home-page" data-svelte-h="svelte-cyljrk"><img class="profile-wallpaper desktop-only"${add_attribute("src", profileLandscape, 0)} alt="profile landscape" loading="lazy"> <img class="profile-wallpaper mobile-only"${add_attribute("src", profilePortrait, 0)} alt="profile portrait" loading="lazy"> <div class="profile"><h2 class="profile-name">Kok <br class="desktop-only">Young</h2> <p class="profile-title">Software Engineer</p></div> </div>`;
});
export {
  Page as default
};
