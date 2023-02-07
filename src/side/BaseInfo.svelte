<script lang="ts">
  export let baseInfo: Info[];
</script>

<section class="profile info-unit">
  <h2>
    <i class="fa fa-user" aria-hidden="true" />基本信息
  </h2>
  <hr />
  <ul>
    {#each baseInfo as item}
      <li>
        <label for="">{item.label}</label>
        <span>{item.value}</span>
      </li>
    {/each}
  </ul>
</section>
