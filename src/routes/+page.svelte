<script lang="ts">
	import { superForm } from "sveltekit-superforms/client";
	import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte";

	export let data;
	const { form, enhance, reset } = superForm(data.form, {
  applyAction: true,
  invalidateAll: true,
  resetForm: true,
  onResult({ result }) { console.log(data.form.data) },
})
</script>
<div class="container">
<SuperDebug data={$form} />

<form method="POST" use:enhance>
	<div class="m-auto my-8 rounded border-2 border-red-700 py-8 text-center">
		<h1 class="text-xl">Eingabe</h1>
		<div class="m-auto flex flex-col">
			<div class="m-auto w-40">
				<label for="titel">Titel</label>
				<input type="text" name="titel" id="titel" bind:value={$form.titel} />
			</div>
			<div class="m-auto w-40">
				<label for="titel2">Titel 2.</label>
				<input type="text" name="titel2" id="titel2" bind:value={$form.titel2} />
			</div>
			<div class="m-auto w-40">
				<label for="preis">Preis</label>
				<input type="number" name="preis" id="preis" bind:value={$form.preis} />
			</div>
			<div class="m-auto w-40">
				<label for="order">Order</label>
				<input type="number" name="order" id="order" bind:value={$form.order} />
			</div>
			<div class="m-auto mb-6 w-40">
				<label for="live">Aktiv</label>
				<input type="checkbox" name="live" id="live" bind:checked={$form.live} />
			</div>
			<button class="m-auto w-20 rounded bg-white p-2" type="submit">Speicheln!</button>
		</div>
	</div>
</form>
</div>