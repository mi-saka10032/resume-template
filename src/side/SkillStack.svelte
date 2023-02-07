<script lang="ts">
  export let skillStack: string[];
</script>

<div class="stack info-unit">
  <h2><i class="fa fa-code" aria-hidden="true" />技术栈</h2>
  <hr />
  <ul>
    {#each skillStack as item}
    <li>
      <div>{item}</div>
      <div class="divider"></div>
    </li>
    {/each}
  </ul>
</div>
