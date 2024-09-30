<script>
  import { RoadmapCard } from '$lib/entities';
  import { roadmap } from '$lib/shared';
</script>

<section class="section mb-40">
  <div class="container-default w-container">
    <div class="max-w-4xl text-center">
      <h1 class="rodamas-font small">Roadmap</h1>
      <h2 class="display-2">Take a look at <span><img src="/images/logo_color.svg" class='h-12' alt=""></span> roadmap</h2>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.      </p>
    </div>

    <div id='roadmap' class="roadmap-wrapper">
      <div class="roadmap-progress-wrapper">
        <div class="progress-circle"></div>
        <div class="progress-line"></div>
        <div class="progress-circle"></div>
        <div class="progress-line"></div>
        <div class="progress-circle"></div>
        <div class="progress-line"></div>
        <div class="progress-circle"></div>
      </div>

      <div class="w-layout-grid grid-road-map-cards">
        <RoadmapCard point={roadmap[0]}/>
        <div class="grid-hide-block"></div>
        <div class="grid-hide-block"></div>
        <RoadmapCard point={roadmap[1]}/>

        <RoadmapCard point={roadmap[2]}/>
        <div class="grid-hide-block"></div>
        <div class="grid-hide-block"></div>

        <RoadmapCard point={roadmap[3]}/>
      </div>
    </div>
  </div>
</section>


<style>

.progress-circle {
  width: 32px;
  height: 32px;
  border-style: solid;
  border-width: 4px;
  border-color: #fff;
  border-radius: 50%;
  background-color: #7a5ca3;
}

.progress-line {
  width: 4px;
  height: 100%;
  /* 261px */
  min-height: 500px;
  margin-top: 24px;
  margin-bottom: 24px;
  background-color: #7a5ca3;
}

.roadmap-progress-wrapper {
  position: absolute;
  left: 0px;
  right: 0px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 132px;
  margin-right: auto;
  margin-left: auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

@media screen and (max-width: 767px) {
  .grid-road-map-cards {
    margin-top: 42px;
    margin-left: 46px;
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
  }

  .progress-circle {
    border-width: 3px;
  }

  .roadmap-progress-wrapper {
    position: absolute;
    left: 16px;
    right: auto;
    margin-top: 98px;
    margin-right: 0px;
    margin-left: 0px;
  }
}


@media screen and (max-width: 479px) {
  .grid-road-map-cards {
    margin-left: 41px;
  }

  .progress-circle {
    width: 26px;
    height: 26px;
    border-width: 2px;
  }

  .progress-line {
    width: 3px;
    min-height: 158px;
    min-height: 500px;
  }

  .roadmap-progress-wrapper {
    left: 16px;
  }
  .roadmap-progress-wrapper {
    position: absolute;
    left: 16px;
    right: auto;
    margin-top: 98px;
    margin-right: 0px;
    margin-left: 0px;
  }
}
</style>
