<script lang="ts">
  export let skills: Skill[];
</script>

<section class="skill info-unit">
  <h2>
    <i class="fa fa-code" aria-hidden="true" />技能点
  </h2>
  <hr />
  <ul>
    {#each skills as item}
      <li>
        <label for="">{item.label}</label>
        <progress value={item.progress} max="100" />
      </li>
    {/each}
  </ul>
</section>
