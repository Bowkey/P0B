import { Button } from "@/components/ui/button";

function TabsComponent() {
  const tabs = [
    { name: "Events", colorClass: "bg-red-500 hover:bg-red-600" },
    { name: "Jobs", colorClass: "bg-blue-500 hover:bg-blue-600" },
    { name: "Gists", colorClass: "bg-[#ff6347] hover:bg-[#e5533d]" },
    { name: "Market", colorClass: "bg-yellow-500 hover:bg-yellow-600" },
    { name: "Services", colorClass: "bg-purple-500 hover:bg-purple-600" }

  ];
  return (


    <div >


      <div className="bg-amber-200 text-center max-w-3xs py-3 mx-auto text-white rounded">Announcement</div>
      <div className="flex flex-row gap-4 items-center justify-center mt-4">
        {tabs.map((tab) => (
          <Button key={tab.name} className={`${tab.colorClass} text-white`} size="lg">
            {tab.name}
          </Button>
        ))}
      </div>
      <hr className="my-2 max-w-96 mx-auto text-primary-foreground" />
      <div className="mx-auto max-w-[90vh]">feeds</div>
    </div>



  )
}

export default TabsComponent