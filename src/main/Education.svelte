<script lang="ts">
  export let educations: Education[];
</script>

<section class="edu info-unit">
  <h2>
    <i class="fa fa-graduation-cap" aria-hidden="true" />教育经历
  </h2>
  <hr />
  <ul>
    {#each educations as item}
      <li>
        <h3>
          <span>{item.title}</span>
          <time>{item.startTime}-{item.endTime}</time>
        </h3>
        <p>{@html item.education}</p>
      </li>
    {/each}
  </ul>
</section>
