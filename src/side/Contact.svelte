<script lang="ts">
  export let contacts: Contact[];
</script>

<section class="contact info-unit">
  <h2>
    <i class="fa fa-phone" aria-hidden="true" />联系方式
  </h2>
  <hr />
  <ul>
    {#each contacts as item}
      <li>
        <label for="">{item.label}</label>
        {#if item.link}
          <a href={item.value} target="_blank">{item.value}</a>
        {:else}
          <span>{item.value}</span>
        {/if}
      </li>
    {/each}
  </ul>
</section>
