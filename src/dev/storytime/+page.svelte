<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Alert from "$lib/components/ui/alert/index.js";
  import CircleAlert from "lucide-svelte/icons/circle-alert";
  import Terminal from "lucide-svelte/icons/terminal";
  import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import { Textarea } from "$lib/components/ui/textarea/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
  import { Toaster, toast } from 'svelte-sonner';
  import * as Accordion from "$lib/components/ui/accordion";
</script>

<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Page>The Joke Tax Chronicles</Breadcrumb.Page>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>

<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">The Joke Tax Chronicles</h1>

<p class="leading-7 [&:not(:first-child)]:mt-6">
  Once upon a time, in a kingdom not so far away, there lived a king who loved to laugh. But one day, the royal treasury ran low, so the king enacted a <strong>Joke Tax</strong>!
</p>

<Alert.Root>
  <Terminal class="h-4 w-4" />
  <Alert.Title>Hear ye, hear ye!</Alert.Title>
  <Alert.Description>
    A royal decree has been issued. All jokes, puns, and witty remarks shall henceforth be taxed!
  </Alert.Description>
</Alert.Root>

<div class="my-6 w-full overflow-y-auto">
  <table class="w-full">
    <thead>
      <tr class="m-0 border-t p-0 even:bg-muted">
        <th class="border px-4 py-2 text-left font-bold">Jest Category</th>
        <th class="border px-4 py-2 text-left font-bold">Tax Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr class="m-0 border-t p-0 even:bg-muted">
        <td class="border px-4 py-2 text-left">Puns</td>
        <td class="border px-4 py-2 text-left">5 gold coins</td>
      </tr>
      <tr class="m-0 border-t p-0 even:bg-muted">
        <td class="border px-4 py-2 text-left">Jokes</td>
        <td class="border px-4 py-2 text-left">10 gold coins</td>
      </tr>
      <tr class="m-0 border-t p-0 even:bg-muted">
        <td class="border px-4 py-2 text-left">One-Liners</td>
        <td class="border px-4 py-2 text-left">20 gold coins</td>
      </tr>
    </tbody>
  </table>
</div>

<p class="leading-7 [&:not(:first-child)]:mt-6">
  At first, the people grudgingly paid the tax. The king's treasury began to fill up, while the people's laughter diminished.
</p>

<Card.Root class="w-[350px]">
  <Card.Header>
    <Card.Title>Royal Treasury vs. People's Happiness</Card.Title>
  </Card.Header>
  <Card.Content>
    <div class="flex justify-between">
      <div>
        <p class="font-bold">Treasury Status</p>
        <p class="text-sm text-muted-foreground">Modest</p>
      </div>
      <div>
        <p class="font-bold">People's Happiness</p>
        <p class="text-sm text-muted-foreground">Declining</p>
      </div>
    </div>
  </Card.Content>
</Card.Root>

<p class="leading-7 [&:not(:first-child)]:mt-6">
  As time went on, the people grew tired of paying to express their mirth. An underground joke resistance formed, communicating via a complex vegetable code.
</p>

<ScrollArea class="my-6 h-48 w-96 rounded-md border">
  <p class="p-4">Why do seagulls fly over the sea? Because if they flew over the bay, they would be bagels!</p>
  <Separator class="my-4" />
  <p class="p-4">What do you call a bear with no teeth? A gummy bear!</p>
  <Separator class="my-4" />
  <p class="p-4">Why don't scientists trust atoms? Because they make up everything!</p>
</ScrollArea>

<p class="leading-7 [&:not(:first-child)]:mt-6">
  Word of the resistance reached the king. He realized the error of his ways and repealed the Joke Tax.
</p>

<Alert.Root variant="destructive">
  <CircleAlert class="h-4 w-4" />
  <Alert.Title>Hear ye, hear ye!</Alert.Title>
  <Alert.Description>
    The Joke Tax has been repealed! Laugh freely and live merrily, good citizens!
  </Alert.Description>
</Alert.Root>

<p class="leading-7 [&:not(:first-child)]:mt-6">
  Laughter and merriment returned to the kingdom, filling the land with joy.
</p>

<Accordion.Root class="my-6">
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Any final thoughts from the king?</Accordion.Trigger>
    <Accordion.Content>
      "In trying to fill the treasury, I almost robbed my kingdom of a far greater treasure - the laughter and happiness of my people. I now see that true wealth lies in the joy we share with one another."
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>

<Label class="text-lg font-semibold mt-6">Compose a witty remark to celebrate (no tax!)</Label>
<Textarea placeholder="Type your joke here..." class="mt-2" />

<Button class="mt-6" on:click={() => toast.success('The End!', { description: 'Thanks for reading and laughing along!'})}>
  Celebrate
</Button>
<Toaster />