<script lang="ts">
  export let rightAside: RightAside[];
</script>

<aside>
  <ul>
    {#each rightAside as item}
      <li>
        <a href={item.link} target="_blank">{item.label}</a>
      </li>
    {/each}
  </ul>
</aside>
