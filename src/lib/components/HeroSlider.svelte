<script lang="ts">
    import { Image } from '@unpic/svelte';
    import emblaCarouselSvelte from 'embla-carousel-svelte';
    import Autoplay from 'embla-carousel-autoplay';
    import Fade from 'embla-carousel-fade';

    interface HeroItem {
        id: string;
        message: string;
        link: string;
        imageLink: string;
        priority: boolean;
        date: string;
        eta: string;
        update: boolean;
        primeAccess: boolean;
        stream: boolean;
        translations: {
            en: string;
            fr: string;
            it: string;
            de: string;
            es: string;
            pt: string;
            ru: string;
            pl: string;
            uk: string;
            tr: string;
            ja: string;
            zh: string;
            ko: string;
            tc: string;
        };
        asString: string;
    }

    export let heroItems: HeroItem[] = [];
 
    let emblaApi: any;

    const getImageUrl = (slide: HeroItem) => {
        if (!slide.imageLink) {
            console.warn('No image link found for slide', slide);
            return 'https://api.mediathek.community/assets/default-backdrop.jpg';
        }
        return slide.imageLink;
    };

    const plugins = [
        Autoplay({
            delay: 8000,
            stopOnInteraction: false
        }),
        Fade()
    ];

    const options = {
        align: 'start' as const,
        slidesToScroll: 1,
        loop: true,
        containScroll: 'keepSnaps' as const,
        dragFree: false,
        skipSnaps: false,
        startIndex: 0
    };

    function onInit(event: CustomEvent<any>) {
        emblaApi = event.detail;
    }
</script>

<div class="hero-container relative w-full">
    <div
        class="embla absolute inset-0"
        use:emblaCarouselSvelte={{ options, plugins }}
        onemblaInit={onInit}
    >
        <div class="embla__container">
            {#each heroItems as slide (slide.id)}
                <div class="embla__slide">
                    <div class="relative h-full w-full">
                        <Image
                            src={getImageUrl(slide)}
                            alt={slide.message}
                            layout="fixed"
                            operations={{
                                bunny: {
                                    quality: 100
                                }
                            }}
                            class="hero-image absolute inset-0 h-full w-full"
                        />
                        <div class="gradient-overlay absolute inset-x-0 bottom-0"></div>
                        <div
                            class="text-overlay absolute bottom-4 left-4 text-white sm:bottom-8 sm:left-8 md:bottom-12 md:left-16 lg:bottom-16 lg:left-32"
                        >
                            <h1
                                class="mb-2 text-2xl leading-tight font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
                            >
                                {slide.message}
                            </h1>
                            <a href={slide.link}>
                                <button class="btn btn-primary">Details</button>
                            </a>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .hero-container {
        height: 85vh;
        max-height: 25vh;
        transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .embla {
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    .embla__container {
        display: flex;
        height: 100%;
        margin: 0;
        backface-visibility: hidden;
        width: 100%;
    }

    .embla__slide {
        flex: 0 0 100%;
        min-width: 100%;
        position: relative;
        height: 100%;
        margin: 0;
        padding: 0;
        transform: translateX(0);
        overflow: hidden;
    }

    .gradient-overlay {
        height: 75%;
        background: linear-gradient(
            to top,
            rgb(17, 17, 17) 0%,
            rgba(17, 17, 17, 0.987) 7.8%,
            rgba(17, 17, 17, 0.951) 15.2%,
            rgba(17, 17, 17, 0.896) 22.1%,
            rgba(17, 17, 17, 0.825) 28.7%,
            rgba(17, 17, 17, 0.741) 35.1%,
            rgba(17, 17, 17, 0.648) 41.2%,
            rgba(17, 17, 17, 0.55) 47.1%,
            rgba(17, 17, 17, 0.45) 52.9%,
            rgba(17, 17, 17, 0.352) 58.8%,
            rgba(17, 17, 17, 0.259) 64.9%,
            rgba(17, 17, 17, 0.175) 71.3%,
            rgba(17, 17, 17, 0.104) 77.9%,
            rgba(17, 17, 17, 0.049) 84.8%,
            rgba(17, 17, 17, 0.013) 92.2%,
            rgba(17, 17, 17, 0) 100%
        );
    }

    .text-overlay {
        text-align: left;
        width: calc(100% - 2rem);
        max-width: 100%;
    }

    @media (max-width: 480px) {
        .hero-container {
            height: 40vh;
            min-height: 250px;
            max-height: 50vh;
        }
        .gradient-overlay {
            height: 85%;
        }
    }

    @media (min-width: 481px) and (max-width: 640px) {
        .hero-container {
            height: 50vh;
            min-height: 300px;
            max-height: 60vh;
        }
        .gradient-overlay {
            height: 80%;
        }
    }

    @media (min-width: 641px) and (max-width: 768px) {
        .hero-container {
            height: 60vh;
            max-height: 75vh;
        }

        .gradient-overlay {
            height: 75%;
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        .hero-container {
            height: 70vh;
            max-height: 85vh;
        }

        .gradient-overlay {
            height: 75%;
        }
    }

    @media (min-width: 1025px) {
        .hero-container {
            height: 85vh;
            max-height: 55vh;
        }

        .gradient-overlay {
            height: 75%;
        }
    }
</style>