<template>
  <div class="flexBox">
    <slot />
  </div>
</template>

<style lang="postcss">
.flexBox {
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  font-size: 1.1rem;
  line-height: 1;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  h1 {
    /* background: #15C2CB; */
    display: inline-block;
    padding: 0.25em;
    color: #0F131E;
    margin-bottom: 1em;
    width: fit-content;
    position: relative;

    font-size: 2.25rem;
    line-height: 2.5rem;
    margin-left: -0.05em;

    &::before {
      content: " ";
      display: block;
      position: absolute;
      width: calc(100%);
      height: calc(100%);
      margin-left: -0.25em;
      margin-top: -0.25em;
      background: #15C2CB;
      z-index: -1;
      transform: rotate(-1deg);
    }

    code {
      background: transparent !important;
      font-size: 2.25rem;
    }
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 1em;
    line-height: 1.25em;
  }

  code {
    font-size: 1.10rem;
  }

  blockquote {
    display: flex;
    align-items: center;
    background: #0F131E;
    color: #F3EFF5;
    border-color: #F141A8;
    border-left-width: 3px;
    border-radius: 0.25rem;
    font-size: 1.1em;
    line-height: 1.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;

    p {
      margin-bottom: 0;
    }
  }
}
</style>