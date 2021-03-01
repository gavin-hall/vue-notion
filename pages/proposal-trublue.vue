<template>
  <NotionRenderer :blockMap="blockMap" fullPage />
</template>

<script>
export default {
  data: () => ({ blockMap: null }),
  async asyncData({ $notion }) {
    // use Notion module to get Notion blocks from the API via a Notion pageId
    const blockMap = await $notion.getPageBlocks(
      "6c9287fab80044b4958329f052f76933"
    );
    return { blockMap };
  },
};
</script>

<style>
@import "vue-notion/src/styles.css"; 
/* optional Notion-like styles */
</style>
