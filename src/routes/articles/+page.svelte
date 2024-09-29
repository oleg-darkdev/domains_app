<script>
  import { ArticlesSection, HeaderLanding,  } from '$lib/widgets'
  import {BigArticleCard, BigNewsletterCard } from '$lib/entities';
  import {articlesList} from '$lib/shared/'
</script>

<HeaderLanding />

<main>
  <section class="section hero blog">
    <div class="container-default">
      <div class="hero-top-wrapper">
        <h1
          class="rodamas-font"
        >
          Blog
        </h1>
        <h1
          class="max-width-720px mg-top-56px mg-bottom-48px"
        >
          Articles &amp; resources
        </h1>
      </div>

      <BigArticleCard article={articlesList[0].articles[0]}/>
    </div>
  </section>


  <BigNewsletterCard />

  <ArticlesSection />
</main>

<!-- <Footer /> -->
