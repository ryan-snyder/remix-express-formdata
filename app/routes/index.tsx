import { ActionFunction } from "@remix-run/node";
import { Form} from "@remix-run/react";

export const action: ActionFunction = async ({ request }) => {
    let formData = await request.formData();
    const name = formData.get('name');
    console.log(name);
    return { }
  };

export default function Index() {
    
    return (
        <Form method="post">
            <label><input name="name" type="text" /></label>
            <button type="submit">Create</button>
        </Form>
    );
}