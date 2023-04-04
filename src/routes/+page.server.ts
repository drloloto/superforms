import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from "zod"

const schema = z.object({
	titel: z.string().min(1).max(100),
	titel2: z.string().min(1).max(100),
	preis: z.number(),
	order: z.number(),
	live: z.boolean().default(false)
});
export const load = async (event) => {
	const form = await superValidate(event, schema);
	return { form };
}

export const actions = {
  default: async (event) => {
    const form = await superValidate(event, schema);
    console.log('POST', form);

    if (!form.valid) {
      console.log("invalid form", form)
      return fail(400, { form });
    }
    console.log("Valid form", form)
    return { form };
  }
};
