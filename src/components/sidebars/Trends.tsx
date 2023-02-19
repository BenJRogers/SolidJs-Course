import { For } from "solid-js";

const randomize = () => Math.floor(Math.random() * 500);

const trends = [
  {
    category: "sports",
    content: "Some team won something",
    glideCount: randomize(),
  },
  {
    category: "space",
    content: "SpaceX just launched new rocket",
    glideCount: randomize(),
  },
  {
    category: "political",
    content: "New election announced",
    glideCount: randomize(),
  },
  {
    category: "Tech",
    content: "Chat GPT real threat to Google?",
    glideCount: randomize(),
  },
  {
    category: "Movies",
    content: "Yet another marvel film has been made, when will they stop!?",
    glideCount: randomize(),
  },
  {
    category: "Finance",
    content: "Bitcoin on the rise again!",
    glideCount: randomize(),
  },
];

const TrendsSidebar = () => {
  return (
    <div class="bg-gray-800 overflow-hidden flex-it rounded-2xl">
      <div class="flex-it p-4">
        <span class="text-xl font-bold">Trends</span>
      </div>

      <For each={trends}>
        {(trend) => (
          <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
            <div class="flex-it">
              <span class="text-g ray-400 text-sm">{trend.content}</span>
              <span class="text-lg font-bold">{trend.category}</span>
              <span class="text-gray-400 text-sm">
                {trend.glideCount} glides
              </span>
            </div>
          </div>
        )}
      </For>
    </div>
  );
};

export default TrendsSidebar;
