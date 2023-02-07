<script lang="ts">
  export let projects: Project[];
</script>

<section class="project info-unit">
  <h2>
    <i class="fa fa-terminal" aria-hidden="true" />个人项目
  </h2>
  <hr />
  <ul>
    {#each projects as item}
      <li>
        <h3>
          <span>{item.title}</span>
          {#if item.demoLink}
            <span class="link">
              <a href={item.demoLink} target="_blank">{item.demoName || 'Demo'}</a>
            </span>
          {/if}
          <time>{item.startTime}-{item.endTime}</time>
        </h3>
        <ul class="info-content">
          <li>技术栈：{item.skill}</li>
          <li>
            <i class="fa fa-paper-plane-o" aria-hidden="true" />
            [背景]{item.background}
            <br />
            <i class="fa fa-thumbs-o-up" aria-hidden="true" />
            [结果]{item.result}
          </li>
        </ul>
      </li>
    {/each}
  </ul>
</section>
