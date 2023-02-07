<script lang="ts">
  export let workInfo: Work[];
</script>

<section class="work info-unit">
  <h2>
    <i class="fa fa-shopping-bag" aria-hidden="true" />工作经历
  </h2>
  <hr />
  <ul>
    {#each workInfo as item}
      <li>
        <h3>
          <span>{item.title}</span>
          <time>{item.startTime}-{item.endTime}</time>
        </h3>
        <ul class="info-content">
          {#each item.desc as htmlText}
            {#if typeof htmlText === "string"}
              <li>{@html htmlText}</li>
            {:else if Array.isArray(htmlText)}
              <ul>
                {#each htmlText as innerText}
                  <li>{@html innerText}</li>
                {/each}
              </ul>
            {/if}
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</section>
