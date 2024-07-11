<script>
    import ExpandIcon from "$lib/icons/expand-carousel.svg";
    import CertificateIcon from "$lib/icons/certificate.svg";
    import CrossIcon from "$lib/icons/cross.svg";
    import ArrowLeftIcon from "$lib/icons/arrow-left.svg";
    import ArrowRightIcon from "$lib/icons/arrow-right.svg";
    import { beforeUpdate, afterUpdate, onMount } from 'svelte';
    import { page } from '$app/stores';

    var isMobile;
    var splide, modalSplide, modalThumbnailSplide;

    function checkOverflowAndApplyMargin() {
        const chapterContentListContainer = document.getElementById('chapterContentListContainer');
        const chapterSummaryContainer = document.getElementById('chapterSummaryContainer');
        const chapterListContainer = document.getElementById('chapterListContainer');

        if (!isMobile.matches) {
            if (chapterContentListContainer.scrollHeight > chapterContentListContainer.clientHeight || chapterContentListContainer.scrollWidth > chapterContentListContainer.clientWidth) {
                updateNodeMarginRight(chapterSummaryContainer, "3rem");
                updateNodeMarginRight(chapterListContainer, "3rem");
            } else {
                updateNodeMarginRight(chapterSummaryContainer, "0");
                updateNodeMarginRight(chapterListContainer, "0");
            }
        } else {
            updateNodeMarginRight(chapterSummaryContainer, "0");
            updateNodeMarginRight(chapterListContainer, "0");
        }
    }   

    function updateNodeMarginRight(node, value) {
        if (node) {
            node.style.marginRight = value
        }
    }

    function handleSplide() {
        try {
            splide = new Splide(".image-carousel-splide", {
                pagination: false,
                arrows: false,
                breakpoints: {
                    600: {
                        perPage: 3,
                        gap: 20,
                        fixedHeight: 60,
                    },
                    1024: {
                        perPage: 3,
                        gap: 20,
                        fixedHeight: 100,
                    }
                }
            });

            modalSplide = new Splide(".modal-splide", {
                perPage: 1,
                pagination: true,
                arrows: false,
            });

            modalThumbnailSplide = new Splide(".modal-thumbnail-splide", {
                fixedWidth : 100,
                fixedHeight: 60,
                gap: 10,
                pagination: false,
                isNavigation: true,
            });
            
            splide.sync(modalSplide);
            !isMobile && splide.sync(modalThumbnailSplide);
            splide.mount();
            modalSplide.mount();
            !isMobile && modalThumbnailSplide.mount();
        } catch(error) {}
    }

    onMount(() => {
        isMobile = window.matchMedia("only screen and (max-width: 1024px)");

        window.addEventListener("resize", checkOverflowAndApplyMargin);

        return(() => {
            window.removeEventListener("resize", checkOverflowAndApplyMargin);
        });
    })

    beforeUpdate(() => {
        // isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    });

    afterUpdate(() => {
        checkOverflowAndApplyMargin();

        handleSplide();
    });

    function openModal(index) {
        if (index) modalSplide.go(index);
        
        var modal = document.getElementById("modal");
        modal.style.opacity = 1;
        modal.style.zIndex = 3;
    }

    function closeModal() {
        var modal = document.getElementById("modal");
        modal.style.opacity = 0;
        modal.style.zIndex = -1;
    }

	export let data;
</script>

<section class="chapter">
    <div class="chapter-image-container">
        <div>
            {#if data.chapter.content.images.length > 1}
            <div class="splide image-carousel-splide" role="group" aria-label="Splide Basic HTML Example">
                <div class="splide__track">
                      <div class="splide__list">
                        {#each data.chapter.content.images as image, index}
                            <button type="button" on:click={() => isMobile.matches && openModal(index)} class="splide__slide">
                                <img src={image} alt={data.chapter.slug + "-" + index + " image"} />
                            </button>
                        {/each}
                      </div>
                </div>
                <button type="button" on:click={openModal}>
                    <img id="expandImageCarousel" class="expand-image-carousel" src={ExpandIcon} alt="expand carousel icon" />
                </button>
            </div>
            {:else}
                <img src={data.chapter.content.images[0]} alt={data.chapter.slug + " logo"} />
            {/if}
        </div>
    </div>
    <main class="chapter-content-container">
        <h1 class="chapter-content-title">{data.chapter.content.title}</h1>
        {#if data.chapter.content.date !== null}
            <h2 class="chapter-content-date">{data.chapter.content.date}</h2>
        {/if}
        {#if data.chapter.content.role !== null}
            <h3 class="chapter-content-role">{data.chapter.content.role}</h3>
        {/if}
        <hr class="separator" />
        <div class="chapter-content-list-container" id="chapterContentListContainer">
            {#if data.chapter.content.category?.slug !== null}
                <div class="chapter-category">
                    <p>Projects</p>
                    <span class="chapter-category-dot"></span>
                    <div class="navigation-bar chapter-category-navigation-bar">
                        {#each data.chapter.categoryNavigations as chapterCategoryNavigation}
                            <a href={$page.url.pathname + "?chapterSlug=" + data.chapter.slug + "&categorySlug=" + chapterCategoryNavigation.slug} aria-current={chapterCategoryNavigation.slug === data.chapter.content.category.slug}>{chapterCategoryNavigation.title}</a>
                        {/each}
                    </div>
                </div>
            {/if}
            {#if data.chapter.content.category?.summary !== undefined}
                <div class="chapter-summary" id="chapterSummaryContainer">
                    <p>{data.chapter.content.category.summary}</p>
                </div>
            {/if}
            {#if data.chapter.content.category?.file !== undefined}
                <button type="button" on:click={openModal} class="chapter-file">
                    <img src={CertificateIcon} alt="certificate icon" />
                </button>
            {/if}
            {#if data.chapter.content.category.lists.length > 0}
                <ul class="chapter-list" id="chapterListContainer">
                    {#each data.chapter.content.category.lists as list}
                        <li>{list}</li>
                    {/each}
                </ul>
            {/if}
        </div>
    </main>
</section>
<div class="navigation-bar chapter-navigation-bar">
    {#each data.chapter.navigations as chapterNavigation (chapterNavigation.slug)}
        <a href={$page.url.pathname + "?chapterSlug=" + chapterNavigation.slug} aria-current={chapterNavigation.slug === data.chapter.slug}>{chapterNavigation.title}</a>
    {/each}
</div>

<div id="modal" class="modal">
  <div class="modal-content">
    <button class="close" type="button" on:click={closeModal}>
        <img src={CrossIcon} alt="cross icon" />
    </button>
    {#if data.chapter.content.category?.file}
        <div class="modal-certificate">
            <img src={data.chapter.content.category.file} alt={data.chapter.slug + " certificate"} />
        </div>
    {/if}
    {#if data.chapter.content.images.length > 1}
        <div class="splide modal-splide">
            <div class="splide__track">
                <div class="splide__list">
                    {#each data.chapter.content.images as image, index}
                        <img class="splide__slide" src={image} alt={data.chapter.slug + "-" + index + " image"} />
                    {/each}
                </div>
            </div>
        </div>
        <div class="splide modal-thumbnail-splide">
            <div class="splide__track">
                <div class="splide__list">
                    {#each data.chapter.content.images as image, index}
                        <img class="splide__slide" src={image} alt={data.chapter.slug + "-" + index + " image"} />
                    {/each}
                </div>
            </div>
            <div class="splide__arrows">
                <button class="splide__arrow splide__arrow--prev">
                    <img class="arrow-icon" src={ArrowLeftIcon} alt="arrow left icon" />
                </button>
                <button class="splide__arrow splide__arrow--next">
                    <img class="arrow-icon" src={ArrowRightIcon} alt="arrow right icon" />
                </button>
            </div>
        </div>
    {/if}
  </div>
</div>

<style>
    @import './default.css';
</style>




