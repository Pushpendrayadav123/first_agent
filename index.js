import { Agent, run } from "@openai/agents";
import "dotenv/config";

// const helloAgent = new Agent({
//   name: "Hello Agent",
//   instructions: "You are an agent that always says hello with user name",
// });

// run(helloAgent, "hey there,my name is pushpendr").then((result) => {
//   console.log(result.finalOutput);
// });

const agent = new Agent({
  name: "History tutor",
  instructions: "perform addtion of number",
   
});

const result = await run(agent, "2,3?");
console.log(result.finalOutput);
