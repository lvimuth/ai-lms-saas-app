import { Inngest } from "inngest";
import { serve } from "inngest/next";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "ai-lms-saasp" });

// Create an API that serves zero functions
export default serve({
  client: inngest,
  functions: [
    helloWorld,
    CreateNewUser,
    /* your functions will be passed here later! */
  ],
});
// Step 2 code...
const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);

const CreateNewUser = inngest.createFunction(
  { id: "create-user" },
  { event: "user.create" },
  async ({ event, step }) => {
    console.log("////////////////////");
    const user = event.data;
    // Get event data
    const result = await step.run(
      "Check user and create new if not in DB",
      async () => {
        const result = await db
          .select()
          .from(USER_TABLE)
          .where(
            eq(USER_TABLE?.email, user?.primaryEmailAddress?.emailAddress)
          );
        // If not then create a new
        if (result?.length == 0) {
          const userResp = await db
            .insert(USER_TABLE)
            .values({
              name: user?.fullName,
              email: user?.primaryEmailAddress?.emailAddress,
            })
            .returning({ id: USER_TABLE.id });
          console.log("User data received:", event.data.user);
          return userResp;
        }
        return result;
      }
    );
    return "Success";
  }
  // Step is to send welcome email

  // send emai notification to user after 3 days
);
