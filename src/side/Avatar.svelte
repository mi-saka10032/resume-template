<script lang="ts">
  import { onMount } from "svelte";

  export let name: string;
  export let info: string;
  export let src: string;

  let loadingFlag: "block" | "none" = "block";
  let imgFlag: "block" | "none" = "none";
  let srcLocal: string = "";

  const loadSrc = () => {
    setTimeout(() => {
      srcLocal = src;
    }, 1000);
  };

  const imgLoaded = () => {
    loadingFlag = "none";
    imgFlag = "block";
  };

  onMount(loadSrc);
</script>

<section class="me">
  <section class="portrait">
    <!-- loading -->
    <div class="loading" style="display: {loadingFlag}">
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
    <!-- 头像照片 -->
    <img
      hidden={!imgLoaded}
      class="avatar"
      style="display: {imgFlag}"
      src={srcLocal}
      alt=""
      on:load={imgLoaded}
    />
  </section>

  <h1 class="name">{name}</h1>
  <h4 class="info-job">{info}</h4>
</section>
