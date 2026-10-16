import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4900";

function TabsComponent() {
  const tabs = [
    { name: "Events", colorClass: "bg-red-500 hover:bg-red-600" },
    { name: "Gists", colorClass: "bg-[#ff6347] hover:bg-[#e5533d]" },
    { name: "Housing", colorClass: "bg-[#ff6347] hover:bg-[#e5533d]" },
    { name: "Jobs", colorClass: "bg-blue-500 hover:bg-blue-600" },
    { name: "Market", colorClass: "bg-yellow-500 hover:bg-yellow-600" },
    { name: "Services", colorClass: "bg-purple-500 hover:bg-purple-600" }

  ];

  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadFeeds() {
      setLoading(true);
      setError("");

      try {
        const query = new URLSearchParams({ category: activeTab });
        const response = await fetch(`${API_URL}/api/feeds?${query}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Could not load ${activeTab.toLowerCase()} (${response.status}).`);
        }

        const data = await response.json();
        const results = Array.isArray(data) ? data : data.items;

        if (!Array.isArray(results)) {
          throw new Error("The feeds response must be an array or contain an items array.");
        }

        setFeeds(results);
      } catch (requestError) {
        if (requestError.name !== "AbortError") {
          setError(requestError.message || "Could not load feeds.");
          setFeeds([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadFeeds();
    return () => controller.abort();
  }, [activeTab]);

  return (


    <div >


      <div className="bg-amber-200 text-center max-w-3xs py-3 mx-auto text-white rounded">Announcement</div>
      <div className="flex flex-row gap-4 items-center justify-center mt-4 min-w-screen scroll-fade overflow-x-hidden px-6 py-2">
        {tabs.map((tab) => (
          <Button
            key={tab.name}
            type="button"
            onClick={() => setActiveTab(tab.name)}
            aria-pressed={activeTab === tab.name}
            className={`${tab.colorClass} text-white ${activeTab === tab.name ? "ring-2 ring-offset-2 ring-foreground" : "opacity-70"}`}
            size="lg"
          >
            {tab.name}
          </Button>
        ))}
      </div>
      <hr className="my-2 max-w-96 mx-auto text-primary-foreground" />
      <section className="mx-auto max-w-[90vh] px-4" aria-live="polite">
        <h2 className="mb-4 text-xl font-semibold">{activeTab}</h2>
        {loading && <p><Loader className="animate-spin transition-all"/> {activeTab.toLowerCase()}...</p>}
        {error && <p role="alert">{error}</p>}
        {!loading && !error && feeds.length === 0 && <p>No {activeTab.toLowerCase()} found.</p>}
        {!loading && !error && feeds.length > 0 && (
          <div className="grid gap-4">
            {feeds.map((feed, index) => (
              <article
                key={feed.id ?? index}
                className="rounded-lg border border-border bg-card p-4 text-card-foreground"
              >
                <h3 className="font-semibold">{feed.title ?? feed.name ?? "Untitled"}</h3>
                {(feed.description ?? feed.content) && (
                  <p className="mt-2 text-muted-foreground">
                    {feed.description ?? feed.content}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </section>
    </div>



  )
}

export default TabsComponent