<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import * as Resizable from "$lib/components/ui/resizable/index.js";

  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";

  import * as Carousel from "$lib/components/ui/carousel/index.js";

  import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";

  import { Toaster, toast } from 'svelte-sonner'

  type Artwork = {
    artist: string;
    art: string;
  };

  const works: Artwork[] = [
    {
      artist: "Ornella Binni",
      art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80"
    },
    {
      artist: "Tom Byrom",
      art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80"
    },
    {
      artist: "Vladimir Malyavko",
      art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
    }
  ];

  import { Separator } from "$lib/components/ui/separator/index.js";

  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  const frameworks = [
    {
      value: "sveltekit",
      label: "SvelteKit"
    },
    {
      value: "next",
      label: "Next.js"
    },
    {
      value: "astro",
      label: "Astro"
    },
    {
      value: "nuxt",
      label: "Nuxt.js"
    }
  ];


  import ChevronLeft from "lucide-svelte/icons/chevron-left";
  import ChevronRight from "lucide-svelte/icons/chevron-right";
  import { mediaQuery } from "svelte-legos";
  import * as Pagination from "$lib/components/ui/pagination/index.js";

  const isDesktop = mediaQuery("(min-width: 768px)");

  let count = 20;
  $: perPage = $isDesktop ? 3 : 8;
  $: siblingCount = $isDesktop ? 1 : 0;

  // Adding components from the shadcn library
  import * as Accordion from "$lib/components/ui/accordion";
  import Terminal from "lucide-svelte/icons/terminal";
  import * as Alert from "$lib/components/ui/alert/index.js";
  import CircleAlert from "lucide-svelte/icons/circle-alert";

  import * as AlertDialog from "$lib/components/ui/alert-dialog";

  import * as Avatar from "$lib/components/ui/avatar/index.js";
  import { Badge } from "$lib/components/ui/badge/index.js";
  import LoaderCircle from "lucide-svelte/icons/loader-circle";

  import { today } from "@internationalized/date";
  import CalendarIcon from "lucide-svelte/icons/calendar";

  import {
    DateFormatter,
    type DateValue,
    getLocalTimeZone
  } from "@internationalized/date";
  import { cn } from "$lib/utils.js";
  import { Calendar } from "$lib/components/ui/calendar/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";

  const df = new DateFormatter("en-US", {
    dateStyle: "long"
  });

  let value: DateValue | undefined = undefined;

  import { Textarea } from "$lib/components/ui/textarea/index.js";

</script>
<!-- BEGINNING OF PAGE ELEMENTS -->

<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger class="flex items-center gap-1">
          <Breadcrumb.Ellipsis class="h-4 w-4" />
          <span class="sr-only">Toggle menu</span>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="start">
          <DropdownMenu.Item>Documentation</DropdownMenu.Item>
          <DropdownMenu.Item>Themes</DropdownMenu.Item>
          <DropdownMenu.Item>GitHub</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/docs/components">Components</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>

<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
  Taxing Laughter: The Joke Tax Chronicles
</h1>

<h2
  class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
>
  The People of the Kingdom
</h2>

<Badge>Badge</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>
<p class="text-muted-foreground">Muted</p>

<Button disabled>
  <LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>

<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">The Joke Tax</h3>
<Accordion.Root>
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
    <Accordion.Content>
      Yes. It adheres to the WAI-ARIA design pattern.
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>

<Alert.Root variant="destructive">
  <CircleAlert class="h-4 w-4" />
  <Alert.Title>Error</Alert.Title>
  <Alert.Description
    >Your session has expired. Please login again.</Alert.Description
  >
</Alert.Root>

<Alert.Root>
  <Terminal class="h-4 w-4" />
  <Alert.Title>Heads up!</Alert.Title>
  <Alert.Description
    >You can add components to your app using the cli.</Alert.Description
  >
</Alert.Root>

<AlertDialog.Root>
  <AlertDialog.Trigger asChild let:builder>
    <Button builders={[builder]} variant="outline">Show Dialog</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Header>
      <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
      <AlertDialog.Description>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialog.Description>
    </AlertDialog.Header>
    <AlertDialog.Footer>
      <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
      <AlertDialog.Action>Continue</AlertDialog.Action>
    </AlertDialog.Footer>
  </AlertDialog.Content>
</AlertDialog.Root>

<Avatar.Root>
  <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
  <Avatar.Fallback>CN</Avatar.Fallback>
</Avatar.Root>

<Calendar bind:value class="rounded-md border" />

<Popover.Root>
  <Popover.Trigger asChild let:builder>
    <Button
      variant="outline"
      class={cn(
        "w-[280px] justify-start text-left font-normal",
        !value && "text-muted-foreground"
      )}
      builders={[builder]}
    >
      <CalendarIcon class="mr-2 h-4 w-4" />
      {value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date"}
    </Button>
  </Popover.Trigger>
  <Popover.Content class="w-auto p-0">
    <Calendar bind:value initialFocus />
  </Popover.Content>
</Popover.Root>

<div class="grid w-full gap-1.5">
  <Label for="message-2">Your Message</Label>
  <Textarea placeholder="Type your message here." id="message-2" />
  <p class="text-sm text-muted-foreground">
    Your message will be copied to the support team.
  </p>
</div>

<ScrollArea
  class="w-96 whitespace-nowrap rounded-md border"
  orientation="horizontal"
>
  <div class="flex w-max space-x-4 p-4">
    {#each works as artwork (artwork.artist)}
      <figure class="shrink-0">
        <div class="overflow-hidden rounded-md">
          <img
            src={artwork.art}
            alt={`Photo by ${artwork.artist}`}
            class="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        <figcaption class="pt-2 text-xs text-muted-foreground">
          Photo by
          <span class="font-semibold text-foreground">
            {artwork.artist}
          </span>
        </figcaption>
      </figure>
    {/each}
  </div>
</ScrollArea>

<h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
  People stopped telling jokes
</h4>

<Button
  variant="outline"
  on:click={() =>
    toast.success("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.info("Undo")
      }
    })}
>
  Show Toast
</Button>
<Toaster />

<ScrollArea class="h-72 w-48 rounded-md border">
  <div class="p-4">
    <h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>
    {#each tags as tag}
      <div class="text-sm">
        {tag}
      </div>
      <Separator class="my-2" />
    {/each}
  </div>
</ScrollArea>

<p class="leading-7 [&:not(:first-child)]:mt-6">
  The king, seeing how much happier his subjects were, realized the error of his
  ways and repealed the joke tax.
</p>

<div class="my-6 w-full overflow-y-auto">
  <table class="w-full">
    <thead>
      <tr class="m-0 border-t p-0 even:bg-muted">
        <th
          class="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
        >
          King's Treasury
        </th>
        <th
          class="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
        >
          People's happiness
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="m-0 border-t p-0 even:bg-muted">
        <td
          class="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
        >
          Empty
        </td>
        <td
          class="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
        >
          Overflowing
        </td>
      </tr>
      <tr class="m-0 border-t p-0 even:bg-muted">
        <td
          class="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
        >
          Modest
        </td>
        <td
          class="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
        >
          Satisfied
        </td>
      </tr>
      <tr class="m-0 border-t p-0 even:bg-muted">
        <td
          class="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
        >
          Full
        </td>
        <td
          class="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
        >
          Ecstatic
        </td>
      </tr>
    </tbody>
  </table>
</div>

<Carousel.Root class="w-full max-w-xs">
  <Carousel.Content>
    {#each Array(5) as _, i (i)}
      <Carousel.Item>
        <div class="p-1">
          <Card.Root>
            <Card.Content
              class="flex aspect-square items-center justify-center p-6"
            >
              <span class="text-4xl font-semibold">{i + 1}</span>
            </Card.Content>
          </Card.Root>
        </div>
      </Carousel.Item>
    {/each}
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
</Carousel.Root>

<ul class="my-6 ml-6 list-disc [&>li]:mt-2">
  <li>1st level of puns: 5 gold coins</li>
  <li>2nd level of jokes: 10 gold coins</li>
  <li>3rd level of one-liners : 20 gold coins</li>
</ul>

<code
  class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
>
  radix-svelte
</code>

<p class="text-xl text-muted-foreground">
  A modal dialog that interrupts the user with important content and expects a
  response.
</p>

<div class="text-lg font-semibold">Are you sure absolutely sure?</div>

<small class="text-sm font-medium leading-none">Email address</small>


<Resizable.PaneGroup
  direction="vertical"
  class="min-h-[200px] max-w-md rounded-lg border"
>
  <Resizable.Pane defaultSize={25}>
    <div class="flex h-full items-center justify-center p-6">
      <span class="font-semibold">Header</span>
    </div>
  </Resizable.Pane>
  <Resizable.Handle />
  <Resizable.Pane defaultSize={75}>
    <div class="flex h-full items-center justify-center p-6">
      <span class="font-semibold">Content</span>
    </div>
  </Resizable.Pane>
</Resizable.PaneGroup>

<p class="text-sm text-muted-foreground">Enter your email address.</p>


<Resizable.PaneGroup
  direction="horizontal"
  class="min-h-[200px] max-w-md rounded-lg border"
>
  <Resizable.Pane defaultSize={25}>
    <div class="flex h-full items-center justify-center p-6">
      <span class="font-semibold">Sidebar</span>
    </div>
  </Resizable.Pane>
  <Resizable.Handle withHandle />
  <Resizable.Pane defaultSize={75}>
    <div class="flex h-full items-center justify-center p-6">
      <span class="font-semibold">Content</span>
    </div>
  </Resizable.Pane>
</Resizable.PaneGroup>

<Card.Root class="w-[350px]">
  <Card.Header>
    <Card.Title>Create project</Card.Title>
    <Card.Description>Deploy your new project in one-click.</Card.Description>
  </Card.Header>
  <Card.Content>
    <form>
      <div class="grid w-full items-center gap-4">
        <div class="flex flex-col space-y-1.5">
          <Label for="name">Name</Label>
          <Input id="name" placeholder="Name of your project" />
        </div>
        <div class="flex flex-col space-y-1.5">
          <Label for="framework">Framework</Label>
          <Select.Root>
            <Select.Trigger id="framework">
              <Select.Value placeholder="Select" />
            </Select.Trigger>
            <Select.Content>
              {#each frameworks as framework}
                <Select.Item value={framework.value} label={framework.label}
                  >{framework.label}</Select.Item
                >
              {/each}
            </Select.Content>
          </Select.Root>
        </div>
      </div>
    </form>
  </Card.Content>
  <Card.Footer class="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
  </Card.Footer>
</Card.Root>


<Pagination.Root {count} {perPage} {siblingCount} let:pages let:currentPage>
  <Pagination.Content>
    <Pagination.Item>
      <Pagination.PrevButton>
        <ChevronLeft class="h-4 w-4" />
        <span class="hidden sm:block">Previous</span>
      </Pagination.PrevButton>
    </Pagination.Item>
    {#each pages as page (page.key)}
      {#if page.type === "ellipsis"}
        <Pagination.Item>
          <Pagination.Ellipsis />
        </Pagination.Item>
      {:else}
        <Pagination.Item>
          <Pagination.Link {page} isActive={currentPage === page.value}>
            {page.value}
          </Pagination.Link>
        </Pagination.Item>
      {/if}
    {/each}
    <Pagination.Item>
      <Pagination.NextButton>
        <span class="hidden sm:block">Next</span>
        <ChevronRight class="h-4 w-4" />
      </Pagination.NextButton>
    </Pagination.Item>
  </Pagination.Content>
</Pagination.Root>