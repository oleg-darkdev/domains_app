<script>
    import { RelatedArticles, HeroArticle } from '$lib/widgets';
  import { FulWidthBanner} from '$lib/entities';
  import {Blockquote, ArticleDivider, MediumImgBlock} from '$lib/shared/'


const imgData = {
  figcaption: 'Lorem ipsum dolor sit amet, consectetur adipiscing.', img: '/images/scenarios/promo/bTLD.svg', alt: 'Lorem ipsum dolor'
}
</script>

<article>
<HeroArticle />

<section>
  <FulWidthBanner />
  <div class="container-default w-container">
    <div
      class="container-blog-post-content"
    >
      <div class="w-richtext">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
          arcu enim urna adipiscing praesent velit viverra sit semper
          lorem eu cursus vel hendrerit elementum morbi curabitur etiam
          nibh justo, lorem aliquet donec sed sit mi dignissim at ante
          massa mattis.
        </p>

        <ol start="" role="list">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit .
          </li>
        </ol>

        <ArticleDivider />

        <h3>h3 - Lorem ipsum dolor sit amet, consectetur adipiscing.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
          arcu enim urna adipiscing praesent velit viverra sit semper
          lorem eu cursus vel hendrerit elementum morbi curabitur etiam
          nibh justo, lorem aliquet donec sed sit mi dignissim at ante
          massa mattis.‍
        </p>

         <MediumImgBlock data={imgData}/>

        <ArticleDivider />

        <h4>h4 - Lorem ipsum dolor sit amet, consectetur adipiscing.</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
          arcu enim urna adipiscing praesent velit viverra sit semper
          lorem eu cursus vel hendrerit elementum morbi curabitur etiam
          nibh justo, lorem aliquet donec sed sit mi dignissim at ante
          massa mattis.‍
        </p>

        <ul role="list">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
            arcu enim urna adipiscing praesent.
          </li>
          <li>
            Adipiscing elit ut aliquam purus sit amet viverra suspendisse
            potenti
          </li>
          <li>
            Mauris commodo quis imperdiet massa tincidunt nunc pulvinar
          </li>
          <li>
            Adipiscing elit ut aliquam purus sit amet viverra suspendisse
            potenti
          </li>
        </ul>

        <ArticleDivider />

        <h5>h5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
          arcu enim urna adipiscing praesent</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
          arcu enim urna adipiscing praesent velit viverra sit semper
          lorem eu cursus vel hendrerit elementum morbi curabitur etiam
          nibh justo, lorem aliquet donec sed sit mi dignissim at ante
          massa mattis.‍‍
        </p>

        <Blockquote text={`“Nisi quis eleifend quam adipiscing vitae aliquet bibendum enim
facilisis gravida neque velit euismod in pellentesque”`}/>



        <h6>h6- Lorem ipsum dolor sit amet, consectetur</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
          arcu enim urna adipiscing praesent velit viverra sit semper
          lorem eu cursus vel hendrerit elementum morbi curabitur etiam
          nibh justo, lorem aliquet donec sed sit mi dignissim at ante
          massa mattis.‍‍
        </p>
      </div>
    </div>
  </div>
</section>

</article>

<RelatedArticles />
