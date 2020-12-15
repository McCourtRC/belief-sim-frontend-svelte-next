<script>
  export let value;
  export let placeholder;
</script>

<style>
  input {
    width: 50vw;
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    margin-right: 10px;
  }
</style>

<input type="text" {placeholder} bind:value />
