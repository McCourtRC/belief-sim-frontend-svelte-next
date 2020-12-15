<script>
  export let onyes;
  export let onno;
</script>

<style>
  .card {
    width: 50vw;
    min-height: 50vh;
    border-radius: 10px;
    margin: auto;
    margin-top: 50px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(255, 62, 0, 0.2);
  }
  p {
    font-size: 20px;
  }

  .btns {
    display: flex;
    justify-content: space-evenly;
  }
  .btn {
    font-size: 24px;
    padding: 10px 20px;
    color: #ff3e00;
    background-color: white;
    border: 1px solid #ff3e00;
    border-radius: 10%;
    width: 100px;
  }
  .yes {
    color: white;
    background-color: #ff3e00;
  }
</style>

<div class="card">
  <h2>Is this a belief?</h2>
  <p>
    <slot />
  </p>
  <div class="btns">
    <button class="btn" on:click={onno}>No</button>
    <button class="btn yes" on:click={onyes}>Yes</button>
  </div>
</div>
